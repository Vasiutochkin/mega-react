import {CarForm, Cars} from "./components";
import {carServise} from "./services";
import {useEffect, useState} from "react";

const App = () => {

    const [cars, setCers] = useState([]);
    const [updateCar, setupdateCar] = useState([]);



    useEffect(() => {
        carServise.getAll().then(({data}) => setCers([...data]))
    }, [])

    return (
        <div>
            <CarForm setCers={setCers} updateCar={updateCar} />
            <hr/>
            <Cars cars={cars} setupdateCar={setupdateCar} setCers={setCers}/>
        </div>
    );
};

export {App};