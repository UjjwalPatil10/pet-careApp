import React, { useState } from "react";

const FileUploadTask = () => {
  const [image, setImage] = useState([]);

  return (
    <div>
      <h2>Image Gallery</h2>
      {Array.from(image).map((item) => {
        return (
          <img
            style={{ width: 150, height: 100, padding: 10 }}
            src={item ? URL.createObjectURL(item) : null}
          /> // this method convert object{} to URL(text) to display images
        );
      })}
      <input
        multiple
        type="file"
        accept=".jpg,.png,.jpeg,.gif,.svg,.webp"
        onChange={(e) => {
          setImage(e.target.files[0].name);
          console.log(image.name);
        }}
      />
      <button>Submit</button>
    </div>
  );
};

export default FileUploadTask;
