import Item from "./item/item";
import {useEffect, useState} from "react";
import Search from "../search/search";

const filterPokemon = (nameSearch, listPok) => {
    if (!nameSearch) {
        return listPok;
    }
    return listPok.filter(({name}) =>
        name.includes(nameSearch.toLowerCase())
    );
}

function List(props) {
    const [list, setList] = useState(props.list);
    //const [loadFirst, setLoadFirst] = useState(true);
    const [nameSearch, setNameSearch] = useState("");
    //const [initList, setinitList] = useState();
    useEffect(() => {
        const filter = setTimeout(() => {
            const filtredPokemon = filterPokemon(nameSearch, list);
            setList(filtredPokemon);
        }, 300);

        return () => clearTimeout(filter);
    }, [list, nameSearch])


    let removeComponent = (idx) => {
        let copy = Object.assign([], list);
        copy.splice(idx, 1);
        setList(copy);
    }
    let checkName = name => {
        setNameSearch(name);
    }

    let addElement = (el) => {
        setList([el[0], ...list])
    }

    let result = list.map((el, idx) => <Item name={el.name} key={idx} options={el.url} idx={idx}
                                             removeComponent={removeComponent}/>);

    return (
        <div>
            {list.length === 0 && <div> Такого покемона нет </div>}
            <Search checkName={checkName} addElement={addElement}/>
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-md-8">
                    {result}
                </div>
            </div>
        </div>
    );
}


export default List;
