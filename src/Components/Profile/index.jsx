import React, { useContext, useEffect, useState } from "react";
import "./Styles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { axiosClient } from "../../Services/apiClient";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateUser } from "../../redux/Actions/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [success, setSuccess] = useState(false);
  const [fetchedUser, setFetchedUser] = useState();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((s) => s.auth.user);

  console.log("user is", user);

  const pf = "";

  useEffect(() => {
    getFetchedUser();
  }, []);

  const getFetchedUser = async () => {
    try {
      const res = await axiosClient.get(
        `http://localhost:5001/api/user/find/${user._id}`
      );
      console.log("fetched user", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username: username.length > 0 ? username : user.username,
      email: email.length > 0 ? email : user.email,
      password: fetchedUser?.password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.img = filename;
      console.log("UpdatedUser", updatedUser);
      try {
        const res = await axios.post("http://localhost:5001/api/upload", data);
        console.log("After profile photo update", res);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put(
        `http://localhost:5001/api/user/${user._id}`,
        updatedUser
      );
      console.log("After update api", res.data);
      dispatch(updateUser(res.data));
      setSuccess(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    const id = user._id;
    dispatch(logout());
    navigate("/");
    try {
      await axios.delete(`http://localhost:5001/api/user/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="setting">
      <div className="setting__top">
        <h1>Update Your Profile</h1>
        <p style={{ cursor: "pointer" }} onClick={handleDelete}>
          Delete Account
        </p>
      </div>

      <div className="pp__title">Profile Picture</div>
      <div className="pp__image">
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : `http://localhost:5001/images/${user?.img}`
          }
          alt="profile picture"
        />

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
