import { Link } from "react-router-dom";

import {
  Button,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";

import { CheckCircle, ExclamationCircle } from "heroicons-react";

const AlertModal = ({ handleOpen, success }) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="w-11/12 sm:w-96 rounded-lg bg-white">
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Submission confirmation
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          {success ? (
            <CheckCircle className="h-16 w-16 text-green-500" />
          ) : (
            <ExclamationCircle className="h-16 w-16 text-red-500" />
          )}
          <Typography
            color={success ? "green" : "red"}
            variant="h4"
            className="text-center"
          >
            {success ? "Successful form submission" : "Form submission failed"}
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            close
          </Button>
          <Link to={"/"}>
            <Button variant="gradient" onClick={handleOpen}>
              Finish
            </Button>
          </Link>
        </DialogFooter>
      </div>
    </div>
  );
};

export default AlertModal;
