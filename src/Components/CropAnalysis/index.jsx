import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import Filters from "./Filters";
import Loader from "../Shared/Loader";
import { axiosClient } from "../../Services/apiClient";
import DataCard from "./DataCard";

const CropAnalysis = () => {
  const classes = useStyles();
  const [month, setMonth] = useState("");
  const [cropData, setCropData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [month]);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axiosClient.get(
        month ? `crop?month=${month}` : "/crop?month=Jan"
      );
      // console.log(data);
      setCropData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.crops}>
      <Filters month={month} setMonth={setMonth} />
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
            {/* {doctorData.map((data, idx) => (
              <DoctorCard data={data} key={idx} />
            ))} */}
            <DataCard
              title="Crops "
              values={[
                "Tomato",
                "Potato",
                "Brinjal",
                "Cabbage",
                "Carrot",
                "Onion",
                "Ginger",
              ]}
            />
            {cropData.map((data, idx) => (
              <DataCard
                month={data.month}
                index={idx}
                title={`Week ${idx + 1}`}
                values={data.cropData}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CropAnalysis;
