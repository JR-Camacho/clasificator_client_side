const ImagePreview = ({ image }) => {
  return (
    <div className="bg-white flex flex-wrap justify-evenly w-full p-4 rounded file-list">
      <div className="file-item">
        <img src={image} className="w-60 h-60 object-cover m-2 rounded-lg" />
      </div>
    </div>
  );
};

export default ImagePreview;
