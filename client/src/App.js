import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {typeof data.members === "undefined"
        ? "loading"
        : data.members.map((item, i) => <p key={i}>{item}</p>)}
    </div>
  );
}

export default App;
