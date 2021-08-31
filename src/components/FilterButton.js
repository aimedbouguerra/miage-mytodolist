import React from "react";
import Button from 'react-bootstrap/Button';

function FilterButton(props) {
  return (
    <Button
      type="button"
      className="btn toggle-btn"
      variant="outline-primary"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Voir </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tâches</span>
    </Button>
  );
}

export default FilterButton;