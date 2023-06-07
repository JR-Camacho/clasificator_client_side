import { predict } from "./Predict";

import * as tf from '@tensorflow/tfjs';

import svg from '../../public/model.json'

export const loadModel = async (processImage, classNames) => {
  const model = await tf.loadLayersModel(svg);
  console.log("Loaded");

  setInterval(() => {
    predict(model, processImage, classNames);
  }, 1000);
};