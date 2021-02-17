import React, { useState } from "react";

const ImageUpload = ({ onChange, initialImage }) => {
  const [imagePreview, setImagePreview] = useState("");

  const changeHandler = (event) => {
    const imageFile = event.currentTarget.files[0];
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
