const Subtitle = ({ title, className }) => {
  return (
    <h2
      className={`py-4 mt-12 text-blue-900 text-3xl sm:text-4xl md:text-5xl font-medium uppercase ${className}`}
    >
      {title}
    </h2>
  );
};

export default Subtitle;
