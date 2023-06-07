import { useState } from "react";

import MainLayout from "../../../../layouts/MainLayout";

import Title from "../../../../components/Title";
import Subtitle from "../../../../components/Subtitle";
import IntroductionCard from "../../../../components/IntroductionCard";
import LongTextCard from "../../../../components/LongTextCard";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import {
  BookOpen,
  ChartBar,
  Chip,
  Database,
  Search,
  Star,
} from "heroicons-react";

import fashion_img from "/images/Fashion.jpeg";
import ClassCard from "../../../../components/ClassCard";

const About = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <MainLayout>
      <Title title={"Fashion Classification"} className={"mt-20"} />
      <div className="w-full flex flex-col items-center">
        {/* Introduction */}
        <IntroductionCard image={fashion_img}>
          <Typography className="my-4">
            Welcome to the "About" section! Our fashion image classification
            model, trained on the Fashion MNIST dataset, accurately categorizes
            various clothing items and accessories. Leveraging a powerful
            convolutional neural network (CNN) architecture, our model has been
            optimized to provide reliable and precise classification results.
            From t-shirts to shoes and everything in between, our model is
            designed to assist in fashion analysis, trend forecasting, and
            e-commerce applications. Explore the world of fashion with
            confidence using our cutting-edge image classification technology.
          </Typography>
          <Typography className="my-4">
            With a meticulous training process, our fashion image classification
            model has acquired the ability to recognize subtle visual patterns
            and features that distinguish different clothing categories. By
            leveraging the vast Fashion MNIST dataset, consisting of thousands
            of labeled images, our model has developed a deep understanding of
            fashion trends and styles. Whether you're a fashion enthusiast, a
            retailer, or a fashion industry professional, our model can provide
            valuable insights and streamline your fashion-related tasks. Stay
            ahead of the fashion game with our powerful and accurate image
            classification model.
          </Typography>
        </IntroductionCard>

        <div className="w-11/12">
          <Subtitle title={"Class Examples"} />
          <div className="flex flex-wrap justify-evenly">
            <ClassCard
              title={"T-shirt/top"}
              image={
                "https://img.freepik.com/premium-photo/black-tshirts-with-copy-space_816702-240.jpg"
              }
            />
            <ClassCard
              title={"Trouser"}
              image={
                "https://cf.shopee.ph/file/4f42c09aabb2e5f25e2cf39057b5064c"
              }
            />
            <ClassCard
              title={"Pullover"}
              image={
                "https://img.sonofatailor.com/images/customizer/product/knitting/zwp/Navy_O_Neck.jpg"
              }
            />
            <ClassCard
              title={"Dress"}
              image={
                "https://people.com/thmb/HDmtg9bBAxNQ4ZxT6KjYMiYs9vg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/fashion-item-roundup-dresses-tout-2000-4cce8c33186743e7a69acb3e3a40fcb0.jpg"
              }
            />
            <ClassCard
              title={"Coat"}
              image={
                "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/18/14/lead.jpg?width=1200"
              }
            />
            <ClassCard
              title={"Sandal"}
              image={
                "https://cdn.shopify.com/s/files/1/0660/0048/6647/products/3939ce8279138f1df2d5fe38982023a235357e06.jpg?v=1678943434"
              }
            />
            <ClassCard
              title={"Shirt"}
              image={
                "https://www.stoneycreekhunting.co.nz/image/cache/catalog/product_images/corporate/mens/shirts/Mens_Corporate_Shirt_Long_Sleeve_Float_Navy-875x1000.jpg"
              }
            />
            <ClassCard
              title={"Sneaker"}
              image={
                "https://www.highsnobiety.com/static-assets/thumbor/ZMKin0tduLwgZogCKNR6ix2GOOs=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2022/03/15162657/highsnobietys-glossary-of-sneaker-terminology-04.jpg"
              }
            />
            <ClassCard
              title={"Bag"}
              image={
                "https://billingham.co.uk/cdn/shop/products/WeekenderBlackBlack_face_380x.jpg?v=1678891641"
              }
            />
            <ClassCard
              title={"Ankle boot"}
              image={
                "https://www.travelandleisure.com/thmb/OxysZ6r_o0Iqb5EKjztv2DR594M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vionic-bethany-ankle-91410d6454a745b699ee224b5e88cc99.jpg"
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
                Limited fashion categories
              </AccordionHeader>
              <AccordionBody className="text-base font-normal pt-0">
                The Fashion MNIST dataset includes only 10 fashion categories,
                which may not cover the full range of fashion items found in
                real-world scenarios. The model may struggle to classify
                clothing items that are not included in the dataset.
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
                Lack of fine-grained details
              </AccordionHeader>
              <AccordionBody className="text-base font-normal pt-0">
                Fashion MNIST images are relatively low resolution (28x28
                pixels), which means the model may not capture fine-grained
                details of intricate patterns, textures, or small accessories
                that could be important for accurate classification.
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
                Generalization to different datasets
              </AccordionHeader>
              <AccordionBody className="text-base font-normal pt-0">
                While the model performs well on the Fashion MNIST dataset, its
                performance may vary when applied to other fashion datasets with
                different image qualities, styles, or variations in clothing
                categories.
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
                Style and context limitations
              </AccordionHeader>
              <AccordionBody className="text-base font-normal pt-0">
                The Fashion MNIST dataset focuses on isolated images of
                individual fashion items. It does not capture the overall style,
                fashion trends, or contextual information, which can be
                important for understanding the full fashion ensemble.
              </AccordionBody>
            </Accordion>
          </>
        </div>

        <div className="w-11/12">
          <Subtitle title={"Utilities"} />
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center content-center gap-x-2 gap-y-6">
            <Card className="mt-6 w-full sm:w-9/12">
              <CardBody>
                <Star className="text-blue-900 w-12 h-12 mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Fashion Recommendation System
                </Typography>
                <Typography>
                  Our fashion image classification model can be used to power
                  personalized fashion recommendation systems, suggesting
                  clothing and accessory options based on user preferences and
                  style preferences.
                </Typography>
              </CardBody>
            </Card>

            <Card className="mt-6 w-full sm:w-9/12">
              <CardBody>
                <BookOpen className="text-blue-900 w-12 h-12 mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Automated Fashion Catalog Sorting
                </Typography>
                <Typography>
                  Streamline your e-commerce platform by utilizing our model for
                  automated fashion catalog sorting. Efficiently categorize and
                  tag clothing items, allowing customers to easily search and
                  find products.
                </Typography>
              </CardBody>
            </Card>

            <Card className="mt-6 w-full sm:w-9/12">
              <CardBody>
                <ChartBar className="text-blue-900 w-12 h-12 mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Fashion Trend Analysis
                </Typography>
                <Typography>
                  Leverage our model to analyze fashion trends and forecast
                  future styles. Gain valuable insights into popular clothing
                  categories, patterns, and colors to make data-driven decisions
                  in the fashion industry.
                </Typography>
              </CardBody>
            </Card>

            <Card className="mt-6 w-full sm:w-9/12">
              <CardBody>
                <Search className="text-blue-900 w-12 h-12 mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Visual Fashion Search Engine
                </Typography>
                <Typography>
                  Enable users to find fashion items using images with our model
                  powering a visual search engine. Users can upload images or
                  take photos to search for similar clothing items across
                  different brands and retailers.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="w-11/12 pb-10">
          <Subtitle title={"Model"} />
          {/* Dataset */}
          <LongTextCard
            title={"Dataset"}
            floatDirection={"md:float-right"}
            icon={<Database className="text-gray-900 w-56 h-56" />}
          >
            <Typography className="my-4">
              The model was trained using the Fashion MNIST dataset, which
              consists of 70,000 grayscale images divided into 10 different
              clothing categories. Each image has a resolution of 28x28 pixels,
              enabling efficient training and accurate evaluation of the model.
            </Typography>
            <Typography className="my-4">
              Before training the model, the data underwent preprocessing to
              enhance its quality and facilitate learning. This included
              normalizing the pixel values to be in the range of 0 to 1,
              ensuring consistent data representation. Additionally, image
              augmentation techniques such as rotation, shifting, and flipping
              were applied to increase the amount of training examples and
              improve the model's ability to generalize to new images.
            </Typography>
            <Typography className="my-4">
              Image augmentation helps the model handle variability and learn
              robust features. By applying these transformations to the existing
              images, new training samples were created, enriching the dataset
              and exposing the model to a greater diversity of visual scenarios.
            </Typography>
            <Typography className="my-4">
              The data preprocessing and image augmentation techniques ensure
              that the model is well-equipped to handle different variations and
              improve its ability to accurately classify clothing items in the
              Fashion MNIST dataset.
            </Typography>
          </LongTextCard>

          {/* Training */}
          <LongTextCard
            title={"Trining"}
            floatDirection={"md:float-left"}
            icon={<Chip className="text-gray-900 w-56 h-56" />}
          >
            <Typography className="my-4">
              We trained our model using a Convolutional Neural Network (CNN)
              architecture specifically designed for image classification. The
              CNN consisted of multiple convolutional layers followed by
              Rectified Linear Unit (ReLU) activation functions, allowing the
              model to capture local features and learn complex relationships
              within the data. For multi-class classification, we employed the
              softmax activation function in the final layer. To optimize the
              model, we used the Adam optimizer, adjusting the learning rate
              dynamically. Throughout the training process, we employed
              techniques like dropout regularization and early stopping to
              prevent overfitting. The model's performance was evaluated on a
              separate test set, ensuring its ability to generalize. By
              incorporating filters, dense layers with 150 hidden units, and
              employing various optimization techniques, our model effectively
              learned and classified fashion items with high accuracy.
            </Typography>
            <Typography className="my-4">
              After training, we evaluated the model's performance using a
              separate test set, measuring metrics such as accuracy, precision,
              and recall. This evaluation step ensured that the model
              generalized well to unseen data and provided reliable predictions.
            </Typography>
          </LongTextCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
