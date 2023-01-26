import {Car} from "../car/Car";
import './App.css'

const Cars = ({cars, setupdateCar, setCers}) => {

    return (
        <div className={'container'}>
            {cars.map(car => <Car key={car.id} car={car} setupdateCar={setupdateCar} setCers={setCers}/>)}
        </div>
    );
};

export {Cars};
