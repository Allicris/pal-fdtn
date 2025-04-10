import "../styles/Home.css";
import Header from "../components/Header";
import ApplicationsList from "../components/ApplicationList";
import agenda from "../../public/agendas/agenda04242025.pdf"; // CHANGE TO THE NEW AGENDA YOU UPLOADED
import { handlePrint } from "../utilities/utils";

function Home() {
  return (
    <>
      <Header />
      <h1 className="home-title">Agenda</h1>
      <p className="meeting-info">
        Our next teleconference Board Meeting is scheduled for Thursday, April 24, 2025 at 10:00 am. Dariusz's office will send a tele-link for you to call in.</p> 
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
      <ApplicationsList />
    </>
  );
};


export default Home;
