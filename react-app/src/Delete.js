import { useState } from "react";
import ReactDOM from "react-dom/client";

function DeleteFromDB() {
  const [recordId] = useState("");
  const { pumpstations } = this.state;

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8080/api/sysops/${recordId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            response: result,
            pumpstations: pumpstations.filter(
              (pumpstation) => pumpstation._id !== recordId
            ),
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"></input>
        <input type="submit" value={recordId}></input>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DeleteFromDB />);
