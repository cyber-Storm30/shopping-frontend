import React, { useContext, useState } from "react";
import "./Styles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase/index.js";
import { axiosClient } from "../../Services/apiClient";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [success, setSuccess] = useState(false);

  const handleUpdate = async () => {
    if (file) {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            // try {
            //   axiosClient.post("/posts/createpost", {
            //     username: `${user.firstname} ${user.lastname}`,
            //     userId: user._id,
            //     body: desc,
            //     image: downloadURL,
            //   });
            //   setFile("");
            // } catch (err) {
            //   window.alert("Unable to upload try again !!!");
            // }
          });
        }
      );
    } else {
      // dispatch(closeModal(close));
      // try {
      //   await axiosClient.post("/posts/createpost", newPost);
      // } catch (err) {
      //   window.alert("Unable to upload try again !!!");
      // }
      console.log("Else part");
    }
  };
  const user = {
    username: "Ranajit",
  };

  return (
    <div className="setting">
      <div className="setting__top">
        <h1>Update Your Profile</h1>
        <p style={{ cursor: "pointer" }}>Delete Account</p>
      </div>

      <div className="pp__title">Profile Picture</div>
      <div className="pp__image">
        {file && <img src={URL.createObjectURL(file)} />}
        <label htmlFor="ppUpload">
          <AccountCircleIcon style={{ cursor: "pointer" }} />
        </label>
        <input
          type="file"
          id="ppUpload"
          style={{ display: "none" }}
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
      </div>
      <form>
        <div className="setting__form">
          <p>Username</p>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <p>Email</p>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="setting__button" onClick={handleUpdate}>
            Update
          </button>
          {success ? (
            <span
              style={{
                color: "green",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              Profile Updated Sucessfully
            </span>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Profile;
