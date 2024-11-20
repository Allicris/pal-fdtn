import React from "react";
import "../styles/ApplicationCard.css";
import print from "../../public/icons/print.png";

const ApplicationCard = ({ name, website, fileUrl, onPrint }) => {
  const nameClass =
    name.length > 15 ? "application-name-lg" : "application-name-sm";

  return (
    <>
      <div className="application">
        <p className={nameClass}>{name}</p>
        <div className="application-info">
          <a
            className="links"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
          <button className="print" onClick={() => onPrint(fileUrl)}>
            <img src={print}></img>
            <p>Print</p>
          </button>
          <button className="application-button">
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              View Application
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ApplicationCard;
