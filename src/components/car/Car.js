const Car = ({car}) => {
    const {id, brand, price, year} = car
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>prise: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export {Car};