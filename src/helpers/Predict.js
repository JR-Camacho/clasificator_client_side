export const predict = async (model, tensor, classNames, isOneOutputLayer = false) => {
    const predictions = await model.predict(tensor).dataSync();
    console.log(predictions);
  
    const maxPrediction = Math.max(...predictions);
    const maxIndex =   isOneOutputLayer?  Math.round(predictions) :  predictions.indexOf(maxPrediction);
  
    console.log(classNames[maxIndex]);
    return classNames[maxIndex];
  };
  