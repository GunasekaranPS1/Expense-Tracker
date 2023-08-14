import React, { useContext } from 'react';
import { userContext } from '../Context/MyContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function TransactionHistory() {
  const { transactions, deleteTransaction, setEditMode, setInput, updateTransaction } = useContext(userContext);

  const handleEdit = (transaction) => {
    setEditMode(true);
    setInput(transaction);
    updateTransaction(transaction);
  };

  return (
    <div className='history'>
    <h1>EXPENSE TRACKER</h1>
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <h2>Transaction History</h2>
          {transactions.map((item, index) => (
            <Card key={index} style={{ backgroundColor: item.price > 0 ? 'green' : 'red' }} className='card-history'>
              <Card.Body>
                <h4>{item.text} {item.price} {item.day}</h4>
                <Button id="one" variant="link" onClick={() => handleEdit(item)}>
                  <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button id="one" variant="link" onClick={() => deleteTransaction(item)}>
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}

export default TransactionHistory;
