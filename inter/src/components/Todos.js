import React from 'react';
import TodoLists from './TodoLists';
import CreateModalButton from './common/CreateModalButton';

function Todos() {
  return (
    <div className='Todos'>
      <CreateModalButton buttonText='Create Todo' />
      <TodoLists />
    </div>
  );
}

export default Todos;
