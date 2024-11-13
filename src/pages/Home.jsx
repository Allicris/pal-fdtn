import "../styles/Home.css";
import Header from "../components/Header";
import agenda from "../../public/agendas/agenda9262024.pdf";
import childrens from "../../public/applications/childrensaid.pdf";
import morris from "../../public/applications/morristown.pdf";
import summit from "../../public/applications/summitspeechschool.pdf";
import seeing from "../../public/applications/theseeingeye.pdf";
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
          <p className="application-name-sm">Children's Aid</p>
          <div className="application-info">
            <a className="links" href="https://cafsnj.org/">Visit Website</a>
            <div
              className="print"
              onClick={() => handlePrint(childrens)}
              style={{ cursor: "pointer" }}
            >
              <img src={print}></img>
              <p>Print</p>
            </div>
            
            <button>
              <a href={childrens} target="_blank" rel="noopener noreferrer">
                View Application
              </a>
            </button>
          </div>
        </div>
        <div className="application">
          <p className="application-name-lg">Morristown Medical Center</p>
          <div className="application-info">
            <a className="links" href="https://www.atlantichealth.org/locations/morristown-medical-center">Visit Website</a>
            <div
              className="print"
              onClick={() => handlePrint(morris)}
              style={{ cursor: "pointer" }}
            >
              <img src={print}></img>
              <p>Print</p>
            </div>
            <button>
              <a href={morris} target="_blank" rel="noopener noreferrer">
                View Application
              </a>
            </button>
          </div>
        </div>
        <div className="application">
          <p className="application-name-lg">Summit Speech School</p>
          <div className="application-info">
            <a className="links" href="https://summitspeech.org/">Visit Website</a>
            <div
              className="print"
              onClick={() => handlePrint(summit)}
              style={{ cursor: "pointer" }}
            >
              <img src={print}></img>
              <p>Print</p>
            </div>
            <button>
              <a href={summit} target="_blank" rel="noopener noreferrer">
                View Application
              </a>
            </button>
          </div>
        </div>
        <div className="application">
          <p className="application-name-sm">The Seeing Eye</p>
          <div className="application-info">
            <a className="links" href="https://seeingeye.org/">Visit Website</a>
            <div
              className="print"
              onClick={() => handlePrint(seeing)}
              style={{ cursor: "pointer" }}
            >
              <img src={print}></img>
              <p>Print</p>
            </div>
            <button>
              <a href={seeing} target="_blank" rel="noopener noreferrer">
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
