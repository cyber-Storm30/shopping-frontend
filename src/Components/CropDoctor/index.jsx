import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import Filters from "./Filters";
import DoctorCard from "./DoctorCard";
import Loader from "../Shared/Loader";
import { axiosClient } from "../../Services/apiClient";
import Query from "./Query";

const Doctors = () => {
  const classes = useStyles();
  const [language, setLanguage] = useState("");
  const [doctorData, setDoctorData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [language]);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axiosClient.get(
        language ? `doctor?language=${language}` : "/doctor"
      );
      console.log(data);
      setDoctorData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(language);

  return (
    <div className={classes.doctors}>
      <Filters language={language} setLanguage={setLanguage} />
      {loading ? (
        <Loader />
      ) : (
        <div
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          <div
            style={{
              paddingLeft: 30,
              paddingTop: 50,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {doctorData.map((data, idx) => (
              <DoctorCard data={data} key={idx} />
            ))}
          </div>
          <Query />
        </div>
      )}
    </div>
  );
};

export default Doctors;
