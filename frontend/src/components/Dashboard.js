import React from "react";
import { Link } from "react-router-dom";
import d1 from "../components/assets/d1.jpg";
import d2 from "../components/assets/d2.jpg";
import AddLinkIcon from "@mui/icons-material/AddLink";
import InfoIcon from "@mui/icons-material/Info";

import img1 from "../components/assets/vehicles/img1.jpg";
import img2 from "../components/assets/vehicles/img2.jpg";
import img3 from "../components/assets/vehicles/img3.jpg";
import img4 from "../components/assets/vehicles/img4.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Dashboard = () => {
  return (
    <>
      <div className=" bg-zinc-600 h-full">
        <div className=" mx-auto py-32 px-4 sm:px-6 lg:px-8">
          <center>
            <h1 className=" text-5xl font-semibold">
              Hello <span className="wave-emoji">👋</span> Today's Special 😍
            </h1>
          </center>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="xl:w-1/4 md:w-1/2 p-4" data-aos="zoom-out-up">
                  <div class="bg-gray-100 p-2 rounded-lg shadow-2xl">
                    <img
                      class="h-64 rounded w-full object-cover object-center mb-6"
                      src={img1}
                      alt="content"
                    />
                  </div>
                </div>
                <div class="xl:w-1/4 md:w-1/2 p-4" data-aos="zoom-out-up">
                  <div class="bg-gray-100 p-2 rounded-lg shadow-2xl">
                    <img
                      class="h-64 rounded w-full object-cover object-center mb-6"
                      src={img2}
                      alt="content"
                    />
                  </div>
                </div>
                <div class="xl:w-1/4 md:w-1/2 p-4" data-aos="zoom-out-up">
                  <div class="bg-gray-100 p-2 rounded-lg shadow-2xl">
                    <img
                      class="h-64 rounded w-full object-cover object-center mb-6"
                      src={img3}
                      alt="content"
                    />
                  </div>
                </div>
                <div class="xl:w-1/4 md:w-1/2 p-4" data-aos="zoom-out-up">
                  <div class="bg-gray-100 p-2 rounded-lg shadow-2xl">
                    <img
                      class="h-64 rounded w-full object-cover object-center mb-6"
                      src={img4}
                      alt="content"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            className="bg-black shadow overflow-hidden sm:rounded-lg "
            style={{ margin: "20px" }}
          >
            <div className="px-4 py-5 sm:px-6">
              <h3 className=" text-3xl leading-6 font-medium text-white">
                Information Center <InfoIcon />
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-sm text-gray-500 sm:mt-0 sm:col-span-2">
                    admin@gmail.com
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Attachments
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul
                      role="list"
                      className="border border-gray-200 rounded-md divide-y divide-gray-200"
                    >
                      <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <AddLinkIcon
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-2 flex-1 w-0 truncate">
                            report.pdf
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            <Link to="/report">Download</Link>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
