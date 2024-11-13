import "../styles/Home.css";
import Header from "../components/Header";
import agenda from "../../public/agendas/agenda1252024.pdf";
import kessler from "../../public/applications/kessler.pdf";
import alpine from "../../public/applications/alpine.pdf";
import print from "../../public/icons/print.png";

function Home() {
  const handlePrint = (fileUrl) => {
    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.width = "0px";
    iframe.style.height = "0px";
    iframe.style.border = "none";
    iframe.src = fileUrl;

    document.body.appendChild(iframe);

    iframe.onload = () => {
      iframe.contentWindow.print();
    };
  };

  return (
    <>
      <Header />
      <h1 className="home-title">Agenda</h1>
      <p className="meeting-info">
        Our next teleconference Board Meeting is scheduled for Thursday, December 5, 2024 at 10:00 am. Dariusz's office will send a tele-link for you to call in. Thank you all and Happy Thanksgiving!
      </p>
      <p className="meeting-info">- Kristine Sayrafe</p>
      <div className="agenda">
        <button className="agenda-button">
          <a href={agenda} target="_blank" rel="noopener noreferrer">
            View Agenda
          </a>
        </button>
        <p className="agenda-print" onClick={() => handlePrint(agenda)}>Print</p>
      </div>
      <h1 className="home-title">Applications</h1>
      <div className="applications">
        <div className="application">
          <p className="application-name-lg">Alpine Learning Group</p>
          <div className="application-info">
            <a className="links" href="https://www.alpinelearninggroup.org">Visit Website</a>
            <div
              className="print"
              onClick={() => handlePrint(alpine)}
              style={{ cursor: "pointer" }}
            >
              <img src={print}></img>
              <p>Print</p>
            </div>
            
            <button>
              <a href={alpine} target="_blank" rel="noopener noreferrer">
                View Application
              </a>
            </button>
          </div>
        </div>
        <div className="application">
          <p className="application-name-lg">Kessler Foundation</p>
          <div className="application-info">
            <a className="links" href="https://kesslerfoundation.org">Visit Website</a>
            <div
              className="print"
              onClick={() => handlePrint(kessler)}
              style={{ cursor: "pointer" }}
            >
              <img src={print}></img>
              <p>Print</p>
            </div>
            <button>
              <a href={kessler} target="_blank" rel="noopener noreferrer">
                View Application
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
