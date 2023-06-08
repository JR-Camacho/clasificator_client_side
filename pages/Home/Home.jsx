import MainLayout from "../../layouts/MainLayout";

import Subtitle from "../../components/Subtitle";

import background from "/images/background.jpg";
import image from "/images/ml_image.png";

import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { Heart, Photograph, ShieldCheck, Star } from "heroicons-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <MainLayout>
      <div
        className="w-full min-h-screen flex flex-col items-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-full md:w-3/4 flex flex-col items-center mt-20 px-10">
          <Typography className="text-3xl md:text-4xl text-gray-800 text-center">
            <span className="text-5xl md:text-6xl">&lt;</span>Explore the power
            of vision with our solutions of image classification, where accuracy
            and efficiency are found in every pixel
            <span className="text-5xl md:text-6xl">/&gt;</span>
          </Typography>
          <Link to={"models"}>
            <Button className="mt-4" variant="outlined">Explore</Button>
          </Link>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-12 px-10">
          <Typography className="text-justify mr-4 text-lg lg:text-xl">
            Delve into the fascinating world of artificial vision and discover
            the potential of our image classification solutions. In our page,
            you will find a set of models of machine learning specially designed
            to analyze and recognize the image content with amazing precision.
            From the classification of objects in photographs to the detection
            of patterns in medical images, our models are capable of transform
            visual data into valuable knowledge. Through advanced image
            processing techniques and neural networks convolutional, our models
            have been trained with ensembles of representative data to provide
            you with reliable results and efficient.
          </Typography>
          <img
            src={image}
            alt="ml"
            layout="fill"
            className="w-full md:w-80 lg:w-[400px]"
          />
        </div>
      </div>
      <div className="w-full min-h-screen bg-white pb-10">
        <Subtitle title={"Solutions"} className={"mt-0 p-10"} />
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center content-center gap-x-2 gap-y-6">
          <Card className="mt-6 w-full sm:w-9/12 shadow-2xl">
            <CardBody>
              <Photograph className="text-blue-900 w-12 h-12 mb-4" />
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Automation of image classification
              </Typography>
              <Typography>
                Our machine learning models can automate the process of image
                classification in various industries such as e-commerce,
                manufacturing, and agriculture. Save time and resources by
                eliminating the need for manual classification of large amounts
                of images, enabling fast and accurate classification.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-full sm:w-9/12 shadow-2xl">
            <CardBody>
              <Heart className="text-blue-900 w-12 h-12 mb-4" />
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Improved accuracy in medical diagnostics
              </Typography>
              <Typography>
                Image classification models can play a crucial role in the field
                of medicine by assisting in diagnosis and early detection of
                diseases. From analyzing X-rays to identifying cancerous cells
                in microscopic images, our models can provide accurate results
                and contribute to more effective healthcare.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-full sm:w-9/12 shadow-2xl">
            <CardBody>
              <ShieldCheck className="text-blue-900 w-12 h-12 mb-4" />
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Enhanced security and surveillance optimization
              </Typography>
              <Typography>
                With the ability to identify and classify objects in real-time,
                our models can improve security and surveillance in environments
                such as airports, train stations, or public areas. Efficiently
                and accurately detect suspicious objects, anomalous behaviors,
                or any other situation that requires attention, enabling quick
                responses and preventive actions.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-full sm:w-9/12 shadow-2xl">
            <CardBody>
              <Star className="text-blue-900 w-12 h-12 mb-4" />
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Personalization and recommendation
              </Typography>
              <Typography>
                Image classification models can also enhance user experience by
                offering visual-based recommendations and personalization.
                Whether in entertainment applications, e-commerce, or social
                media platforms, our models can analyze visual content to
                provide relevant recommendations tailored to each user's
                individual interests.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
