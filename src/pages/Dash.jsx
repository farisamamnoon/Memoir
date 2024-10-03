import { useNavigate } from "react-router-dom";

import "./App.css";

function Dash() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="main-heading">Memoir</h1>

      <div className="card-container">
        <div className="card" onClick={() => navigate("/1")}>
          <img src="/Dubai.jpg" />
          <h3>Dubai</h3>
          <p>The far fetched Middle East</p>
          <p>Wed Jul 22 2012</p>
          <button>More</button>
        </div>
        <div className="card" onClick={() => navigate("/1")}>
          <img src="/Dubai.jpg" />
          <h3>Dubai</h3>
          <p>The far fetched Middle East</p>
          <p>Wed Jul 22 2012</p>
          <button>More</button>
        </div>
        <div className="card" onClick={() => navigate("/1")}>
          <img src="/Dubai.jpg" />
          <h3>Dubai</h3>
          <p>The far fetched Middle East</p>
          <p>Wed Jul 22 2012</p>
          <button>More</button>
        </div>
      </div>
    </>
  );
}

export default Dash;
