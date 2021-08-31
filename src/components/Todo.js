import React, { useEffect, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';

export default function Todo(props) {
	const editFieldRef = useRef(null);
	const editButtonRef = useRef(null);

	const [isEditing, setEditing] = useState(false);

	const [newName, setNewName] = useState('');

	const wasEditing = usePrevious(isEditing);

	function handleChange(e) {
	  setNewName(e.target.value);
	}
	function handleSubmit(e) {
	  e.preventDefault();
	  props.editTask(props.id, newName);
	  setNewName("");
	  setEditing(false);
	}
	
	const editingTemplate = (
	  <form className="stack-small" onSubmit={handleSubmit}>
	    <div className="form-group">
	      <label className="todo-label" htmlFor={props.id}>
	        Nouveau nom pour {props.name}
	      </label>
	      <input
			  id={props.id}
			  className="todo-text"
			  type="text"
			  value={newName}
			  onChange={handleChange}
  			  ref={editFieldRef}
			/>
	    </div>
	    <div className="btn-group">
	      <Button
			  type="button"
			  variant="dark"
			  onClick={() => setEditing(false)}
			>
			  Annuler
			</Button>
	      <Button type="submit" variant="primary">
	        Enregistrer
	      </Button>
	    </div>
	  </form>
	);
	
	const viewTemplate = (
	  <div className="stack-small">
	    <div className="c-cb">
	        <input
	          id={props.id}
	          type="checkbox"
	          defaultChecked={props.completed}
	          onChange={() => props.toggleTaskCompleted(props.id)}
	        />
	        <label className="todo-label" htmlFor={props.id}>
	          {props.name}
	        </label>
	        <p>{props.fromList}</p>
	      </div>
	      <div className="btn-group">
	        <Button
			  type="button"
			   variant="outline-primary"
			  onClick={() => setEditing(true)}
			  ref={editButtonRef}
			>
			  Modifier
			</Button>
	        <Button
	          type="button"
	          variant="danger"
	          onClick={() => props.deleteTask(props.id)}
	        >
	          Supprimer
	        </Button>
	      </div>
	  </div>
	);

	useEffect(() => {
	  if (!wasEditing && isEditing) {
	    editFieldRef.current.focus();
	  }
	  if (wasEditing && !isEditing) {
	    editButtonRef.current.focus();
	  }
	}, [wasEditing, isEditing]);

  	
  	return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;


}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}