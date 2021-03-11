import PropTypes from "prop-types";
import React from "react";
import TodoTextInput from "./TodoTextInput";

export default function Header({ addTodo }) {
  return (
    <header className="header">
      <h1>WEED TODO!</h1>
      <TodoTextInput
        newTodo
        onSave={(text) => {
          if (text.length !== 0) {
            // simulate delayed application logic
            // setTimeout(addTodo, 1000, text)
            addTodo(text);
          }
        }}
        placeholder="What needs to be done?"
      />
    </header>
  );
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
