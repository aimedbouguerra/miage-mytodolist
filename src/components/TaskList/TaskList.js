import React, { useState } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import CardList from './CardList';
import { nanoid } from "nanoid";
import FormList from "./FormList";

export default function TaskList(props) {
  const [lists, setLists] = useState(props.lists);

  function addList(title,bg,srcimg,description) {
    const newList = { id: "list-" + nanoid(), title: title, bg:bg, textcolor:'white', srcimg:srcimg, description:description };
    setLists([...lists, newList]);
  }

  const rowsoflist = lists.reduce(function (rows, key, index) { 
    return (index % 4 === 0 ? rows.push([key]) 
      : rows[rows.length-1].push(key)) && rows;
  }, []);

  const listoflist = rowsoflist
    .map((row, index) => ( 
      <CardDeck key={index}>
      { row.map(list => (
        <CardList 
          key={list.id}
          bg={list.bg}
          textcolor={list.textcolor===null?'white':''}
          srcimg={list.srcimg}
          title={list.title}
          description={list.description}
          listid={list.id}
        />
      ))}
      </CardDeck>
  ));

  

  return(
    <div class="todoapp stack-large">
      <h1>Mes listes</h1>
      <FormList addList={addList} />
        {listoflist}      
    </div>
  );
}