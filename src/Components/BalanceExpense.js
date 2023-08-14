import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { userContext } from '../Context/MyContext';

function BalanceExpense() {
    const {transactions}=useContext(userContext)

    const income=transactions.map(item=>parseInt(item.price)).filter(item=>item>0).reduce((prev,next)=>prev+next,0).toFixed(2)
    const expense=transactions.map(item=>parseInt(item.price)).filter(item=>item<0).reduce((prev,next)=>prev+next,0).toFixed(2)
    const balance=transactions.map(item=>parseInt(item.price)).reduce((prev,next)=>prev+next,0).toFixed(2)

  return (
        <>
            <h2>Balance: ₹ {balance}</h2>
            <div className='cards'>
                <Card
                    bg="light"
                    text="success"
                    style={{ width: '18rem' }}
                    className="card">
                    <Card.Body>
                        <Card.Title>Income</Card.Title>
                        <Card.Text>₹ {income}</Card.Text>
                    </Card.Body>
                </Card>
                <Card
                    bg="light"
                    text="danger"
                    style={{ width: '18rem' }}
                    className="card">
                    <Card.Body>
                        <Card.Title>Expense</Card.Title>
                        <Card.Text>₹ {expense}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default BalanceExpense