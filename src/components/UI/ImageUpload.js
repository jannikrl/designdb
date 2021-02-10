import React from "react";

const ImageUpload = (props) => (
  <div>
    <div>
      {!props.imagePreview && props.initialImage && (
        <img
          height="200"
          src={process.env.REACT_APP_IMAGE_URL + "/" + props.initialImage}
          alt=""
        />
      )}
      {props.imagePreview && <img height="200" src={props.imagePreview} alt="" />}
    </div>
    <input
      id="image"
      name="imageFile"
      type="file"
      onChange={(event) => props.onChange(event)}
    />
  </div>
);

export default ImageUpload;
