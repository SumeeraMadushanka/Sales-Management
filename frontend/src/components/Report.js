import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import jsPDF from "jspdf";
import "./Styles/Report.css";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReportData: [],
    };
  }
  printDocument() {
    const input = document.getElementById("pdfdiv");
    html2canvas(input).then((canvas) => {
      var img = new Image();
      const doc = new jsPDF("p", "mm", "a4");
      doc.setTextColor(255, 0, 0);
      doc.setFontSize(28);
      doc.text(65, 10, "Sales Management");
      doc.setTextColor(0, 0, 255);
      doc.setFontSize(16);
      doc.text(10, 70, "Sales Details");
      doc.setTextColor(0, 255, 0);
      doc.setFontSize(12);
      doc.text(145, 85, "Signature :");
      //Date
      var m_names = new Array(
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      );

      var today = new Date();
      var seconds = today.getSeconds();
      var minutes = today.getMinutes();
      var hours = today.getHours();
      var curr_date = today.getDate();
      var curr_month = today.getMonth();
      var curr_year = today.getFullYear();

      today =
        m_names[curr_month] +
        " " +
        curr_date +
        "/ " +
        curr_year +
        " | " +
        hours +
        "h : " +
        minutes +
        "min : " +
        seconds +
        "sec";
      var newdat = today;
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(130, 93, newdat);
      var imgHeight = (canvas.height * 200) / canvas.width;
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "JPEG", 5, 100, 200, imgHeight);
      const date = Date().split(" ");
      // we use a date string to generate our filename.
      const dateStr =
        "sales_" + date[0] + date[1] + date[2] + date[3] + date[4];
      doc.save(`report_${dateStr}.pdf`);
    });
  }

  componentDidMount() {
    axios.get("/sales/").then((response) => {
      console.log(response?.data);
      this.setState({
        ReportData: response?.data,
      });
    });
  }
  render() {
    return (
      <div>
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
                Salary Report 😍
              </h1>
            </div>
          </header>
        </center>
        <TableContainer
          id="pdfdiv"
          className="txt px-4 mt-20"
          component={Paper}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableCell align="right">Month</TableCell>
              <TableCell align="right">Week</TableCell>
              <TableCell align="right">Vehicale Name</TableCell>
              <TableCell align="right">Rental Number</TableCell>
              <TableCell align="right">Vehicale Number</TableCell>
              <TableCell align="right">No Of Kilometers</TableCell>
              <TableCell align="right">Payment Per Day(Rs)</TableCell>
              <TableCell align="right">Number Of Days</TableCell>
              <TableCell align="right">Revenue(Rs)</TableCell>
            </TableHead>
            <TableBody>
              {this.state?.ReportData?.map((p, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="right" className="-translate-x-2">
                      {p.month}
                    </TableCell>
                    <TableCell align="right">{p.week}</TableCell>
                    <TableCell align="right">{p.vName}</TableCell>
                    <TableCell align="center" className=" translate-x-12">
                      {p.rNumber}
                    </TableCell>
                    <TableCell align="center" className=" translate-x-12">
                      {p.vNumber}
                    </TableCell>
                    <TableCell align="center" className=" translate-x-12">
                      {p.numberOfkm}
                    </TableCell>
                    <TableCell align="center" className=" translate-x-6">
                      {p.payment}
                    </TableCell>
                    <TableCell align="center" className=" translate-x-6">
                      {p.numberOfday}
                    </TableCell>
                    <TableCell align="center" className=" translate-x-6">
                      {p.revenue}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>{" "}
        <br />
        <br />
        <center>
          <div>
            <button
              className="info__button"
              onClick={this.printDocument}
              variant="contained"
              color="primary"
            >
              <i class="fa fa-file-pdf-o" aria-hidden="true"></i> Download PDF
            </button>
            <br />

            <Link to="/dashbord">
              <button
                variant="contained"
                color="primary"
                style={{ float: "right", background: "lightgreen" }}
              >
                <i class="fa fa-reply" aria-hidden="true"></i> Go Back
              </button>
            </Link>
          </div>
        </center>
      </div>
    );
  }
}
