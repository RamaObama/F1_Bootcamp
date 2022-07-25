import {useEffect, useState} from 'react'
import axios from "axios";

export default function Search(props) {
    const [field, setField] = useState("");
    const [elements, setElements] = useState([]);
    const [load, setLoad] = useState(true);
    const [element, setElement] = useState();
    const [notSearch, setNotSearch] = useState(true);

    function onChangeHandler(e) {
        e.preventDefault()
        setField(e.target.value);
    }

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
            .then(response => {
                setElements(response.data.results)
                setLoad(false)
            })
            .catch(error => {
                console.log(error);
                setLoad(false)
            })
    }, [load])

    function onSubmitHandler(e) {
        e.preventDefault()
        setElement(elements.filter(el => el.name === field))
        if (element.length === 1) {
            props.addElement(element);
            setNotSearch(false);
        } else {
            setNotSearch(true);
        }
    }

    return (
        // {!setNotSearch && <div> покемона такого нет, НЕТ ТАКОГО ПОКЕМОНА </div>}
        <div className="row d-flex justify-content-center mt-lg-5">
            <div className="col-md-8">
                <div className="search">
                    <form onSubmit={onSubmitHandler}>
                        <input type="text" className="form-control" placeholder="Pokemon" value={field} name={"search"}
                               onChange={onChangeHandler}/>
                    </form>
                    {/*<button className="btn btn-primary">Search</button>*/}
                </div>
            </div>
        </div>
    );
}
