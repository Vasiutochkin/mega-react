import {useEffect, useState} from "react";

import {carServise} from "../../services";
import {Car} from "../car/Car";
import './App.css'

const Cars = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        carServise.getAll().then(({data}) => setCars([...data]))
    }, [])

    return (
        <div className={'container'}>
            {cars.map(car => <Car kye={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};