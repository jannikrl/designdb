import React, { useState } from "react";

type ImageUploadType = {
  initialImage: string | undefined;
  onChange: (imageFile: File) => void;
};

const ImageUpload: React.FC<ImageUploadType> = ({ initialImage, onChange }) => {
  const [imagePreview, setImagePreview] = useState("");

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    const imageFile = files && files[0];
    if (!imageFile) {
      return;
    }
    setImagePreview(window.URL.createObjectURL(imageFile));
    onChange(imageFile);
  };

  return (
    <>
      <div>
        {!imagePreview && initialImage && (
          <img
            height="200"
            src={process.env.REACT_APP_IMAGE_URL + "/" + initialImage}
            alt=""
          />
        )}
        {imagePreview && <img height="200" src={imagePreview} alt="" />}
      </div>
      <input
        id="image"
        name="imageFile"
        type="file"
        onChange={(event) => changeHandler(event)}
      />
    </>
  );
};

export default ImageUpload;
