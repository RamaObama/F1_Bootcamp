import './App.css';
import StudentInfo from "./components/studentInfo";
import StopWatch from "./components/stopWatch";
import {useState} from "react";

function App() {
  let [handlerInfo, setHandleInfo] = useState(true);
  function setInfo() {
    setHandleInfo(!handlerInfo);
    setInterval(false);
  }

  let [timer, setInterval] = useState(false);
  function setTimer() {
    setInterval(!timer);
   setHandleInfo(false);
  }
  return (
    <main>
      <div className="container App">
        <div className="row">
          <div className="px-4 py-5 my-5 text-center">
            <div className="col-lg-6 mx-auto">
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={setInfo}>Student Info</button>
                <button type="button" className="btn btn-warning btn-lg px-4" onClick={setTimer}>Stop Watch</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          { handlerInfo && <StudentInfo /> }
          { timer && <StopWatch /> }
        </div>
      </div>
    </main>
  )
}

export default App;
