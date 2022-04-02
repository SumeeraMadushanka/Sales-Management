import { TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; //for toast messages
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [month, setMonth] = useState(undefined);
  const [week, setWeek] = useState(undefined);
  const [rNumber, setRentalnumber] = useState(undefined);
  const [vNumber, setVehicalenumber] = useState(undefined);
  const [vName, setVehicalename] = useState(undefined);
  const [numberOfkm, setNoofKm] = useState(undefined);
  const [payment, setPayment] = useState(undefined);
  const [numberOfday, setNumberofDays] = useState(undefined);
  const [revenue, setRevenue] = useState(undefined);
  const [loading, setLoading] = useState(false); //additional

  const { id } = useParams();

  useEffect(() => {
    //component mount
    const getData = async () => {
      await fetch(`/sales/get/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setMonth(json.month);
          setWeek(json.week);
          setRentalnumber(json.rNumber);
          setVehicalenumber(json.vNumber);
          setVehicalename(json.vName);
          setNoofKm(json.numberOfkm);
          setPayment(json.payment);
          setNumberofDays(json.numberOfday);
          setRevenue(json.revenue);
        })
        .catch((err) => alert(err));
    };
    getData();
  }, []);

  const editHandler = async (e) => {
    // create handler for saving data to the db
    e.preventDefault();

    setLoading(true);

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        //use axios API
        `/sales/update/${id}`,
        {
          vName,
          rNumber,
          vNumber,
          numberOfkm,
          payment,
          numberOfday,
          revenue,
          month,
          week,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        toast("Success! Sales Details are Updated 😘");
        setMonth("");
        setWeek("");
        setRentalnumber("");
        setVehicalenumber("");
        setVehicalename("");
        setNoofKm("");
        setPayment("");
        setNumberofDays("");
        setRevenue("");
      }, 5000); //5seconds timeout
    } catch (error) {
      alert(error);
      setMonth("");
      setWeek("");
      setRentalnumber("");
      setVehicalenumber("");
      setVehicalename("");
      setNoofKm("");
      setPayment("");
      setNumberofDays("");
      setRevenue("");
      setLoading(false);
    }
  };

  return (
    <div className="body">
      <center>
        <header
          className="bg-white shadow mt-20"
          style={{
            background: "#7b4397" /* fallback for old browsers */,
            background:
              "-webkit-linear-gradient(to right, #dc2430, #7b4397)" /* Chrome 10-25, Safari 5.1-6 */,
            background:
              "linear-gradient(to right, #dc2430, #7b4397)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
          }}
        >
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1
              className="text-3xl font-bold text-gray-900"
              style={{ color: "#f4f4f4", fontFamily: "cursive" }}
            >
              <span className="wave-emoji">👋</span> Let's Edit Sales Details 😍
            </h1>
          </div>
        </header>
      </center>
      <main>
        <div
          className=" mx-60 mb-14"
          style={{
            background: "#7b4397" /* fallback for old browsers */,
            background:
              "-webkit-linear-gradient(to right, #dc2430, #7b4397)" /* Chrome 10-25, Safari 5.1-6 */,
            background:
              "linear-gradient(to right, #dc2430, #7b4397)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
          }}
        >
          <div className=" text-4xl text-center mt-14 font-semibold translate-y-8 rounded-full bg-sky-500 mx-72 p-4 ">
            Sales Details <br />
          </div>
          <form onSubmit={editHandler} className="">
            <div class="container  py-20 mx-auto ">
              <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
                  Month:
                </h1>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  inputText={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "white",
                    },
                  }}
                  size="small"
                  inputProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "black",
                      font: "bold",
                    },
                  }}
                  type="text"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  required
                />
                <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white ml-10">
                  Week:
                </h1>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  type="text"
                  value={week}
                  onChange={(e) => setWeek(e.target.value)}
                  required
                />
              </div>
              <br />
              <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
                  Vehicle Name:
                </h1>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  type="text"
                  value={vName}
                  onChange={(e) => setVehicalename(e.target.value)}
                  required
                />
              </div>
              <br />
              <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
                  Rental Number:
                </h1>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  type="text"
                  value={rNumber}
                  onChange={(e) => setRentalnumber(e.target.value)}
                  required
                />
              </div>
              <br />
              <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
                  Vehicale Number:
                </h1>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  type="text"
                  value={vNumber}
                  onChange={(e) => setVehicalenumber(e.target.value)}
                  required
                />
              </div>
              <br />
              <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
                  No Of Kilometers:
                </h1>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  type="text"
                  value={numberOfkm}
                  onChange={(e) => setNoofKm(e.target.value)}
                  required
                />
              </div>
              <br />
              <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
                  Payment Per Day(Rs):
                </h1>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  type="number"
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  required
                />
              </div>
              <br />
              <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
                  Number Of Days:
                </h1>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  type="text"
                  value={numberOfday}
                  onChange={(e) => setNumberofDays(e.target.value)}
                  required
                />
              </div>
              <br />
              <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
                  Revenue(Rs):
                </h1>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  type="text"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  required
                />
              </div>
              <br />

              <div className=" text-center mx-auto">
                <div className=" mt-2 ">
                  <Button
                    variant="contained"
                    color="success"
                    type="submit"
                    disabled={loading}
                  >
                    <h6 style={{ marginLeft: "5px" }}> </h6>{" "}
                    {loading ? "Updating..." : "Update"}
                  </Button>
                  <ToastContainer style={{ marginTop: "50px" }} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Edit;
