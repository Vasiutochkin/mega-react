const Dog = ({dog, dispatch}) => {
    const {id, name} = dog;
    return (
        <div>
            {id}){name}
            <button onClick={() => dispatch({type:'DELETE_DOG', payload:id })}>DElITE_DOG</button>
        </div>
    );
};

export {Dog};