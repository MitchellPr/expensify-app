import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set up default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'})

  expect(state).toEqual([])
})

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const expense = {
    type: 'ADD_EXPENSE',
    id: 123,
    description: 'abc123',
    note: '',
    createdAt: 2000,
    amount: 29500
  }

  const action = {
   type: 'ADD_EXPENSE',
   expense
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

test('Should edit an expense', () => {
  const amount = 122000
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[1].amount).toBe(amount)
})

test('Should not edit an expense if id not found', () => {
  const amount = 122000
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

// test('Should set expenses', () => {
//   const action = {
//     type: 'SET_EXPENSES',
//     expenses: [expenses[1]]
//   }

//   const state = expensesReducer(expenses, action)
//   expect(state).toEqual([expenses[1]])
// })