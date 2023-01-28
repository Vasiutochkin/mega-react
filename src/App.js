import {CarForm, Cars} from "./components";
import {carServise} from "./services";
import {useEffect, useState} from "react";

const App = () => {

    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState([]);



    useEffect(() => {
        carServise.getAll().then(({data}) => setCars([...data]))
    }, [])

    return (
        <div>
            <CarForm setCers={setCars} updateCar={updateCar} />
            <hr/>
            <Cars cars={cars} setUpadateCar={setUpdateCar} setCars={setCars}/>
        </div>
    );
};

export {App};