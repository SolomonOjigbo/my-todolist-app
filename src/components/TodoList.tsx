import React from "react";
import { Todo } from "../models/models";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({ todos, setTodos }) => {
	return (
		<div className="todos">
			{todos.map((todo) => (
				<SingleTodo
					todo={todo}
					todos={todos}
					setTodos={setTodos}
					key={todo.id}
				/>
			))}
		</div>
	);
};

export default TodoList;
