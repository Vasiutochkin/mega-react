import {useEffect, useState} from "react";

import {Album} from "./album/Album";
import {AlbumsService} from "../../servisces/AlbumsService";
import css from "../header/Header.module.css";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() =>{
        AlbumsService.getAll().then(({data}) => setAlbums([...data]))
    },[])

    return (
        <div className={css.container}>
            {albums.map(album => <Album key={album.id} album={album}  />)}
        </div>
    );
};

export {Albums};