const SingleTodo = ({ todo, removeTodo, completeTodo, index }) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "0 auto",
        justifyContent: "center",
        width: "20%",
      }}
    >
      <p
        style={{
          margin: "0 auto",
          textDecoration: todo.is_completed ? "line-through" : "",
        }}
      >
        {todo.text}
      </p>
      <button
        style={{ margin: "0 auto", cursor: "pointer" }}
        onClick={() => removeTodo(index)}
      >
        X
      </button>
      <button onClick={() => completeTodo(index)}>Complete</button>
    </div>
  );
};
export default SingleTodo;
