import React from 'react';
import MyTodolistApp from '../../components/MyTodolistApp';



export default function Dashboard(props) {
  return(
    <div>
      <MyTodolistApp tasks={props.tasks} />
    </div>
  );
}