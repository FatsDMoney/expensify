import React from 'react';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>Description: {description}</h3>
        </Link>
        <p>Amount: {amount} CreatedAt: {createdAt}</p>
    </div>
);

export default ExpenseListItem;