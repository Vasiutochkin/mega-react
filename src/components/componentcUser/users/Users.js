import {useEffect, useState} from "react";
import {userServise} from "../../../servise";
import {User} from "../user/User";

const Users = ({setUserId}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userServise.getAll()
            .then(value => value.data)
            .then(value => setUsers([...value]))
    }, [])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} setUserId={setUserId}/>)
            }
        </div>
    );
};

export {Users};