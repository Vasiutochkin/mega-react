import {Car} from "../car/Car";
import './App.css'

const Cars = ({cars, setUpdateCar, setCars}) => {

    return (
        <div className={'container'}>
            {cars.map(car => <Car key={car.id} car={car} setUpdateCar={setUpdateCar} setCers={setCars}/>)}
        </div>
    );
};

export {Cars};
