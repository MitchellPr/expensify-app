import React from 'react'
import { shallow } from 'enzyme'
import { expenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<expenseList expenses={expenses} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseList with empty message', () => {
  const wrapper = shallow(<expenseList expenses={[]} />)
  expect(wrapper).toMatchSnapshot()
})