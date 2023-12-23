// App.js
import React, { useState } from "react";
import "./App.css";
import ProfileImage from "./assets/download.jpg";
import { FaEdit } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import GirlImage from "./assets/girl.png";
import ManImage from "./assets/man.jpg";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";

const App = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="app-container">
      <div className="container">
        <div
          className="content"
          style={{ border: "1px solid #ccc", borderRadius: "5px" }}
        >
          <div className="teacher-info">
            <div className="avatar" style={{ width: "100px", height: "100px" }}>
              <img src={ProfileImage} alt="Avatar" />
            </div>
            <div className="info">
              <p style={{ marginBottom: "0.5px" }}>
                <b>Teacher's Name </b>
              </p>
              <p style={{ marginBottom: "10px", textAlign: "center" }}>
                School Name
              </p>
            </div>
          </div>
          <div className="grey-box">
            <div className="edit-icon">
              <FaEdit />
            </div>
            <div className="grade-section">
              <p>Grade 3</p>
              <button className="section-dropdown">Section</button>
            </div>
          </div>
          <div className="horizontal-group">
            <div className="group-icon">
              <MdGroups />
            </div>
            <p>
              <b>MY STUDENTS</b>
            </p>
            <div className="view-all">View All</div>
          </div>
          <div
            className="avatars-group"
            style={{ marginTop: "5px", marginLeft: "5px" }}
          >
            <div className="avatars-group">
              <div className="avatar">
                {" "}
                <img src={ProfileImage} alt="Avatar" />
              </div>
              <div className="avatar">
                {" "}
                <img src={ManImage} alt="Avatar" />
              </div>
              <div className="avatar">
                {" "}
                <img src={GirlImage} alt="Avatar" />
              </div>
            </div>
          </div>
          <div className="horizontal-group">
            <div className="group-icon">
              <MdGroups />
            </div>
            <p>
              <b>MY WATCHLIST</b>
            </p>
            <div className="view-all">View All</div>
          </div>
          <div
            className="avatars-group"
            style={{ marginTop: "5px", marginLeft: "5px" }}
          >
            <div className="avatar">
              {" "}
              <img src={GirlImage} alt="Avatar" />
            </div>
            <div className="avatar">
              {" "}
              <img src={ProfileImage} alt="Avatar" />
            </div>
            <div className="avatar">
              {" "}
              <img src={ManImage} alt="Avatar" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="tabs">
          <div className="tab">Overall Summary</div>
          <div className="tab selected" style={{ color: "#7F00FF" }}>
            <b>Guided Path Progress</b>
          </div>
          <div className="tab">Assignment Progress</div>
        </div>
        <div
          className="subcontainer"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="content" style={{ display: "flex" }}>
            <div
              className="subcontainer-header"
              style={{
                display: "flex",
                flexDirection: "column",
                paddingRight: "6px",
              }}
            >
              <p className="assigned-on">Assigned On</p>
              <p
                className="date"
                style={{ marginTop: "0px", paddingTop: "0px" }}
              >
                <b>06 December 2023</b>
              </p>
            </div>
            <div className="vertical-partition"></div>
            <div className="unit-info">
              <p className="unit-name">Unit Name</p>
              <p className="unit-description">
                am, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat{" "}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "15px",
              }}
            >
              {" "}
              <div className="green-progress-bar"></div>
              <buttton>
                <p
                  className="stage"
                  style={{
                    border: "2px solid green",
                    borderRadius: "5px",
                    padding: "5px",
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  Completed
                </p>
              </buttton>
            </div>

            <div
              className="arrow-icon"
              style={{ marginTop: "15px", marginLeft: "5px" }}
            >
              <FaArrowAltCircleUp />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              className="line-info"
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "5px",
              }}
            >
              <div style={{ width: "20%" }}>
                <p className="line-name">Line xyz</p>
              </div>
              <div
                className="green-progress-bar"
                style={{ width: "50%", marginLeft: "10px" }}
              ></div>
              <div
                className="avatars-group"
                style={{ marginTop: "5px", marginLeft: "75px", width: "30%" }}
              >
                <div className="avatar">
                  {" "}
                  <img src={GirlImage} alt="Avatar" />
                </div>
                <div className="avatar">
                  {" "}
                  <img src={ProfileImage} alt="Avatar" />
                </div>
                <div className="avatar">
                  {" "}
                  <img src={ManImage} alt="Avatar" />
                </div>
              </div>
            </div>

            <div
              className="line-info"
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "5px",
              }}
            >
              <div style={{ width: "20%" }}>
                <p className="line-name">Line xyz</p>
              </div>
              <div
                className="green-progress-bar"
                style={{ width: "50%", marginLeft: "10px" }}
              ></div>
              <div
                className="avatars-group"
                style={{ marginTop: "5px", marginLeft: "75px", width: "30%" }}
              >
                <div className="avatar">
                  {" "}
                  <img src={GirlImage} alt="Avatar" />
                </div>
                <div className="avatar">
                  {" "}
                  <img src={ProfileImage} alt="Avatar" />
                </div>
                <div className="avatar">
                  {" "}
                  <img src={ManImage} alt="Avatar" />
                </div>
              </div>
            </div>

            <div
              className="line-info"
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "5px",
              }}
            >
              <div style={{ width: "20%" }}>
                <p className="line-name">Line xyz</p>
              </div>
              <div
                className="green-progress-bar"
                style={{ width: "50%", marginLeft: "10px" }}
              ></div>
              <div
                className="avatars-group"
                style={{ marginTop: "5px", marginLeft: "75px", width: "30%" }}
              >
                <div className="avatar">
                  {" "}
                  <img src={GirlImage} alt="Avatar" />
                </div>
                <div className="avatar">
                  {" "}
                  <img src={ProfileImage} alt="Avatar" />
                </div>
                <div className="avatar">
                  {" "}
                  <img src={ManImage} alt="Avatar" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subcontainer">
          <div className="content" style={{ display: "flex" }}>
            <div
              className="subcontainer-header"
              style={{
                display: "flex",
                flexDirection: "column",
                paddingRight: "6px",
              }}
            >
              <p className="assigned-on">Assigned On</p>
              <p
                className="date"
                style={{ marginTop: "0px", paddingTop: "0px" }}
              >
                <b>06 December 2023</b>
              </p>
            </div>
            <div className="vertical-partition"></div>
            <div className="unit-info">
              <p className="unit-name">Unit Name</p>
              <p className="unit-description">
                am, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat{" "}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "15px",
              }}
            >
              {" "}
              <div className="green-progress-bar"></div>
              <buttton>
                <p
                  className="stage"
                  style={{
                    border: "2px solid green",
                    borderRadius: "5px",
                    padding: "5px",
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  Completed
                </p>
              </buttton>
            </div>

            <div
              className="arrow-icon"
              style={{ marginTop: "15px", marginLeft: "5px" }}
            >
              <FaArrowAltCircleUp />
            </div>
          </div>
        </div>
        <div className="subcontainer">
          <div className="content" style={{ display: "flex" }}>
            <div
              className="subcontainer-header"
              style={{
                display: "flex",
                flexDirection: "column",
                paddingRight: "6px",
              }}
            >
              <p className="assigned-on">Assigned On</p>
              <p
                className="date"
                style={{ marginTop: "0px", paddingTop: "0px" }}
              >
                <b>06 December 2023</b>
              </p>
            </div>
            <div className="vertical-partition"></div>
            <div className="unit-info">
              <p className="unit-name">Unit Name</p>
              <p className="unit-description">
                am, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat{" "}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "15px",
              }}
            >
              {" "}
              <div className="green-progress-bar"></div>
              <buttton>
                <p
                  className="stage"
                  style={{
                    border: "2px solid green",
                    borderRadius: "5px",
                    padding: "5px",
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  Completed
                </p>
              </buttton>
            </div>

            <div
              className="arrow-icon"
              style={{ marginTop: "15px", marginLeft: "5px" }}
            >
              <FaArrowAltCircleUp />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="due-today-box">
          <h3 style={{ fontSize: "20px", marginBottom: "0px" }}>DUE TODAY</h3>
          <p style={{ fontWeight: "bold" }}>Assignment 1</p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam
          </p>
          <div
            className="view-button"
            style={{ width: "50px", backgroundColor: "white", color: "black" }}
          >
            <b style={{ textAlign: "center" }}>View</b>
          </div>
        </div>
        <div
          className="tiles-container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="tile" style={{ marginBottom: "4px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "5px",
              }}
            >
              <div className="avatar" style={{ width: "30px", height: "30px" }}>
                <img src={ProfileImage} alt="Avatar" />
              </div>
              <p style={{ marginTop: "5px", marginLeft: "5px" }}>
                <b>Assignments</b>
              </p>
            </div>

            <div
              className="tag"
              style={{
                backgroundColor: "#f8ed62",
                color: "orange",
                border: "orange 2px solid",
              }}
            >
              Ongoing
            </div>
            <h4>Monthly talent Show Postponed</h4>
            <p>
              illo inventore veritatis et quasi architecto beatae vitae dicta
              sunt explicabo. Nemo enim ipsam voluptatem
            </p>
          </div>
          <div className="tile" style={{ marginBottom: "4px" }}>
            <p>
              <b>Assignments</b>
            </p>
            <div
              className="tag"
              style={{
                backgroundColor: "#b3ecec",
                color: "#004c4c",
                border: "2px #004c4c solid",
              }}
            >
              Ongoing
            </div>
            <h4>Upcoming Holiday Postponed</h4>
            <p>
              illo inventore veritatis et quasi architecto beatae vitae dicta
              sunt explicabo. Nemo enim ipsam voluptatem
            </p>
          </div>
          <div className="tile" style={{ marginBottom: "4px" }}>
            <p>
              <b>Assignments</b>
            </p>
            <div
              className="tag"
              style={{
                backgroundColor: "#b3ecec",
                color: "#004c4c",
                border: "2px #004c4c solid",
              }}
            >
              Ongoing
            </div>
            <h4>Parent Teachers Meeting</h4>
            <p>
              illo inventore veritatis et quasi architecto beatae vitae dicta
              sunt explicabo. Nemo enim ipsam voluptatem
            </p>
          </div>
        </div>
      </div>

      <div className="plus-button" onClick={openPopup}>
        <IoMdAdd style={{ fontSize: "20px" }} />
      </div>

      {isPopupOpen && (
        <div className="new-popup-container">
          <div className="new-close-button" onClick={closePopup}>
            <IoIosCloseCircle className="new-close-icon" />
          </div>
          <h2 className="new-popup-title">Our Students</h2>
          <div className="new-cards-container">
            {/* Responsive card layout */}
            <div className="new-card">
              <div className="new-avatar">
                {" "}
                <img src={GirlImage} alt="Avatar" className="dp" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "40px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "10px",
                  }}
                >
                  <p className="new-number">1000</p>
                  <p className="new-count-text">Freados</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="new-number">56</p>
                  <p className="new-count-text">Streaks</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="new-number">70</p>
                  <p className="new-count-text">Reading</p>
                </div>
              </div>
            </div>
            <div className="new-card">
              <div className="new-avatar">
                {" "}
                <img src={GirlImage} alt="Avatar" className="dp" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "40px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "10px",
                  }}
                >
                  <p className="new-number">1000</p>
                  <p className="new-count-text">Freados</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="new-number">56</p>
                  <p className="new-count-text">Streaks</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="new-number">70</p>
                  <p className="new-count-text">Reading</p>
                </div>
              </div>
            </div>
            <div className="new-card">
              <div className="new-avatar">
                {" "}
                <img src={GirlImage} alt="Avatar" className="dp" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "40px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "10px",
                  }}
                >
                  <p className="new-number">1000</p>
                  <p className="new-count-text">Freados</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="new-number">56</p>
                  <p className="new-count-text">Streaks</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="new-number">70</p>
                  <p className="new-count-text">Reading</p>
                </div>
              </div>
            </div>
            <div className="new-card">
              <div className="new-avatar">
                {" "}
                <img src={GirlImage} alt="Avatar" className="dp" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "40px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "10px",
                  }}
                >
                  <p className="new-number">1000</p>
                  <p className="new-count-text">Freados</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="new-number">56</p>
                  <p className="new-count-text">Streaks</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="new-number">70</p>
                  <p className="new-count-text">Reading</p>
                </div>
              </div>
            </div>
            <div className="new-card">
              <div className="new-avatar">
                {" "}
                <img src={GirlImage} alt="Avatar" className="dp" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "40px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "10px",
                  }}
                >
                  <p className="new-number">1000</p>
                  <p className="new-count-text">Freados</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="new-number">56</p>
                  <p className="new-count-text">Streaks</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="new-number">70</p>
                  <p className="new-count-text">Reading</p>
                </div>
              </div>
            </div>
            <div className="new-card">
              <div className="new-avatar">
                {" "}
                <img src={GirlImage} alt="Avatar" className="dp" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "40px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "10px",
                  }}
                >
                  <p className="new-number">1000</p>
                  <p className="new-count-text">Freados</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="new-number">56</p>
                  <p className="new-count-text">Streaks</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="new-number">70</p>
                  <p className="new-count-text">Reading</p>
                </div>
              </div>
            </div>

            {/* Add more cards as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
