import {useEffect, useState} from "react";
import SomeList from "./someList";


function StopWatch() {
  const [Hours, setHours] = useState(0);
  const [Minutes, setMinutes] = useState(0);
  const [Sec, setSec] = useState(0);
  const [someList, updateSomeList] = useState([]);
  const [AddItem, setAddItem] = useState(0);
  const [clearItems, setClearItems] = useState(0);
  useEffect(() => {
    let timer = setInterval(counterSec, 1000);
    if (AddItem) {
      addItem(Hours, Minutes, Sec);
      setAddItem(0);
    }
    if (clearItems) {
      clearList();
      setClearItems(0);
    }
    return function cleanUp() {
      clearInterval(timer);
    }
  }, [Sec])

  function addItem(H, M, S) {
    let item = `${(H >= 10) ? H : '0' + H} : ${(M >= 10) ? M : '0' + M} : ${(S >= 10) ? S : '0' + S}`
    updateSomeList(arr => [...arr, item]);
    setAddItem(0);
  }

  function clearList() {
    updateSomeList([]);
  }

  function counterSec() {
    setSec(Sec + 1);
    if (Sec === 59) {
      setMinutes(Minutes + 1);
      setSec(0);
      if (Minutes === 59) {
        setMinutes(0);
        setHours(Hours + 1);
      }
    }
  }

  return (
    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div className="card p-4">
        <div className="image d-flex flex-column justify-content-center align-items-center">
          <span className="name mt-3">Time component Life :</span>
          <div className=" px-2 rounded mt-3 date ">
            {(Hours >= 10) ? Hours : '0' + Hours}&nbsp;:&nbsp;
            {(Minutes >= 10) ? Minutes : '0' + Minutes}&nbsp;:&nbsp;
            {(Sec >= 10) ? Sec : '0' + Sec}
          </div>
          <br/>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-success" onClick={() => setAddItem(1)}>Add</button>
            <button type="button" className="btn btn-danger" onClick={() => setClearItems(1)}>Reset</button>
          </div>
          <br/>
          < SomeList list={someList}/>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
