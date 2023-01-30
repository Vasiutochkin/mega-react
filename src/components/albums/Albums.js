import {useEffect, useState} from "react";

import {AlbumsService} from "../../servisces";
import {Album} from "./album/Album";

import css from "../header/Header.module.css";
const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        AlbumsService.getAll().then(({data}) => setAlbums([...data]))
    }, [])

    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};