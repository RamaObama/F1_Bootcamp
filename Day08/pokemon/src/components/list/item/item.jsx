import {useEffect, useState} from "react";
import axios from "axios";

function Item(props) {
    const [load, setLoad] = useState(true);
    const [urlImg, setUrlImg] = useState();
    const [countsForm, setCountsForm] = useState(0);
    const [nameForm, setNameForm] = useState();
    const [idPokemon, setIDPokemon] = useState();

    useEffect(() => {
        axios.get(props.options)
            .then(response => {
                setIDPokemon(response.data.id);
                setUrlImg(response.data.sprites.other.dream_world.front_default);
                setCountsForm(response.data.forms.length)
                setNameForm(response.data.forms[0].name);
                setLoad(false);
            }).catch(error => {
            console.log(error);
            setLoad(false);
        })
        return function clean() {
            setUrlImg(null);
            setCountsForm(null);
        }
    }, [load, props.list, props.options]);

    return (
        <div className="card p-3 mt-2 mb-2">
            <div className="row">
                <div className="col-md-4">
                    <div className="position-relative snipimage">
                        <img src={urlImg} alt={props.name}
                             className="rounded img-fluid w-100 img-responsive"></img>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="mt-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>
                                <span className="badge bg-primary "> № {(idPokemon <= 10) ? '0' : ''}
                                {(idPokemon <= 100) ? '0' : ''}
                                {(idPokemon <= 1000) ? '0' : ''}
                                {idPokemon}
                            </span>
                                {' ' + props.name}</h2>
                            <h5 className="mb-1">
                                <span className="badsge badge-ssuccess">

                                </span>

                            </h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={() => {
                                props.removeComponent(props.idx)
                            }}></button>
                        </div>
                        <div className="d-flex flex-row mt-3">
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row align-items-center">
                                    <h6>Form's: {countsForm}</h6>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <h6>Evolution Chain: {nameForm}</h6>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Item;
