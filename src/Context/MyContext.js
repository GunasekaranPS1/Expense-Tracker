import React, { createContext, useState } from 'react';

export const userContext = createContext();

const MyContext = ({ children }) => {
  const [input, setInput] = useState({ text: '', price: '', day: '' });
  const [transactions, setTransactions] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (input.text && input.price && input.day) {
      const newTransaction = {
        ...input,
        id: Date.now(),
      };
      setTransactions([...transactions, newTransaction]);
      setInput({ text: '', price: '', day: '' });
    }
  };
  
  const updateTransaction = (updatedTransaction) => {
    const updatedTransactions = transactions.map((transaction) => {
      if (transaction.id === updatedTransaction.id) {
        return updatedTransaction;
      }
      return transaction;
    });
    setTransactions(updatedTransactions);
  };

  const deleteTransaction = (deletedTransaction) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== deletedTransaction.id
    );
    setTransactions(updatedTransactions);
  };

  const value = {
    input,
    setInput,
    handleInput,
    transactions,
    setTransactions,
    handleSubmit,
    editMode,
    setEditMode,
    updateTransaction,
    deleteTransaction,
  };

  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  );
};

export default MyContext;
