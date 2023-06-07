import { useCallback, useEffect, useState } from "react";

import MainLayout from "../../../../layouts/MainLayout";

import Title from "../../../../components/Title";
import Subtitle from "../../../../components/Subtitle";
import DropZone from "../../../../components/DropZone";
import ImagePreview from "../../../../components/ImagePreview";
import Whiteboard from "../../../../components/Whiteboard";

import { predict } from "../../../../helpers/Predict";
import { processImageGray } from "../../../../helpers/ProcessImage";

import { Button } from "@material-tailwind/react";

import * as tf from "@tensorflow/tfjs";

const Test = () => {
  const [image, setImage] = useState(null);
  const [loadedModel, setLoadedModel] = useState(null);
  const [boardActive, setBoardActive] = useState(false);
  const [prediction, setPrediction] = useState("");

  const unload_model = "../../../../../public/models/mnist/model.json";
  const classNames = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];

  const onDrop = useCallback((acceptedFiles) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(reader.result);
    };
    reader.readAsDataURL(acceptedFiles[0]);
  }, []);

  const loadModel = async () => {
    const model = await tf.loadLayersModel(unload_model);
    console.log("Loaded");
    setLoadedModel(model);
  };

  const makePrediccion = async () => {
    const tensor = await processImageGray(image, 28, 28);
    const predictedValue = await predict(loadedModel, tensor, classNames);
    setPrediction(predictedValue);
  };

  if (image) makePrediccion();

  useEffect(() => {
    loadModel();
  }, []);

  console.log(image);

  return (
    <MainLayout>
      <div className="min-h-screen pt-20">
        <Title title={"Handwritten Digit Recognition"} />
        <div className="flex justify-evenly items-center">
          <div className="w-full sm:w-3/4 md:w-6/12 flex flex-col justify-center">
            <div className="w-full flex justify-between items-center">
              <Button
                className={`mb-4 ${boardActive && "bg-red-800"}`}
                onClick={() =>
                  boardActive
                    ? (setBoardActive(false), setImage(null), setPrediction(""))
                    : (setBoardActive(true), setImage(null), setPrediction(""))
                }
              >
                {boardActive ? "Remove Board" : "Use Board"}
              </Button>

              {!boardActive && (
                <Button
                  className="mb-4 bg-gray-800"
                  disabled={!image}
                  onClick={makePrediccion}
                >
                  Try
                </Button>
              )}
            </div>
            {boardActive ? (
              <Whiteboard setImage={setImage} />
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
