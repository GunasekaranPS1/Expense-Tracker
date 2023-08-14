import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { userContext } from '../Context/MyContext';

function NewTransaction() {
  const { input, setInput, handleSubmit, editMode, setEditMode, updateTransaction, handleInput } = useContext(userContext);

  const handleEdit = () => {
    updateTransaction(input);
    setEditMode(false);
    setInput({ text: '', price: '', day: '' });
  };

  return (
    <div className='forms'>
      <h3>{editMode ? 'Edit Transaction' : 'New Transaction'}</h3>
      <Form.Control type="text" placeholder="Enter Item" name='text' value={input.text} onChange={handleInput} />
      <br />
      <Form.Control type="text" placeholder="Enter Price" name='price' value={input.price} onChange={handleInput} />
      <br />
      <Form.Control type="text" placeholder="Enter Day" name='day' value={input.day} onChange={handleInput} />
      <br />
      {
        editMode ? (
          <Button className="btns" variant="outline-primary" onClick={handleEdit}>Edit Transaction</Button>
        ) : (
          <Button className="btns" variant="outline-success" onClick={handleSubmit}>Add Transaction</Button>
        )
      }
    </div>
  );
}

export default NewTransaction;
