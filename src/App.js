// import {useState} from "react";
//
// import {Posts, Users} from "./components/componentcUser";

import {Rockets} from "./components/rockets/Rockets";

const App = () => {

    // const [userId, setUserId] = useState(null);

    return (
        <div>

            <Rockets/>


            {/*<Users setUserId={setUserId}/>*/}
            {/*{userId && <Posts userId={userId}/>}*/}


        </div>
    );
};

export {App};