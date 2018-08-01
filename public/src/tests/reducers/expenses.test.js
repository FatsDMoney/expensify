import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Electric Bill',
        note: '',
        amount: 13200,
        createdAt: 20000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense by id', () => {
    const expense = {
        ...expenses[0],
        note: 'This has been edited'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            ...expense
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expense,expenses[1],expenses[2]]);
});

test('should not edit an expense if id not found', () => {
    const expense = {
        ...expenses[0],
        note: 'This has been edited'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '15',
        updates: {
            ...expense
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});