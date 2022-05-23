import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; //for toast messages
import "react-toastify/dist/ReactToastify.css";
import "../Styles/Create.css";

const Create = () => {
  const [month, setMonth] = useState("");
  const [revenue, setRevenue] = useState("");
  const [expenditure, setExpenditure] = useState("");
  const [description, setDescription] = useState("");
  const [financialValue, setFinancialValue] = useState("");
  const [loading, setLoading] = useState(false); //additional

  const profitOrLoss = "";

  const createHandler = async (e) => {
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
      await axios.post(
        //use axios API
        "/financial/create",
        {
          month,
          revenue,
          expenditure,
          description,
          financialValue,
          profitOrLoss,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        toast("Success! Financial Added 😍");
        setMonth("");
        setRevenue("");
        setExpenditure("");
        setDescription("");
        setFinancialValue("");
        window.location.reload();
      }, 5000); //5seconds timeout
    } catch (error) {
      alert(error?.response?.data?.error);
      setMonth("");
      setRevenue("");
      setExpenditure("");
      setDescription("");
      setFinancialValue("");
      setLoading(false);
    }
  };

  return (
    <div className="body">
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
            <span className="wave-emoji">👋</span> Let's Calculate Financial 😍
          </h1>
        </div>
      </header>
      <main>
        <form onSubmit={createHandler}>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 bg-neutral-300 border-dashed border-gray-200 rounded-lg h-screen bg-shadow">
                <center>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div
                    style={{
                      display: "inline-flex",
                      justifyContent: "space-around",
                    }}
                    className="container"
                  >
                    <div>
                      <TextField
                        id="filled-basic"
                        label="Month"
                        variant="filled"
                        InputLabelProps={{
                          sx: {
                            // set the color of the label when not shrinked
                            color: "green",
                          },
                        }}
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <TextField
                        id="filled-basic"
                        label="Revenue(Rs)"
                        variant="filled"
                        InputLabelProps={{
                          sx: {
                            // set the color of the label when not shrinked
                            color: "green",
                          },
                        }}
                        value={revenue}
                        onChange={(e) => setRevenue(e.target.value)}
                        type="number"
                        required
                      />
                    </div>
                    <div>
                      <TextField
                        id="filled-basic"
                        label="Expenditure(Rs)"
                        variant="filled"
                        InputLabelProps={{
                          sx: {
                            // set the color of the label when not shrinked
                            color: "green",
                          },
                        }}
                        value={expenditure}
                        onChange={(e) => setExpenditure(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div
                    style={{
                      display: "inline-flex",
                      justifyContent: "space-around",
                    }}
                    className="container"
                  >
                    <div>
                      <TextField
                        id="filled-basic"
                        label="Description"
                        variant="filled"
                        InputLabelProps={{
                          sx: {
                            // set the color of the label when not shrinked
                            color: "green",
                          },
                        }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <TextField
                        id="filled-basic"
                        label="Value"
                        variant="filled"
                        InputLabelProps={{
                          sx: {
                            // set the color of the label when not shrinked
                            color: "green",
                          },
                        }}
                        value={financialValue}
                        onChange={(e) => setFinancialValue(e.target.value)}
                        type="number"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-10">
                    <Button
                      variant="contained"
                      color="success"
                      type="submit"
                      disabled={loading}
                    >
                      <h6 style={{ marginLeft: "5px" }}> </h6>{" "}
                      {loading ? "Calculating..." : "Calculate"}
                    </Button>
                  </div>
                  <ToastContainer style={{ marginTop: "50px" }} />
                </center>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Create;
