import { addExpense, editExpense, removeExpense } from "../../actions/expenses"

test('Should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({ 
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })

})

test('Should set up edit expense action object', () => {
  const action = editExpense('abc123', { note: 'New note value' })
 
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: {
      note: 'New note value'
    }
  })
})

test('Should set up add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 10000,
    note: 'This was last months rent'
  }

  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should set up the add expense action object with default values', () => {
  const action = addExpense()

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      id: expect.any(String),
      note : '',
      amount : 0,
      createdAt : 0
    }
  })
  
})