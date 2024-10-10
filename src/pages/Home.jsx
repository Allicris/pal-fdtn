import "../styles/Home.css";
import Header from "../components/Header";
import agenda from "../../public/agendas/agenda9262024.pdf";
import childrens from "../../public/applications/childrensaid.pdf";
import morris from "../../public/applications/morristown.pdf";
import summit from "../../public/applications/summitspeechschool.pdf";
import seeing from "../../public/applications/theseeingeye.pdf";
import print from "../../public/icons/print.png";

function Home() {
  return (
    <>
      <Header />
      <h1 className="home-title">Agenda</h1>
      <p className="meeting-info">
        I would like to extend a thank you to everyone for contributing to the last meeting. Details of the next meeting will be posted soon!
      </p>
      <p className="meeting-info">- Kristine Sayrafe</p>
      <div className="agenda">
        <button className="agenda-button">
          <a href={agenda}>View Agenda</a>
        </button>
      </div>
      <h1 className="home-title">Applications</h1>
      <div className="applications">
        <div className="application">
          <p className="application-name-sm">Children's Aid</p>
          <div className="application-info">
            <p>Visit Website</p>
            <div className="print">
          <img src={print}></img>
          <p>Print</p>
          </div>
            <button>
            <a href={childrens}>View Application</a>
          </button>
            </div>
          
        </div>
        <div className="application">
          <p className="application-name-lg">Morristown Medical Center</p>
          <div className="application-info">
          <p>Visit Website</p>
          <div className="print">
          <img src={print}></img>
          <p>Print</p>
          </div>
          <button>
            <a href={morris}>View Application</a>
          </button>
          </div>
        </div>
        <div className="application">
          <p className="application-name-lg">Summit Speech School</p>
          <div className="application-info">
          <p>Visit Website</p>
          <div className="print">
          <img src={print}></img>
          <p>Print</p>
          </div>
          <button>
            <a href={summit}>View Application</a>
          </button>
          </div>

        </div>
        <div className="application">
          <p className="application-name-sm">The Seeing Eye</p>
          <div className="application-info">
          <p>Visit Website</p>
          <div className="print">
          <img src={print}></img>
          <p>Print</p>
          </div>
          <button>
            <a href={seeing}>View Application</a>
          </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
