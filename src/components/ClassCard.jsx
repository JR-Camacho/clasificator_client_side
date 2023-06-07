import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

const ClassCard = ({ title, image, className }) => {
  return (
    <Card className={`mt-6 w-11/12 md:w-96 my-9 mx-2 ${className}`}>
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image} alt="img-blur-shadow" layout="fill" />
      </CardHeader>
      <CardBody>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default ClassCard;
