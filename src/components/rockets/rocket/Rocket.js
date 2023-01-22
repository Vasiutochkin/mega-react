const Rocket = ({rocet}) => {

    const {mission_name, launch_year, links} = rocet;
    // const { mission_patch_small } = links;

    return (
        <div>
            <h4> {launch_year} {mission_name} </h4>
            <img src={links.mission_patch_small} alt={mission_name}/>
            {/*<img src={mission_patch_small} alt={mission_name}/>*/}

            <hr/>
        </div>
    );
};
export {Rocket};