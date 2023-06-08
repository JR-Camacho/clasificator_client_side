const TextArea = ({
  name,
  placeholder,
  handleChange,
  className,
  register,
  required,
}) => {
  return (
    <textarea
      name={name}
      {...register(name, { required: required })}
      cols="30"
      rows="10"
      placeholder={placeholder}
      onChange={handleChange}
      className={`w-full p-2 my-2 focus:outline-none border border-solid border-gray-800 resize-none ${className}`}
    ></textarea>
  );
};

export default TextArea;
