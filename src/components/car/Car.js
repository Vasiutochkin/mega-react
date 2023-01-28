import {carServise} from "../../services";

const Car = ({car, setUpdateCar, setCars, setDeleteCars}) => {

    const {id, brand, price, year,} = car;

    return (
        <div>
            <div>id: {id} </div>
            <div> {brand} </div>
            <div> {price} </div>
            <div> {year} </div>
            <button onClick={() => setUpdateCar(car)}>UPDAT</button>
            <button onClick={() => {
                carServise.deleteById(id).then(async () => {
                    const {data} = await carServise.getAll();
                    setCars([...data])
                }).catch(err => console.log(err))
            }}>DELETE
            </button>
            <hr/>
        </div>
    );
};

export {Car};