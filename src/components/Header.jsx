import "../styles/Header.css";

function Header() {
  return (
    <>
      <header>Alfiero & Lucia Palestroni Foundation, Inc.</header>
      <h3>333 Sylvan Avenue, Suite #100, Englewood Cliffs, NJ 07632</h3>
      <h4>
        <p>Phone: 201-568-8000 </p>
        <p className="space">|</p>
        <p>Fax: 201-568-6973</p>
        <p className="space">|</p>
        <a href="mailto:info@palestroni.com">Email: info@palestroni.com</a>
      </h4>
    </>
  );
}

export default Header;
