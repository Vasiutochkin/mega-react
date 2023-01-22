import {useEffect, useState} from "react";

import {Rocket} from "./rocket/Rocket";
import {RocketsServise} from "../../servise";
import './App.css';

const Rockets = () => {

    const [rocets, setRocets] = useState([]);

    useEffect(() => {
        // RocetsService.getAll().then(value => value.data).then(value => setRocets([...value]) )
        RocketsServise.getAll().then(({data}) => setRocets([...data]))}, [])

    const filterErrRockets = rocets.filter(item => item.launch_year !== '2020');

    return (<div className={'conteiner'}>

            {filterErrRockets.map((rocket, index) => <Rocket kye={index} rocet={rocket}/>)}

        </div>);
};

export {Rockets};