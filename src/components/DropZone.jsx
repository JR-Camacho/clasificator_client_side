import { useDropzone } from "react-dropzone";

const DropZone = ({ onDrop, accept, name, id, className }) => {
    const handleDrop = (acceptedFiles) => {
        // Filtrar solo los archivos de imagen
        const imageFiles = acceptedFiles.filter((file) =>
          file.type.startsWith("image/")
        );
        // Llamar a la función onDrop con los archivos de imagen
        onDrop(imageFiles);
      };
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept:accept,
    onDrop:handleDrop,
  });

  /*
    useDropzone hooks exposes two functions called getRootProps and getInputProps
    and also exposes isDragActive boolean
  */

  return (
    <div
      className={
        "w-full rounded-md mb-3 text-center p-8 border-dashed border-4 border-blue-900 bg-white " +
        className
      }
      {...getRootProps()}
    >
      <input
        className="dropzone-input"
        {...getInputProps()}
        name={name}
        id={id}
        multiple={false}
        accept={accept}
      />
      <i className="bi bi-upload text-4xl"></i>
      <div className="text-center flex justify-center items-center mt-2">
        {isDragActive ? (
          <>
            <p>Drop the photos here</p>
          </>
        ) : (
          <>
            <p>Drag photos here</p>
          </>
        )}
      </div>

      <button
        type="button"
        className="bg-blue-900 text-white p-2 rounded-md mt-4 border-none"
      >
        CHOSE PHOTO
      </button>
    </div>
  );
};

export default DropZone;
