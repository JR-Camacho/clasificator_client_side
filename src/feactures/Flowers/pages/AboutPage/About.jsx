import { useState } from "react";

import MainLayout from "../../../../layouts/MainLayout";

import Title from "../../../../components/Title";
import Subtitle from "../../../../components/Subtitle";
import LongTextCard from "../../../../components/LongTextCard";
import IntroductionCard from "../../../../components/IntroductionCard";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import {
  AcademicCap,
  Beaker,
  Chip,
  Database,
  ShoppingBag,
  Sun,
} from "heroicons-react";

import flowers_img from "../../../../../public/images/flowers.avif";
import ClassCard from "../../../../components/ClassCard";

const About = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <MainLayout>
      <Title title={"Flower Classification"} className={"mt-20"} />
      <div className="w-full flex flex-col items-center">
        {/* Introduction */}
        <IntroductionCard image={flowers_img}>
          <Typography className="my-4">
            Welcome to the "About" section! Our flower image classification
            model is a remarkable tool trained to accurately classify different
            types of flowers. Utilizing advanced machine learning techniques and
            a vast dataset of flower images, our model provides a reliable and
            efficient solution for recognizing and categorizing floral species.
            Discover the beauty of nature with our cutting-edge image
            classification technology. Using the power of deep learning, our
            model employs a sophisticated convolutional neural network (CNN)
            architecture. This architecture allows the model to analyze
            intricate visual features and patterns present in flower images,
            ensuring accurate classification results. By leveraging this
            state-of-the-art technology, we aim to enhance your experience in
            exploring the fascinating world of flowers.
          </Typography>
        </IntroductionCard>

        <div className="w-11/12">
          <Subtitle title={"Class Examples"} />
          <div className="flex flex-wrap justify-evenly">
            <ClassCard
              title={"Dandelion"}
              image={
                "https://cdn.shopify.com/s/files/1/1556/2685/articles/viridi-green-i-uBAOo_BBA-unsplash.jpg?v=1650641528"
              }
            />
            <ClassCard
              title={"Daisy"}
              image={
                "https://cdn.britannica.com/36/82536-050-7E968918/Shasta-daisies.jpg"
              }
            />
            <ClassCard
              title={"Tulip"}
              image={
                "https://tulipfestivalamsterdam.com/wp-content/uploads/2017/09/bigstock-Blooming-Tulips-51437800-1024x746.jpg"
              }
            />
            <ClassCard
              title={"Sunflower"}
              image={
                "https://a-z-animals.com/media/2022/10/iStock-1298291139.jpg"
              }
            />
            <ClassCard
              title={"Rose"}
              image={
                "https://www.wallpapers13.com/wp-content/uploads/2019/05/Flowers-Rose-flower-dark-red-rose-green-leaves-rain-drops-water-flowers-HD-Wallpapers-3840x2400-1680x1050.jpg"
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
                Limited flower categories
              </AccordionHeader>
              <AccordionBody className="text-base font-normal pt-0">
                The TF-Flowers dataset includes only a specific set of flower
                categories (e.g., dandelion, daisy, tulip, sunflower, rose). The
                model may struggle to accurately classify flower images that
                belong to different or more specific categories not present in
                the dataset.
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
                Variability within flower categories
              </AccordionHeader>
              <AccordionBody className="text-base font-normal pt-0">
                There can be significant variations within each flower category
                in terms of color, shape, size, and other characteristics. The
                model may face challenges in accurately distinguishing and
                classifying images that exhibit such variations within a single
                category.
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
                Unseen flower species
              </AccordionHeader>
              <AccordionBody className="text-base font-normal pt-0">
                The model may not be able to correctly classify flower species
                that are not present in the TF-Flowers dataset. It might
                struggle when presented with images of flowers that have
                distinct features or belong to rare or uncommon species.
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
                Environmental context
              </AccordionHeader>
              <AccordionBody className="text-base font-normal pt-0">
                The TF-Flowers dataset provides images of flowers in isolation
                without considering the broader environmental context. The model
                may encounter difficulties when attempting to classify flower
                images that are surrounded by complex backgrounds or other
                objects, where contextual cues are important for accurate
                classification.
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
                <Beaker className="text-blue-900 w-12 h-12 mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Botanical Research and Identification
                </Typography>
                <Typography>
                  Our flower image classification model can aid botanists and
                  researchers in accurately identifying and categorizing
                  different species of flowers. It provides a time-saving and
                  efficient solution for cataloging and studying floral
                  biodiversity.
                </Typography>
              </CardBody>
            </Card>

            <Card className="mt-6 w-full sm:w-9/12">
              <CardBody>
                <ShoppingBag className="text-blue-900 w-12 h-12 mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  E-commerce and Floral Industry
                </Typography>
                <Typography>
                  Floral businesses can benefit from our model by automating the
                  process of categorizing and tagging flowers for online
                  catalogs. It streamlines inventory management, enables
                  efficient search and filtering, and enhances the customer
                  shopping experience.
                </Typography>
              </CardBody>
            </Card>

            <Card className="mt-6 w-full sm:w-9/12">
              <CardBody>
                <AcademicCap className="text-blue-900 w-12 h-12 mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Education and Botanical Learning
                </Typography>
                <Typography>
                  Our model can serve as an educational tool, helping students
                  and enthusiasts learn about different types of flowers. It
                  provides an interactive and engaging way to explore the
                  botanical world, fostering a deeper appreciation for nature's
                  beauty and diversity.
                </Typography>
              </CardBody>
            </Card>

            <Card className="mt-6 w-full sm:w-9/12">
              <CardBody>
                <Sun className="text-blue-900 w-12 h-12 mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Horticulture and Gardening
                </Typography>
                <Typography>
                  Gardeners and horticulturists can utilize our model to
                  identify and classify flowers in their gardens or nurseries.
                  It can assist in proper plant care, disease detection, and
                  selecting complementary flower combinations for aesthetically
                  pleasing landscapes.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Model */}
        <div className="w-11/12 mb-10">
          <Subtitle title={"Model"} />
          {/* Dataset */}
          <LongTextCard
            title={"Dataset"}
            floatDirection={"md:float-right"}
            icon={<Database className="text-gray-900 w-56 h-56" />}
          >
            <Typography className="my-4">
              The dataset used to train our flower image classification model is
              the TF-Flowers dataset. This dataset contains thousands of flower
              images belonging to different categories, providing a wide variety
              of floral species for model training.
            </Typography>
            <Typography className="my-4">
              To improve the model's performance and its ability to generalize
              to new flower images, data augmentation techniques were applied.
              These techniques included applying transformations such as
              rotation, translation, flipping, and scaling to the existing
              images, thus generating a greater diversity of images for
              training. Furthermore, as part of the data preprocessing, the
              pixel values of the images were normalized to ensure a consistent
              representation. Normalization scales the pixel values to a
              specific range, typically between 0 and 1, which helps the model
              learn more effectively.
            </Typography>
            <Typography className="my-4">
              With the TF-Flowers dataset, augmented images, and normalization
              applied, our model has been trained to accurately recognize and
              classify different types of flowers. This provides us with the
              capability to explore and better understand the diversity and
              beauty of flowers through our image classification model.
            </Typography>
          </LongTextCard>

          {/* Training */}
          <LongTextCard
            title={"Trining"}
            floatDirection={"md:float-left"}
            icon={<Chip className="text-gray-900 w-56 h-56" />}
          >
            <Typography className="my-4">
              Our flower image classification model is based on a powerful
              Convolutional Neural Network (CNN) architecture. It utilizes
              multiple convolutional layers with Rectified Linear Unit (ReLU)
              activation functions, allowing it to extract intricate visual
              patterns from flower images. The model underwent training using a
              partitioned dataset consisting of training, validation, and test
              sets. The validation set was used for fine-tuning the model's
              hyperparameters, while the test set was reserved for evaluating
              its performance on unseen images. By employing filters in the CNN,
              the model effectively learned relevant patterns and features at
              different scales, enabling accurate classification of flowers. The
              final layer of the model utilized the softmax activation function
              to produce probability distributions over the different flower
              classes. To optimize performance, the model was trained using the
              Adam optimizer with a batch size of 32 and a maximum of 100
              training epochs. Additionally, an early stopping callback was
              implemented to prevent overfitting by monitoring the validation
              loss.
            </Typography>
            <Typography className="my-4">
              In training the model, the 'sparse_categorical_crossentropy' loss
              function was employed, specifically designed for multi-class
              classification tasks. This loss function facilitated the
              convergence of the model's predictions towards the correct flower
              classes. The model's architecture and training methodology
              collectively contributed to its ability to accurately classify
              different types of flowers, providing valuable insights into the
              diverse floral world.
            </Typography>
            <Typography className="my-4">
              The input images were resized to a standardized format of 100x100
              pixels to ensure uniformity across the dataset. The CNN
              architecture was designed to accommodate this input shape of
              100x100x1, where the last dimension corresponds to the grayscale
              channel.
            </Typography>
          </LongTextCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
