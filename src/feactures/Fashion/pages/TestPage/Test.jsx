import { useCallback, useEffect, useRef, useState } from "react";

import MainLayout from "../../../../layouts/MainLayout";

import Title from "../../../../components/Title";
import Subtitle from "../../../../components/Subtitle";
import DropZone from "../../../../components/DropZone";
import ImagePreview from "../../../../components/ImagePreview";
import SpinnerLoading from "../../../../components/SpinnerLoading";

import { predict } from "../../../../helpers/Predict";
import {
  startCamera,
  stopCamera,
  switchCamera,
} from "../../../../helpers/ProcessCamera";
import { processImageGray } from "../../../../helpers/ProcessImage";

import { Button } from "@material-tailwind/react";

import * as tf from "@tensorflow/tfjs";
import Webcam from "webcam-react";

const Test = () => {
  const webcamRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [loadedModel, setLoadedModel] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [cameraActive, setCameraActive] = useState(false);
  const [mirrorState, setMirrorState] = useState(true);

  const unload_model = "/models/fashion_mnist/cnn_model/model.json";
  const classNames = [
    "T-shirt/top",
    "Trouser",
    "Pullover",
    "Dress",
    "Coat",
    "Sandal",
    "Shirt",
    "Sneaker",
    "Bag",
    "Ankle boot",
  ];

  let mediaStream = null;

  const onDrop = useCallback((acceptedFiles) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(reader.result);
    };
    reader.readAsDataURL(acceptedFiles[0]);
  }, []);

  const loadModel = async () => {
    setIsLoading(true);
    const model = await tf.loadLayersModel(unload_model);
    console.log("Loaded");
    setIsLoading(false);
    setLoadedModel(model);
  };

  const makePrediccion = async () => {
    const tensor = await processImageGray(
      cameraActive ? webcamRef.current.getScreenshot() : image,
      28,
      28
    );
    const predictedValue = await predict(loadedModel, tensor, classNames);
    setPrediction(predictedValue);
  };

  if (image && !cameraActive) makePrediccion();

  useEffect(() => {
    loadModel();
    if (cameraActive) {
      const predictionInterval = setInterval(() => {
        makePrediccion();
      }, 2000);
      return () => {
        clearInterval(predictionInterval);
      };
    }
  }, [cameraActive]);

  return (
    <MainLayout>
      {isLoading && <SpinnerLoading />}
      <div className="min-h-screen pt-20">
        <Title title={"Fashion clothes clasificaction"} />
        <div className="flex justify-evenly items-center">
          <div className="w-full sm:w-3/4 md:w-6/12 flex flex-col justify-center">
            <div className="w-full flex justify-between items-center">
              <Button
                className={`mb-4 ${cameraActive && "bg-red-800"}`}
                onClick={() =>
                  cameraActive
                    ? (stopCamera(
                        webcamRef,
                        mediaStream,
                        setCameraActive,
                        setMirrorState
                      ),
                      setPrediction(""))
                    : (startCamera(webcamRef, mediaStream, setCameraActive),
                      setImage(null),
                      setPrediction(""))
                }
              >
                {cameraActive ? "Stop Camera" : "Use camera"}
              </Button>
              {cameraActive ? (
                <Button
                  className="mb-4 bg-gray-800"
                  onClick={() =>
                    switchCamera(
                      webcamRef,
                      mediaStream,
                      mirrorState,
                      setMirrorState
                    )
                  }
                >
                  Change camera
                </Button>
              ) : (
                <Button
                  className="mb-4 bg-gray-800"
                  disabled={!image}
                  onClick={makePrediccion}
                >
                  Try
                </Button>
              )}
            </div>
            {cameraActive ? (
              <Webcam
                audio={false}
                ref={webcamRef}
                mirrored={mirrorState}
                screenshotFormat="image/jpeg"
                className="max-h-[400px] sm:max-h-auto w-full sm:w-auto"
              />
            ) : (
              <div>
                <DropZone
                  onDrop={onDrop}
                  accept={"image/*"}
                  name={"image"}
                  id={"image"}
                />
                {image && <ImagePreview image={image} />}
              </div>
            )}
          </div>
        </div>
        <Subtitle title={prediction} className={"text-center mt-2"} />
      </div>
    </MainLayout>
  );
};

export default Test;
