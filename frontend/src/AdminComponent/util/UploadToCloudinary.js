const upload_preset = "GrabGrub";
const cloud_name = "dbenzjbq0";
const api_url = `https://api.cloudinary.com/v1_1/dbenzjbq0/image/upload`;
export const uploadImageToCloudinary = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", upload_preset);
  data.append("cloud_name", cloud_name);

  const res = await fetch(api_url, { method: "post", body: data });

  const fileData = await res.json();

  return fileData.url;
};
