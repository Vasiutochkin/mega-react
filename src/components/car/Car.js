import {carServise} from "../../services";

const Car = ({car, setupdateCar, setCers, setDeleteCars}) => {

    const {id, brand, price, year,} = car;

    return (
        <div>
            <div>id: {id} </div>
            <div> {brand} </div>
            <div> {price} </div>
            <div> {year} </div>
            <button onClick={() => setupdateCar(car)}>UPDAT</button>
            <button onClick={() => {
                carServise.deleteById(id).then(async () => {
                    const {data} = await carServise.getAll();
                    setCers([...data])
                }).catch(err => console.log(err))
            }}>DELETE
            </button>
            <hr/>
        </div>
    );
};

export {Car};