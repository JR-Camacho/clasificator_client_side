import { Spinner } from "@material-tailwind/react";

const SpinnerLoading = () => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <Spinner className="h-16 w-16" />
    </div>
  );
};

export default SpinnerLoading;
