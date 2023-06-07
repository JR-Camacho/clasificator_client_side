const LongTextCard = ({ title, children, floatDirection, icon }) => {
  return (
    <div className="mt-6">
      <h3 className="text-center text-xl sm:text-2xl md:text-3xl text-gray-800 uppercase">{title}</h3>
      <div className={`hidden md:block ${floatDirection}`}>{icon}</div>
      {children}
    </div>
  );
};

export default LongTextCard;
