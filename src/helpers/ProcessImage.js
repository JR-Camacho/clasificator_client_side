import * as tf from '@tensorflow/tfjs';

  export const processImageRGB = async (image, width = 100, height = 100) => {
      let imgElement = document.createElement('img');
      imgElement.src = image;

      await imgElement.decode();
  
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(imgElement, 0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height);
      const colorData = new Float32Array(width * height * 3);
  
      for (let i = 0; i < imageData.data.length; i += 4) {
        const pixelIndex = i / 4;
        const colorIndex = pixelIndex * 3;
        colorData[colorIndex] = imageData.data[i] / 255; // Valor rojo (red)
        colorData[colorIndex + 1] = imageData.data[i + 1] / 255; // Valor verde (green)
        colorData[colorIndex + 2] = imageData.data[i + 2] / 255; // Valor azul (blue)
      }
  
      const tensor = tf.tensor4d(colorData, [1, 100, 100, 3]);
      return tensor;
  };

  export const processImageGray = async (image, width = 100, height = 100) => {
      let imgElement = document.createElement('img');
      imgElement.src = image;

      await imgElement.decode();
  
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(imgElement, 0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height);
      const grayData = new Array(width * height).fill(0);

      for (let i = 0; i < imageData.data.length; i += 4) {
        const grayValue = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
        const pixelIndex = i / 4;
        grayData[pixelIndex] = grayValue / 255;
      }

      const tensor = tf.tensor4d(grayData, [1, width, height, 1]);
      return tensor;
  };