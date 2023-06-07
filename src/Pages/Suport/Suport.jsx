import { useRef, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import Title from "../../components/Title";
import TextArea from "./components/Form/TextArea";
import TextInput from "./components/Form/TextInput";
import AlertModal from "../../components/AlertModal";

import { EMAILJS_ACCESS } from "../../Utilities/ServicesAccess";

import { Button, Typography } from "@material-tailwind/react";

import { useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";

const Suport = () => {
  const { register, handleSubmit } = useForm();

  const form = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isSuccess, setIsSucess] = useState(false);

  const sendEmail = (data, e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        EMAILJS_ACCESS.SERVICE_ID,
        EMAILJS_ACCESS.TEMPLATE_ID,
        form.current,
        EMAILJS_ACCESS.PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsLoading(false);
          setOpenModal(true);
          setIsSucess(true);
          form.current.reset();
        },
        (error) => {
          setIsLoading(false);
          setOpenModal(true);
          setIsSucess(false);
        }
      );
  };

  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <MainLayout>
      {openModal && <AlertModal handleOpen={handleOpen} success={isSuccess} />}
      <div className="min-h-screen pt-20">
        <Title title={"Contact for suport"} />
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-2/4">
            <Typography className="m-6 text-justify text-xl sm:text-2xl md:text-3xl">
              If you have any inquiries or issues, our support team is here to
              assist you. If you need assistance or have questions about our
              image classification models, please don't hesitate to contact us.
              Fill out the contact form, and we will get back to you as soon as
              possible. We are committed to providing you with the best support
              to help you make the most of our image classification solutions.
              Your satisfaction is our priority.
            </Typography>
          </div>
          <div className="w-full lg:w-2/4">
            <form className="m-6 text-gray-800" ref={form}>
              <TextInput
                name={"name"}
                placeholder={"Name *"}
                register={register}
                required={true}
              />
              <TextInput
                name={"email"}
                type={"email"}
                placeholder={"Email *"}
                register={register}
                required={true}
              />
              <TextArea
                name={"message"}
                placeholder={"Message *"}
                register={register}
                required={true}
              />
              <Button
                variant="outlined"
                className="rounded-none border-gray-800 text-gray-800"
                onClick={handleSubmit(sendEmail)}
                disabled={isLoading}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Suport;
