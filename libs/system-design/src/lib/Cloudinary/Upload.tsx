import * as React from "react";

interface Props {
  setUrl: (url: string) => void;
  label: string;
}

export const FileUpload: React.FC<Props> = ({setUrl, label}) => {

  const uploadImage = (e: React.ChangeEvent) => {
    const formData = new FormData();
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    formData.append("file", file);
    formData.append("upload_preset", "almuntad_preset_h1s2a3");
    fetch("https://api.cloudinary.com/v1_1/dieieuuby/image/upload", {
      method: "POST",
      body: formData
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUrl(data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <label htmlFor="file">{label}</label>
      <input type="file" style={{
        display: "none"
      }
      } id='file' onChange={(e) => uploadImage(e)}/>
    </div>
  )
}
