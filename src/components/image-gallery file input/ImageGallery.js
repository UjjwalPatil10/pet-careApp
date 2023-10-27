import React, { useState } from "react";

const ImageGallery = () => {
  const [imageList, setImageList] = useState([]);

  // In state we don't have fix images and we want to upload that images and that upload images will be
  // save in a state(imageList) which is a array
  const handleImageChange = (e) => {
    const { files } = e.target;
    // console.log("Files: ", files);//we print file and we get file object
    // const file = files[0];
    for (const file of files) {
      const fr = new FileReader(); //for every file one object internally created for that we convert that object to base64 .so in js we get fileReader()with the help fileReader() we convert file object to base64
      fr.addEventListener("load", function (e) {
        console.log("loaded");
        setImageList((state) => [...state, fr.result]);
      });
      //binary to text(base 64)
      fr.readAsDataURL(file);
    }
  };

  return (
    <>
      <h2>Upload Images Gallery</h2>
      <hr />

      <input
        multiple
        type="file"
        accept=".jpg,.png,.jpeg,.gif,.svg,.webp"
        onChange={handleImageChange}
      />
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {
          Array.isArray(imageList) &&
            imageList?.map((image, ind, arr) => (
              <img
                src={image}
                alt=""
                style={{ width: 200, height: 200, margin: 5 }}
              />
            )) //here we only take image,caption,image delete that we don't do if we want to do that for that  don't take image as text for that we have to maintain object
        }
      </section>
    </>
  );
};
export default ImageGallery;
