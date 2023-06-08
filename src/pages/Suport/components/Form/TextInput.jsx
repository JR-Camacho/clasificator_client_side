const TextInput = ({
  name,
  type = "text",
  placeholder,
  handleChange,
  className,
  register,
  required,
}) => {
  return (
    <input
      type={type}
      name={name}
      {...register(name, {required: required})}
      placeholder={placeholder}
      onChange={handleChange}
      className={`w-full h-14 p-2 my-2 focus:outline-none border border-solid border-gray-800 ${className}`}
    />
  );
};

export default TextInput;
