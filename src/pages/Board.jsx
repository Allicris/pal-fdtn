import "../styles/Board.css";

function Board() {
  return (
    <>
      <div>
        <div>
          <h2 className="trustees">Board of Trustees</h2>
          <ul className="president">
            <li className="name-title">Lucia Palestroni, President</li>
            <li>333 Sylvan Avenue, Suite #100</li>
            <li>Englewood Cliffs, NJ 07632</li>
            <li>Office: (201) 568-8000</li>
            <li>Fax: (201) 568-6973</li>
            <li>
              <a href="mailto:info@palestroni.com">
                Email: info@palestroni.com
              </a>
            </li>
          </ul>
        </div>
        <div className="members">
          <div className="member-info">
            <h2 className="member-name">Kristine Sayrafe</h2>
            <ul className="member">
              <li>Trustee/Secretary/Manager</li>
              <li>Cell: (201) 774-9420</li>
              <li>
                <a href="mailto:palestroni@hotmail.com">
                  Email: palestroni@hotmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="member-info">
            <h2 className="member-name">Frank Huttle, III, Esq.</h2>
            <ul className="member">
              <li>Trustee/V.P./Treasurer</li>
              <li>Cell: (201) 906-5638</li>
              <li>
                <a href="mailto:fhuttle@pashmanstein.com">
                  Email: fhuttle@pashmanstein.com
                </a>
              </li>
            </ul>
          </div>
          <div className="member-info">
            <h2 className="member-name">Karen Lloyd</h2>
            <ul className="member">
              <li>Trustee</li>
              <li>Cell: (561) 385-9569</li>
              <li>
                <a href="mailto:klloydclearing@me.com">
                  Email: klloydclearing@me.com
                </a>
              </li>
            </ul>
          </div>
          <div className="member-info">
            <h2 className="member-name">Debbie Sena</h2>
            <ul className="member">
              <li>Trustee</li>
              <li>Cell: (732) 558-3909</li>
              <li>
                <a href="mailto:debbie.sena@gmail.com">
                  Email: debbie.sena@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="members">
          <div className="member-info">
            <h2 className="other">Counsel:</h2>
            <h2 className="member-name">Dariusz M. Winnicki, Esq.</h2>
            <ul className="member">
              <li>Hartman & Winnicki, P.C.</li>
              <li>74 Passaic Street</li>
              <li>Ridgewood, NJ 07451</li>
              <li>Office: (201) 967-8040</li>
              <li>Fax: (201) 967-0590</li>
              <li>
                <a href="mailto:dwinnicki@hartmanwinnicki.com">
                  Email: dwinnicki@hartmanwinnicki.com
                </a>
              </li>
            </ul>
          </div>

          <div className="member-info">
            <h2 className="other">Accountant:</h2>
            <h2 className="member-name">Spiros M. Backos</h2>
            <ul className="member">
              <li>The Backos Group</li>
              <li>777 Terrace Avenue, Ste. 304</li>
              <li>Hasbrouck Heights, NJ 07604</li>
              <li>Office: (201) 727-0707</li>
              <li>Fax: (201) 727-9005</li>
              <li>
                <a href="mailto:spiros@backosgroup.com">
                  Email: spiros@backosgroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="advisors">
          <h2 className="other">Investment Advisors:</h2>
          <div className="members">
            <div >
              <h2 className="member-name">
                Evan Steinberg, CIMA, Managing Director-Wealth Advisor
              </h2>
              <ul className="member">
                <li>Steinberg Forman Group | Morgan Stanley | Smith Barney</li>
                <li>Park Avenue Plaza, 55 E. 52nd Street, 29th Fl.</li>
                <li>New York, NY 10055</li>
                <li>Office: (212) 893-7501</li>
                <li>Fax: (212) 705-4556</li>
                <li>
                  <a href="mailto:evan.steinberg@morganstanley.com">
                    Email: evan.steinberg@morganstanley.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="member-name">
                Roderick McRae, CFA, CFP & Peter J. McRae, CFP
              </h2>
              <ul className="member">
                <li>McRae Capital Management, Inc.</li>
                <li>230 Madison Avenue</li>
                <li>Morristown, NJ 07960</li>
                <li>Office: (973) 387-1080</li>
                <li>Fax: (973) 387-1081</li>
                <li>
                  <a href="mailto:rod3@mcraecapital.com">
                    Email: rod3@mcraecapital.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="member-name">Joseph G. Della Monica, CFP, MBA</h2>
              <ul className="member">
                <li>Della Monica & Associates | Ameriprise Financial</li>
                <li>3013 N. Ashland Avenue, Ste. 1</li>
                <li>Chicago, IL 60657</li>
                <li>Office: (773) 880-5900</li>
                <li>Fax: (773) 880-9190</li>
                <li>
                  <a href="mailto:joseph.g.dellamonica@ampf.com">
                    Email: joseph.g.dellamonica@ampf.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Board;
