import "../App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Preview from "./Preview";

function App() {
  return (
    <>
      <Navbar logo="../netflix.png"></Navbar>
      <Hero></Hero>
      <Preview></Preview>
    </>
  );
}

export default App;
