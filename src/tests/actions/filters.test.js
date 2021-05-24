import moment from 'moment'
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters'
// SET_START_DATE
test('Should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})
// SET_END_DATE
test('Should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})
// SET_TEXT_FILTER
test('Should generate set text filter action object with text value', () => {
  const text = 'abc123'
  
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})
// SET_TEXT_FILTER - default
test('Should generate set text filter default action object', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})
// SORT_BY_DATE
test('Should generate sort by date filter object', () => {
  const action = sortByDate({
    type: 'SORT_BY_Date',

  })
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})
// SORT_BY_AMOUNT
test('Should generate sort by amount filter object', () => {
  const action = sortByAmount({
    type: 'SORT_BY_AMOUNT',

  })
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})