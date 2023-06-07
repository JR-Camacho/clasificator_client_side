import MainLayout from "../../layouts/MainLayout";

import cats_vs_dogs_img from "/images/cats_vs_dogs.webp";
import fashion_img from "/images/Fashion.jpeg";
import flowers_img from "/images/flowers.avif";
import mnist_img from "/images/mnist_examples.png";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

const Model = () => (
  <MainLayout>
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center content-center gap-x-6 gap-y-6 pb-10 mt-32">
      <Card className="mt-6 w-3/4">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={fashion_img} alt="img-blur-shadow" layout="fill" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Fashion Classification
          </Typography>
          <Typography>
            Training with the "Fashion MNIST" dataset, this model is able to
            classify garment images into different fashion categories with high
            precision.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-between">
          <Link to={"/models/fashion/about"}>
            <Button>Read More</Button>
          </Link>
          <Link to={"/models/fashion/test"}>
            <Button className="bg-gray-800">Try</Button>
          </Link>
        </CardFooter>
      </Card>

      <Card className="mt-6 w-3/4">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={mnist_img} alt="img-blur-shadow" layout="fill" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Handwritten Digit Recognition
          </Typography>
          <Typography>
            This model, trained on the MNIST dataset, accurately recognizes and
            classifies handwritten digits. It is useful for applications such as
            form digitization and fraud detection.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-between">
          <Link to={"/models/mnist/about"}>
            <Button>Read More</Button>
          </Link>
          <Link to={"/models/mnist/test"}>
            <Button className="bg-gray-800">Try</Button>
          </Link>
        </CardFooter>
      </Card>

      <Card className="mt-6 w-3/4">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={flowers_img} alt="img-blur-shadow" layout="fill" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Flower Classification
          </Typography>
          <Typography>
            This model, powered by TensorFlow, is trained on a dataset of flower
            images and can accurately classify flowers into different
            categories. From roses to sunflowers, daisies to tulips, this model
            enables automatic recognition and categorization of various types of
            flowers based on their visual features.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-between">
          <Link to={"/models/flowers/about"}>
            <Button>Read More</Button>
          </Link>
          <Link to={"/models/flowers/test"}>
            <Button className="bg-gray-800">Try</Button>
          </Link>
        </CardFooter>
      </Card>

      <Card className="mt-6 w-3/4">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={cats_vs_dogs_img} alt="img-blur-shadow" layout="fill" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Cat vs Dog Image Classifier
          </Typography>
          <Typography>
            This image classification model is trained on a dataset consisting
            of images of cats and dogs. It accurately distinguishes between cat
            and dog images, enabling automatic identification and classification
            of these popular pets. It is a useful tool for pet-related
            applications, animal research, and content moderation.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-between">
          <Link to={"/models/cats-vs-dogs/about"}>
            <Button>Read More</Button>
          </Link>
          <Link to={"/models/cats-vs-dogs/test"}>
            <Button className="bg-gray-800">Try</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  </MainLayout>
);

export default Model;
