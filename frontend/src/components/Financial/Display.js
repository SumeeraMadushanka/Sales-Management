import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";

const Display = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    //component mount
    (async () => {
      await axios //axios a promised based HTTP API
        .get("/financial/")
        .then((res) => setData(res?.data));
    })();
  }, []); //this renders only once [] dependency array

  console.log(data)

  const deleteData = async (id, type) => {
    //method for deleting a todo
    if (window.confirm("Do you want to delete !")) {
      await axios.delete(`/financial/delete/${id}`);
      await axios
        .get("/financial/")
        .then((res) => setData(res?.data))
        .catch((error) => alert(error));
    }
  };

  const filteredData = data.filter(
    (el) => el?.month?.toLowerCase().indexOf(query) >= 0
  );
  return (
    <>
      <div
        className="bg-white shadow"
        style={{
          background: "#7b4397" /* fallback for old browsers */,
          background:
            "-webkit-linear-gradient(to right, #dc2430, #7b4397)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to right, #dc2430, #7b4397)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        }}
      >
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex">
          <h1
            className="text-3xl font-bold text-gray-900 mt-14"
            style={{ color: "#f4f4f4", fontFamily: "cursive" }}
          >
            Monthly Financial Balance
          </h1>
        </div>
      </div>
      <br />

      <div className="flex flex-col ">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-1">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="mb-6 mt-2 cursor-pointer bg-orange-600 p-2 font-bold w-52 rounded-xl">
              <Link to="/financialCreate">ADD FINANCIAL DETAILS</Link>
            </div>

            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-black">
                  <tr>
                    <th
                      scope="col"
                      className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Month
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Revenue
                      <span style={{ fontSize: "12px", color: "red" }}>
                        {" "}
                        &nbsp;&nbsp;(Rs)
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Expenditure
                      <span style={{ fontSize: "12px", color: "red" }}>
                        {" "}
                        &nbsp;&nbsp;(Rs)
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Profit Or Loss
                      <span style={{ fontSize: "12px", color: "red" }}>
                        {" "}
                        &nbsp;&nbsp;(Rs)
                      </span>
                    </th>
                    <th
                      scope="col"
                      className=" translate-x-16 px-14 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData?.length === 0 ? ( //conditional satement
                    <center>
                      <h1 style={{ color: "red" }}>
                        Oops.. There are no Financial Yet 😒{" "}
                      </h1>
                    </center>
                  ) : (
                    filteredData?.map((value) => {
                      return (
                        <tr key={value?._id}>
                          <td className="px-10 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="text-sm text-gray-500">
                              {value?.month}
                            </div>
                          </td>
                          <td className="px-12 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="text-sm text-gray-500">
                              {value?.revenue}
                            </div>
                          </td>
                          <td className="px-12 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="text-sm text-gray-500">
                              {value?.expenditure}
                            </div>
                          </td>
                          <td className="px-12 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="text-sm text-gray-500">
                              {Number(value?.revenue) - (value?.expenditure)}
                            </div>
                          </td>
                          
                          <td className="px-10 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a className="text-indigo-600 hover:text-indigo-900">
                              <i
                                className="fa fa-trash cursor-pointer"
                                aria-hidden="true"
                                style={{
                                  color: "red",
                                  fontSize: "20px",
                                  marginRight: "20px",
                                }}
                                onClick={() =>
                                  deleteData(value._id, "today")
                                }
                              ></i>{" "}
                              <Link to={`/financialEdit/${value._id}`}>
                                <i
                                  className="fa fa-pencil cursor-pointer"
                                  aria-hidden="true"
                                  style={{ color: "green", fontSize: "20px" }}
                                ></i>
                              </Link>
                            </a>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className=" float-right font-semibold mb-4 mt-4 mr-8">
            <Link to="/financialReport">
              <SettingsApplicationsSharpIcon /> <u>Generate Report</u>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Display;
