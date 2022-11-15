import { InvoiceNumber } from '../src/index'

test('next', () => {
  expect(InvoiceNumber.next('2017/08/ABC001')).toBe('2017/08/ABC002')
})

test('next', () => {
  expect(InvoiceNumber.next('xjsiwe234njshd6')).toBe('XJSIWE234NJSHD7')
})

test('next', () => {
  expect(InvoiceNumber.next('899ZZZ9')).toBe('900AAA0')
})
