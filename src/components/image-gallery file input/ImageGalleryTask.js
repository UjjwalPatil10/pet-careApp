import React, { useState } from "react";
const ImageGalleryTask = () => {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    image: "",
  });

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecords = { ...user, id: new Date().getTime().toString() };

    setRecords([...records, newRecords]);
    console.log(records);
  };

  // setUser({name:"",mobile:"",email:"",password:""});

  const [image, setImage] = useState([]);
  const handleuploadeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage([...image, reader.result]);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div
        style={{
          border: "2px solid black",
          width: "250px",
          height: "500px",
          margin: "auto",
          padding: "30px",
          borderRadius: "30px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Simple Form</h3>

        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            style={{ marginTop: 20 }}
          />
          <br />
          <label>Mobile:</label>
          <input
            type="tel"
            name="mobile"
            onChange={handleChange}
            style={{ marginTop: 20 }}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            style={{ marginTop: 20 }}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            style={{ marginTop: 20 }}
          />
          <label>image</label>
          <input
            type="file"
            name="image"
            onChange={handleuploadeImage}
            style={{ marginTop: 20 }}
          />
          {/* <>
          <h5>upload image</h5>
          <input    type="file"   onChange={handleuploadeImage}   />
          
        </> */}
          <br />
          <input
            type="submit"
            value="Create User"
            style={{ marginTop: "20px", marginLeft: "55px" }}
          />
        </form>
      </div>

      <>
        <div style={{ display: "flex" }}>
          {records.map((curEle, i) => {
            return (
              <div
                style={{
                  width: 250,
                  height: 300,
                  border: "2px solid black",
                  textAlign: "center",
                }}
              >
                <div>
                  {/* {image.map((image, i) => ( */}
                  <img
                    key={i}
                    src={image[i]}
                    alt=""
                    style={{ width: 150, height: 150, borderRadius: "80px" }}
                  />
                  {/* ))} */}
                </div>

                {/* <div style={{ height: 150 }}>{curEle.image}</div> */}
                <p>{curEle.name}</p>
                <p>{curEle.mobile}</p>
                <p>{curEle.email}</p>
                <p>{curEle.password}</p>
              </div>
            );
          })}
        </div>
      </>
    </>
  );
};

export default ImageGalleryTask;
