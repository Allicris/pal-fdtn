//Where the applications are listed.
import '../styles/Home.css';

function Home() {
  return (
    <>
    <h1>
      Applications
    </h1>
    <div className="applications">
      <div className="application">
      <p>Application 1</p>
      <button>View Application</button>
      </div>
      <div className="application">
      <p>Application 2</p>
      <button>View Application</button>
      </div>
      <div className="application">
      <p>Application 3</p>
      <button>View Application</button>
      </div>
    </div>
    </>
  )
}

export default Home;