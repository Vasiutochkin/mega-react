import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";
import {carValidator} from "../../validators";
import {carServise} from "../../services";
import {useEffect} from "react";

const CarForm = ({setCars, updateCar}) => {

        const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
            mode: 'all',
            resolver: joiResolver(carValidator)
        });

        useEffect(() => {
            if (updateCar) {
                setValue('brand', updateCar.brand)
                setValue('price', updateCar.price)
                setValue('year', updateCar.year)
            }
        }, [updateCar])

        const submit = async (car) => {
            const {data} = await carServise.create(car);
            setCars(prev => [...prev, data])
            reset()
            console.log(data)
        };

        const update = async (car) =>{
            const {data} = await carServise.updateById(updateCar.id, car)
            if(Object.keys(data).length){
                const {data} = await carServise.getAll()
                setCars(data)
            }

            console.log(data)
        }

        return (
            <form onSubmit={handleSubmit(updateCar ? update : submit)}>
                <input type='text' placeholder={'brand'} {...register('brand')} />
                {errors.brand && <span>{errors.brand.message}</span>}

                <input type='text' placeholder={'price'} {...register('price', {valueAsNumber: true})} />
                {errors.price && <span>{errors.price.message}</span>}

                <input type='text' placeholder={'year'} {...register('year', {valueAsNumber: true})} />
                {errors.year && <span>{errors.year.message}</span>}

                <button disabled={!isValid}>{updateCar?'UPDATE' : 'SAVE'}</button>
            </form>
        );
    }
;

export {CarForm};