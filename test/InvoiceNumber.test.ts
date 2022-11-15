import { InvoiceNumber } from '../src/index'

test('next', () => {
  expect(InvoiceNumber.next('A9')).toBe('B0')
})
