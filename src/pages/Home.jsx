import "../styles/Home.css";
import Header from "../components/Header";
import agenda from "../../public/agendas/agenda9262024.pdf";
import childrens from "../../public/applications/childrensaid.pdf";
import morris from "../../public/applications/morristown.pdf";
import summit from "../../public/applications/summitspeechschool.pdf";
import seeing from "../../public/applications/theseeingeye.pdf";

function Home() {
  return (
    <>
      <Header />
      <h1>Agenda</h1>
      <p className="meeting-info">
        The next meeting is scheduled for Thursday, September 26 2024 at 10:00
        am
      </p>
      <div className="agenda">
        <button className="agenda-button">
          <a href={agenda}>Click here to view the Agenda</a>
        </button>
      </div>
      <h1>Applications</h1>
      <div className="applications">
        <div className="application">
          <p>Children's Aid</p>
          <button>
            <a href={childrens}>View Application</a>
          </button>
        </div>
        <div className="application">
          <p>Morristown Medical Center</p>
          <button>
            <a href={morris}>View Application</a>
          </button>
        </div>
        <div className="application">
          <p>Summit Speech School</p>
          <button>
            <a href={summit}>View Application</a>
          </button>
        </div>
        <div className="application">
          <p>The Seeing Eye</p>
          <button>
            <a href={seeing}>View Application</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
