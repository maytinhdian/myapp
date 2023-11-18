// import logo from "./logo.svg";
import "./App.css";

function App() {
  const username = "Lê Thanh Nhã";
  const age = 18;
  const employe = {
    username: "JOHN",
    age: 20,
  };
  return (
    <div className="App">
      <h1>
        Hello: {username} - {age}
      </h1>
      <h2>
        Employe: {employe.username} - {employe.age}
      </h2>
    </div>
  );
}

export default App;
