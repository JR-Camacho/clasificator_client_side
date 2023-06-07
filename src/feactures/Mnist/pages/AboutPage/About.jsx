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
  Chip,
  Database,
  DeviceMobile,
  Eye,
  OfficeBuilding,
} from "heroicons-react";

import mnist_img from "/images/mnist_examples.png";

const About = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <MainLayout>
      <Title title={"Handwritten Digit Recognition"} className={"mt-20"} />
      <div className="w-full flex flex-col items-center">
        {/* Introduction */}
        <IntroductionCard image={mnist_img}>
          <Typography className="my-4">
            Our hand-digit recognition model is a remarkable achievement in the
            field of computer vision. Trained on a vast dataset of handwritten
            digits, it possesses the capability to accurately classify and
            identify numbers written by hand. Powered by advanced machine
            learning algorithms, this model has learned to recognize the unique
            features and patterns associated with each digit, enabling precise
            and reliable recognition.
          </Typography>
          <Typography className="my-4">
            With its high accuracy and robust performance, our hand-digit
            recognition model finds applications in various domains. From
            automated form processing and digitized document analysis to
            enhancing accessibility for visually impaired individuals, this
            model offers a powerful tool for digit recognition tasks. Its
            versatility and efficiency make it an invaluable asset for
            researchers, developers, and organizations seeking to leverage the
            power of machine learning for handwritten digit recognition.
          </Typography>
        </IntroductionCard>

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
                Variability in handwriting styles
              </AccordionHeader>
              <AccordionBody className="text-base font-normal pt-0">
                Hand-drawn numbers on a whiteboard can exhibit significant
                variations in handwriting styles, stroke thickness, angles, and
                overall appearance. The model may struggle to accurately
                classify numbers with unconventional or unique handwriting
                styles that differ from the examples in the dataset.
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
                Limited board size
              </AccordionHeader>
              <AccordionBody className="text-base font-normal pt-0">
                The size of the whiteboard used for drawing numbers may be
                smaller than the standard image size in the Fashion MNIST
                dataset. This reduction in size could result in a loss of
                fine-grained details, making it challenging for the model to
                capture intricate features and accurately classify certain
                numbers.
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
                Noise and imperfections
              </AccordionHeader>
              <AccordionBody className="text-base font-normal pt-0">
                Hand-drawn numbers on a whiteboard may contain noise, smudges,
                or imperfections that can affect the clarity and quality of the
                input images. The model's performance may be impacted by its
                ability to handle such variations and distinguish them from
                genuine number patterns.
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
                The model is trained solely on individual numbers drawn on a
                whiteboard and does not consider contextual information. This
                limitation can make it difficult for the model to interpret and
                classify numbers in real-world scenarios where context plays a
                significant role, such as numbers embedded within a larger text
                or complex document.
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
                <Eye className="text-blue-900 w-12 h-12 mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Optical Character Recognition (OCR)
                </Typography>
                <Typography>
                  Our hand-digit recognition model can be utilized as part of an
                  OCR system to automatically extract and interpret handwritten
                  numbers from documents, forms, or invoices. This streamlines
                  data entry processes and eliminates the need for manual
                  transcription, improving efficiency and accuracy.
                </Typography>
              </CardBody>
            </Card>

            <Card className="mt-6 w-full sm:w-9/12">
              <CardBody>
                <OfficeBuilding className="text-blue-900 w-12 h-12 mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Banking and Finance
                </Typography>
                <Typography>
                  The model can be employed in financial institutions for tasks
                  such as recognizing handwritten account numbers, check
                  amounts, or transaction details. This facilitates faster and
                  more accurate processing of financial documents, reducing
                  errors and enhancing customer satisfaction.
                </Typography>
              </CardBody>
            </Card>

            <Card className="mt-6 w-full sm:w-9/12">
              <CardBody>
                <AcademicCap className="text-blue-900 w-12 h-12 mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Education and Grading
                </Typography>
                <Typography>
                  In the education sector, our hand-digit recognition model can
                  assist in grading handwritten exams or assessments. It
                  automates the process, providing quick and reliable results,
                  thereby saving time for educators and enabling prompt feedback
                  to students.
                </Typography>
              </CardBody>
            </Card>

            <Card className="mt-6 w-full sm:w-9/12">
              <CardBody>
                <DeviceMobile className="text-blue-900 w-12 h-12 mb-4" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Accessibility for Visually Impaired
                </Typography>
                <Typography>
                  Our model can contribute to accessibility efforts by assisting
                  visually impaired individuals in reading and interpreting
                  handwritten numbers. It can be integrated into assistive
                  technologies or mobile applications, providing real-time digit
                  recognition support and enhancing independence.
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
              Our hand-digit recognition model was trained on the popular MNIST
              dataset, a benchmark dataset for digit recognition tasks. This
              dataset consists of thousands of grayscale images of handwritten
              digits ranging from 0 to 9. The images were meticulously collected
              and labeled, providing a reliable and diverse set of training
              data.
            </Typography>
            <Typography className="my-4">
              To enhance the model's performance and generalization, the data
              underwent preprocessing steps. One crucial aspect was the
              normalization of pixel values. The grayscale images were scaled
              down to a range between 0 and 1, ensuring consistent and
              standardized input for the model. This normalization step helped
              in reducing the impact of varying brightness or contrast levels
              among the images.
            </Typography>
            <Typography className="my-4">
              The dataset was divided into two subsets: training data and test
              data. The training data was used to train the model, exposing it
              to a wide range of handwritten digit samples. The test data, on
              the other hand, was kept separate and used to evaluate the model's
              performance on unseen data, assessing its accuracy and ability to
              generalize.
            </Typography>
            <Typography className="my-4">
              To augment the dataset and increase its diversity, various data
              augmentation techniques were employed. These techniques involved
              applying transformations to the existing images, such as rotation,
              scaling, shifting, and flipping. This augmentation process created
              additional variations of the digits, allowing the model to learn
              and generalize better to different writing styles and variations
              in handwriting.
            </Typography>
            <Typography className="my-4">
              The combination of the MNIST dataset, normalization of pixel
              values, training and test data division, and data augmentation
              techniques contributed to the robustness and accuracy of our
              hand-digit recognition model, ensuring its proficiency in
              recognizing and classifying handwritten numbers.
            </Typography>
          </LongTextCard>

          {/* Training */}
          <LongTextCard
            title={"Trining"}
            floatDirection={"md:float-left"}
            icon={<Chip className="text-gray-900 w-56 h-56" />}
          >
            <Typography className="my-4">
              Our hand-digit recognition model underwent training using a
              Convolutional Neural Network (CNN) architecture, specifically
              designed for image classification tasks. The input data was
              formatted as 28x28 grayscale images, allowing the model to capture
              intricate spatial details. The CNN incorporated multiple layers,
              including convolutional and pooling layers, with ReLU activation
              functions to extract complex features from the digits. The final
              layer employed the softmax activation function to generate
              probability distributions over the digit classes. The model was
              trained in batches of 32 samples and for a maximum of 100 epochs,
              utilizing an early stopping mechanism to prevent overfitting. The
              training data was used to optimize the model's parameters through
              backpropagation, while the evaluation dataset assessed its
              accuracy and generalization.
            </Typography>
            <Typography className="my-4">
              In summary, our hand-digit recognition model is a CNN-based
              architecture trained on 28x28 grayscale images. It employs ReLU
              activation functions and softmax output for accurate
              classification. The training process includes batch processing, a
              maximum of 100 epochs, and early stopping to enhance efficiency
              and prevent overfitting. The model's performance is evaluated
              using a separate evaluation dataset to validate its accuracy and
              generalization capabilities.
            </Typography>
          </LongTextCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
