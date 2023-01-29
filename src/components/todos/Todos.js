import {useEffect, useState} from "react";
import {TodosService} from "../../servisces/TodosService";
import {Todo} from "./todo/Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        TodosService.getAll().then(({data}) => setTodos([...data])
    )}, []);
    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};
