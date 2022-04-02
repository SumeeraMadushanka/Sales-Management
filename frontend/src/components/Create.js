import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
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

  const isCheck = () => {
    if (
      month === undefined ||
      week === undefined ||
      rNumber === undefined ||
      vNumber === undefined ||
      vName === undefined ||
      numberOfkm === undefined ||
      numberOfday === undefined ||
      revenue === undefined ||
      payment === undefined
    )
      toast("Plase fill out the required fields!");
  };

  const handleSubmit = async (e) => {
    //logic for adding data to the BACKENDe
    e.preventDefault();

    setLoading(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      //exception handling
      var { data } = await axios.post(
        "/sales/create",
        {
          month,
          week,
          rNumber,
          vNumber,
          vName,
          numberOfkm,
          numberOfday,
          revenue,
          payment,
        },
        config
      );
      toast("Success! Added 😘");
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
    } catch (error) {
      toast(`Error! ${error?.response?.data?.error}`);
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
      setTimeout(() => {}, 5000); //5s
    }
  };

  return (
    <>
      <div>
        <Box
          sx={{
            px: 20,
            py: 4,
            color: "red",
            border: 1,
            borderColor: "primary.main",
          }}
        ></Box>
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
          <form onSubmit={handleSubmit}>
            <div class="container  py-20 mx-auto ">
              <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
                  Month:
                </h1>
                <TextField
                  id="outlined-basic"
                  label="Month"
                  placeholder="Enter Month"
                  variant="outlined"
                  size="small"
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
                  label="Week"
                  placeholder="Enter Week Number"
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
                  Vehicale Name:
                </h1>
                <TextField
                  id="outlined-basic"
                  label="Vehicale Name"
                  variant="outlined"
                  size="small"
                  placeholder="Enter Vehicale Name"
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
                  label="Rental Number"
                  placeholder="Enter Rental Number"
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
                  label="Vehical Number"
                  placeholder="Enter Vehical Number"
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
                  label="No Of Kilometers"
                  placeholder="Enter No of Kilometers"
                  variant="outlined"
                  size="small"
                  type="number"
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
                  label="Payment"
                  placeholder="Enter Payment Per Day"
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
                  label="Number Of Days"
                  placeholder="Enter Number Of Days"
                  variant="outlined"
                  size="small"
                  type="number"
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
                  label="Revenue"
                  placeholder="Enter Revenue"
                  variant="outlined"
                  size="small"
                  type="number"
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
                    onClick={isCheck}
                  >
                    <h6 style={{ marginLeft: "5px" }}> </h6>{" "}
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                  <ToastContainer style={{ marginTop: "50px" }} />
                </div>
              </div>
            </div>
          </form>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Create;
