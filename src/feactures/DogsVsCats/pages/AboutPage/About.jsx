import { useState } from "react";

import MainLayout from "../../../../layouts/MainLayout";

import Title from "../../../../components/Title";
import Subtitle from "../../../../components/Subtitle";
import LongTextCard from "../../../../components/LongTextCard";
import IntroductionCard from "../../../../components/IntroductionCard";
import ClassCard from "../../../../components/ClassCard";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import {
  Camera,
  ChartBar,
  Chip,
  Database,
  Heart,
  LockClosed,
} from "heroicons-react";

const About = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <MainLayout>
      <Title title={"Dogs vs Cats"} className={"mt-20"} />
      <div className="w-full flex flex-col items-center">
        {/* Introduction */}
        <IntroductionCard
          image={"https://wallpaperaccess.com/full/5531093.jpg"}
        >
          <Typography className="my-4">
            Welcome to our "About" view where we give you more specific details
            about our cat and dog image classification model. This exciting
            model is designed to distinguish between cat and dog images with
            exceptional accuracy. Using a diverse and well-labeled data set, our
            model has been trained to recognize the distinctive features of
            these adorable pets.
          </Typography>
          <Typography className="my-4">
            This model is ideal for a wide range of applications, from
            organizing photo albums to automatically detecting pets in images on
            social networks. It can also be a valuable tool for animal data
            analysis, helping researchers to classify large image sets of cats
            and dogs quickly and accurately.
          </Typography>
        </IntroductionCard>

        <div className="w-11/12">
          <Subtitle title={"Class Examples"} />
          <div className="flex flex-wrap justify-evenly">
            <ClassCard
              title={"Dog"}
              image={
                "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445"
              }
            />
            <ClassCard
              title={"Cat"}
              image={
                "https://catastic.b-cdn.net/wp-content/uploads/2022/02/shutterstock_124264843.jpg"
              }
            />
          </div>
        </div>

        {/* Limitations  */}
        <div className="w-11/12">
          <Subtitle title={"Limitations"} />
          <>
            <Accordion
              open={open === 1}
              className="border border-blue-gray-100 px-4 rounded-lg mb-2 bg-white"
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className={`border-b-0 transition-colors ${
                  open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
                }`}
              >
                Image variability
              </AccordionHeader>
              <AccordionBody className="text-base font-normal pt-0">
                The model may struggle to classify dog and cat images in
                uncommon situations, such as unusual poses, complex backgrounds,
                or inadequate lighting.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              className="border border-blue-gray-100 px-4 rounded-lg mb-2 bg-white"
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className={`border-b-0 transition-colors ${
                  open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
                }`}
              >
                Specific breeds and species
              </AccordionHeader>
              <AccordionBody className="text-base font-normal pt-0">
                The model may have difficulties classifying specific dog or cat
                breeds, especially those that have similar characteristics or
                resemble other animal species.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              className="border border-blue-gray-100 px-4 rounded-lg mb-2 bg-white"
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className={`border-b-0 transition-colors ${
                  open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
                }`}
              >
                Image size and resolution
              </AccordionHeader>
              <AccordionBody className="text-base font-normal pt-0">
                The model's performance may be affected by low-resolution or
                excessively small images, making it challenging to accurately
                identify the details necessary for correct classification.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 4}
              className="border border-blue-gray-100 px-4 rounded-lg bg-white"
            >
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className={`border-b-0 transition-colors ${
                  open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
                }`}
              >
                Lack of context
              </AccordionHeader>
              <AccordionBody className="text-base font-normal pt-0">
                The model focuses solely on the image of a single object (dog or
                cat) and does not consider the broader context of the scene.
                This limitation may affect its ability to make precise
                classifications in situations where context is crucial.
              </AccordionBody>
            </Accordion>
          </>
        </div>

        {/* Utilities */}
        <div className="w-11/12">
          <Subtitle title={"Utilities"} />
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center content-center gap-x-2 gap-y-6">
            <Card className="mt-6 w-full sm:w-9/12">
              <CardBody>
                <Camera className="text-blue-900 w-12 h-12 mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Automatic organization of photo albums
                </Typography>
                <Typography>
                  The model can be used to automatically classify and organize
                  images of cats and dogs in photo albums, making it easier to
                  find and view special moments with our pets.
                </Typography>
              </CardBody>
            </Card>

            <Card className="mt-6 w-full sm:w-9/12">
              <CardBody>
                <ChartBar className="text-blue-900 w-12 h-12 mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Animal data analysis
                </Typography>
                <Typography>
                  Researchers and scientists can take advantage of this model to
                  classify large image sets of cats and dogs, allowing them to
                  perform faster and more efficient analyzes in studies related
                  to animal behavior, health, and genetics.
                </Typography>
              </CardBody>
            </Card>

            <Card className="mt-6 w-full sm:w-9/12">
              <CardBody>
                <Heart className="text-blue-900 w-12 h-12 mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Pet adoption
                </Typography>
                <Typography>
                  Users can upload images of animals they wish to adopt and the
                  model can automatically sort images into cat and dog
                  categories, helping to find fast and accurate matches between
                  the adopter's preferences and the animals available for
                  adoption. This facilitates the connection between people and
                  animals in search of a new home.
                </Typography>
              </CardBody>
            </Card>

            <Card className="mt-6 w-full sm:w-9/12">
              <CardBody>
                <LockClosed className="text-blue-900 w-12 h-12 mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Security and surveillance applications
                </Typography>
                <Typography>
                  This model can be used in security and surveillance systems to
                  identify and detect the presence of cats and dogs in
                  restricted or unauthorized areas. This can help in protecting
                  sensitive spaces and preventing unwanted intrusions.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="w-11/12 mb-10">
          <Subtitle title={"Model"} />
          {/* Dataset */}
          <LongTextCard
            title={"Dataset"}
            floatDirection={"md:float-right"}
            icon={<Database className="text-gray-900 w-56 h-56" />}
          >
            <Typography className="my-4">
              Our dog and cat image classification model has been meticulously
              trained using the "Dogs vs Cats" dataset from TensorFlow, which
              comprises a total of 25,000 labeled images. To further enhance the
              model's performance and robustness, we incorporated data
              augmentation techniques during the training process.
            </Typography>
            <Typography className="my-4">
              Data augmentation involves applying a variety of transformations
              to the existing images, such as rotation, scaling, and flipping,
              to create additional training samples. By introducing these
              variations, we were able to expand the dataset and expose the
              model to a more diverse range of visual scenarios. This helped
              improve the model's ability to generalize and accurately classify
              images that may have different orientations, sizes, or
              perspectives.
            </Typography>
            <Typography className="my-4">
              By leveraging the power of data augmentation, our model has become
              more resilient to variations and noise commonly encountered in
              real-world images. It has learned to recognize key features and
              patterns across different augmentations, resulting in a more
              robust and reliable classification performance.
            </Typography>
            <Typography className="my-4">
              The integration of data augmentation techniques, in conjunction
              with the "Dogs vs Cats" dataset, has significantly contributed to
              the model's ability to accurately distinguish between dogs and
              cats with high precision and generalization capabilities.
            </Typography>
          </LongTextCard>

          {/* Training */}
          <LongTextCard
            title={"Trining"}
            floatDirection={"md:float-left"}
            icon={<Chip className="text-gray-900 w-56 h-56" />}
          >
            <Typography className="my-4">
              During the training process, we employed a Convolutional Neural
              Network (CNN) architecture, a powerful model for image
              classification tasks. The CNN consisted of multiple convolutional
              layers, which were responsible for capturing local features and
              patterns from the input images.
            </Typography>
            <Typography className="my-4">
              To optimize the model's performance, we utilized the Adam
              optimizer, a popular choice for deep learning tasks. The Adam
              optimizer adapts the learning rate dynamically based on the
              gradients of the model's parameters, facilitating efficient and
              effective training.
            </Typography>
            <Typography className="my-4">
              The input images were resized to a standardized format of 100x100
              pixels to ensure uniformity across the dataset. The CNN
              architecture was designed to accommodate this input shape of
              100x100x1, where the last dimension corresponds to the grayscale
              channel.
            </Typography>
            <Typography className="my-4">
              Rectified Linear Unit (ReLU) activation function was applied after
              each convolutional layer, promoting non-linearity and enabling the
              model to learn complex relationships and representations in the
              data.
            </Typography>
            <Typography className="my-4">
              To enhance the model's ability to extract meaningful features,
              filters were utilized within the convolutional layers. These
              filters acted as learnable templates, allowing the model to
              capture different visual patterns and textures.
            </Typography>
            <Typography className="my-4">
              Prior to training, the input images were normalized, typically by
              scaling the pixel values between 0 and 1. This normalization step
              ensures that the model receives consistent and standardized input,
              which can improve convergence and stability during training.
            </Typography>
            <Typography className="my-4">
              Throughout the training process, the model iteratively adjusted
              its parameters to minimize the difference between its predicted
              outputs and the true labels of the training examples. This
              process, known as backpropagation, involved computing gradients
              and updating the model's weights using optimization techniques.
            </Typography>
            <Typography className="my-4">
              By leveraging the power of a CNN architecture, optimizing with
              Adam, utilizing appropriate input shape, activation function,
              filters, and data normalization, our model was trained to
              accurately classify images of dogs and cats with high precision
              and reliability.
            </Typography>
          </LongTextCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
