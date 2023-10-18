import React from "react";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { BarChart } from "@mui/x-charts/BarChart";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Main = () => {
  const uData = [
    4000, 3000, 2000, 2780, 1890, 2390, 3490, 400, 8000, 1000, 1500, 800,
  ];
  const pData = [
    2400, 1398, 9800, 3908, 4800, 3800, 4300, 1000, 5760, 7880, 6770, 4800,
  ];
  const amtData = [
    2400, 2210, 2290, 2000, 2181, 2500, 2100, 4560, 2430, 1260, 1320, 3200,
  ];
  const xLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const rowsTable = [
    {
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <MonetizationOnOutlinedIcon
              fontSize="large"
              className="main_icon"
              style={{ backgroundColor: "rgba(0,128,0,0.2)", color: "green" }}
            />
            <div className="ptag">
              <p className="para">Earning</p>
              <p className="amount">$125K</p>
              <span
                style={{
                  color: "green",
                  fontWeight: "bold",
                  marginRight: "5px",
                }}
              >
                <KeyboardArrowUp />
                20%
              </span>
              this month
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <ListAltOutlinedIcon
              fontSize="large"
              className="main_icon"
              style={{ backgroundColor: "rgba(255,0,0,0.2)", color: "crimson" }}
            />
            <div className="ptag">
              <p className="para">Orders</p>
              <p className="amount">$1.2K</p>
              <span
                style={{ color: "red", fontWeight: "bold", marginRight: "5px" }}
              >
                <KeyboardArrowDown />
                2%
              </span>
              this month
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <AccountBalanceWalletOutlinedIcon
              fontSize="large"
              className="main_icon"
              style={{
                backgroundColor: "rgba(128,0,128,0.2)",
                color: "purple",
              }}
            />
            <div className="ptag">
              <p className="para">Balance</p>
              <p className="amount">$2.4K</p>
              <span
                style={{ color: "red", fontWeight: "bold", marginRight: "5px" }}
              >
                <KeyboardArrowUp />
                5%
              </span>
              this month
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <ShoppingBagOutlinedIcon
              fontSize="large"
              className="main_icon"
              style={{
                backgroundColor: "rgba(218,165,32,0.2)",
                color: "goldenrod",
              }}
            />
            <div className="ptag">
              <p className="para">Total Sales</p>
              <p className="amount">$88K</p>
              <span
                style={{
                  color: "green",
                  fontWeight: "bold",
                  marginRight: "5px",
                }}
              >
                <KeyboardArrowUp />
                40%
              </span>
              this month
            </div>
          </div>
        </div>
      </div>
      <div className="charts">
        <div className="bar">
          <h2>Overview</h2>
          <p>Monthly Earning</p>
          <BarChart
            width={600}
            height={300}
            series={[
              { data: pData, label: "pv", stack: "stack1" },
              { data: amtData, label: "amt" },
              { data: uData, label: "uv", stack: "stack1" },
            ]}
            xAxis={[{ data: xLabels, scaleType: "band" }]}
          />
        </div>
        <div className="circle">
          <h2>Customers</h2>
          <p>Customers that buy products</p>
          <div className="circular">
            <CircularProgressbar value={70} text={"70%"} />
          </div>
        </div>
      </div>
      <div>
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Product</TableCell>
                <TableCell className="tableCell">Customer</TableCell>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Amount</TableCell>
                <TableCell className="tableCell">Payment Method</TableCell>
                <TableCell className="tableCell">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsTable.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="tableCell">
                    <div className="cellWrapper">
                      <img src={row.img} alt="" className="image" />
                      {row.product}
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">{row.customer}</TableCell>
                  <TableCell className="tableCell">{row.date}</TableCell>
                  <TableCell className="tableCell">{row.amount}</TableCell>
                  <TableCell className="tableCell">{row.method}</TableCell>
                  <TableCell className="tableCell">
                    <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </main>
  );
};

export default Main;
