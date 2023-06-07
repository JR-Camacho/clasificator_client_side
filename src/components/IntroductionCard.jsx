import { CardHeader } from "@material-tailwind/react";

const IntroductionCard = ({ children, image }) => {
  return (
    <div className="w-11/12 bg-white rounded-xl p-4 shadow-inner">
      <CardHeader
        color="blue-gray"
        className="relative h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <></>
      </CardHeader>
      {children}
    </div>
  );
};

export default IntroductionCard;
