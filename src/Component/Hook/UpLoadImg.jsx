import axios from "axios";

 const UpLoadImg = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);
    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_CLIENT_API_KEY}`,
      formData
    );
    return res.data.data.url;
  } catch (error) {
    return("Image upload failed:", error);
   
  }
};
 export default UpLoadImg