import "./App.css";
import { useState, useEffect } from "react";

function MongoConnector({ Name }) {
  return (
    <ul>
      <li>{Name}</li>
    </ul>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/api/sysops/6340931fb41b2464b050deca`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;
  return <MongoConnector Name={data.Name} />;
}

export default App;
