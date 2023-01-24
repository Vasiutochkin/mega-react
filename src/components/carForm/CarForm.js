import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";
import {carServise} from "../../services";

const CarForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const submit = async (car) => {
        const {data} = await carServise.create(car);
        console.log(data)
// мои авто
        // id: 433
        // brand: ivLexus
        // price: 10000
        // year: 2008
        // id: 434
        // brand: ivMetla
        // price: 999990
        // year: 1990
        // id: 435
        // brand: viLexus
        // price: 20000
        // year: 2008
    };

    return (<div>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={"brand"} {...register("brand")}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type="text" placeholder={"price"} {...register("price")}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type="text" placeholder={"year"} {...register("year")}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button disabled={!isValid}>SAVE</button>

        </form>
    </div>);
};

export {CarForm};


// Вигляд без бібліотеки Joi


// return (<div>
//     <form onSubmit={handleSubmit(submit)}>
//         <input type="text" placeholder={"brand"} {...register("brand", {
//             pattern:
//                 {
//                     value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
//                     message: 'ТІЛЬКИ БУКВИ)'
//                 },
//             required: {value: true, message: 'required'}
//         })}/>
//         {errors.brand && <span>{errors.brand.message}</span>}
//
//         <input type="text" placeholder={"price"} {...register("price", {
//             valueAsNumber: true,
//             min: {value: 0, message: 'min 0'},
//             max: {value: 1000000, message: 'max 1 000 000'}
//
//         })}/>
//         {errors.price && <span>{errors.price.message}</span>}
//
//         <input type="text" placeholder={"year"} {...register("year", {
//             valueAsNumber: true,
//             min: {value: 1990, message: 'min 1990r'},
//             max: {value: new Date().getFullYear(), message: `max ${new Date().getFullYear()}`}
//         })}/>
//         {errors.year && <span>{errors.year.message}</span>}