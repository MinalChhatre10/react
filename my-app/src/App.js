import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" About="About Us" />
      <div className="container">
        <TextForm heading="Enter the text below to analyze " />
      </div>
    </>
  );
}

export default App;
