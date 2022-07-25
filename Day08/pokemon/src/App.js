import React, {useState, useEffect} from "react";
import './App.css'
import {Container} from "react-bootstrap";
import axios from "axios";
import List from "./components/list/list";

function App() {

  const [load, setLoad] = useState(true);
  const [list, setList] = useState([]);
  useEffect(()=> {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
          setList(response.data.results);
          setLoad(false);
        },
      ).catch(error => {
      setLoad(false);
      console.log(error);
    })
  }, [load])

  return (
    <div className="App">
      <Container>
        {!load && <List list={list} />}
      </Container>
    </div>
  );
}

export default App;
