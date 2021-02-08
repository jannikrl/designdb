import { axios } from "./baseService";

export const uploadImage = async (imageFile) => {
  const data = new FormData();

  data.append("image", imageFile);

  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  const image = await axios
    .post("/images", data, config)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error("imageService uploadImage failed");
    });

  return image;
};


export const deleteImage = (image) => {

}