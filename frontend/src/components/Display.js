import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Display = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    //component mount
    (async () => {
      await axios //axios a promised based HTTP API
        .get("/sales/")
        .then((res) => setData(res?.data));
    })();
  }, []); //this renders only once [] dependency array

  const deleteVehicle = async (id, type) => {
    //method for deleting a todo
    if (window.confirm("Do you want to delete !")) {
      await axios.delete(`/sales/delete/${id}`);
      await axios
        .get("/sales/")
        .then((res) => setData(res?.data))
        .catch((error) => alert(error));
    }
  };

  const filteredData = data.filter(
    (el) => el?.vName?.toLowerCase().indexOf(query) >= 0
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
            All Sales Vehicle
          </h1>
          &nbsp;
          <div class="flex items-center justify-center mt-14">
            <div class="flex border-2 border-gray-200 rounded">
              <input
                type="text"
                class="px-4 py-2 w-80"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="flex flex-col ">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-1">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
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
                      className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Week
                    </th>
                    <th
                      scope="col"
                      className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Rental Number
                    </th>
                    <th
                      scope="col"
                      className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Vehicle Number
                    </th>
                    <th
                      scope="col"
                      className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      vehicle Type
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      No of Kilometers
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      No of Days
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
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData?.length === 0 ? ( //conditional satement
                    <center>
                      <h1 style={{ color: "red" }}>
                        Oops.. There are no Employees Yet 😒{" "}
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
                              {value?.week}
                            </div>
                          </td>
                          <td className="px-10 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="text-sm text-gray-500">
                              {value?.rNumber}
                            </div>
                          </td>
                          <td className="px-10 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="text-sm text-gray-500">
                              {value?.vNumber}
                            </div>
                          </td>
                          <td className="px-8 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {" "}
                              {value?.vName}&nbsp;
                              <i
                                className="fa fa-circle"
                                aria-hidden="true"
                                style={{ color: "red" }}
                              ></i>
                            </span>
                          </td>
                          <td className="px-16 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="text-sm text-gray-500">
                              {value?.numberOfkm}
                            </div>
                          </td>
                          <td className="px-20 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="text-sm text-gray-500">
                              {value?.numberOfday}
                            </div>
                          </td>
                          <td className="px-16 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="text-sm text-gray-500">
                              {value?.revenue}
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
                                  deleteVehicle(value._id, "today")
                                }
                              ></i>{" "}
                              <Link to={`/edit/${value._id}`}>
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
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Display;
