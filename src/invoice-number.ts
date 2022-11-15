export class InvoiceNumber {
  static next(invoiceNumber: string): string {
    return this._next(invoiceNumber)
  }

  private static _next(invoiceNumber: string) {
    if (!invoiceNumber) throw new Error('invoiceNumber cannot be empty')
    const array = invoiceNumber.split(/[_/:\-;\\]+/)
    const lastSegment = array.pop() || ''
    const priorSegment = invoiceNumber.substring(0, invoiceNumber.indexOf(lastSegment)
    )
    const nextNumber = this.alphaNumericIncrementer(lastSegment)
    return priorSegment + nextNumber
  }

  private static alphaNumericIncrementer(str: string) {
    if (str && str.length > 0) {
      let invNum = str.replace(/([^a-z0-9]+)/gi, '')
      invNum = invNum.toUpperCase()
      let index = invNum.length - 1
      while (index >= 0) {
        if (invNum.substring(index, index + 1) === '9') {
          invNum = invNum.substring(0, index) + '0' + invNum.substring(index + 1)
        } else if (invNum.substring(index, index + 1) === 'Z') {
          invNum = invNum.substring(0, index) + 'A' + invNum.substring(index + 1)
        } else {
          const char = String.fromCharCode(invNum.charCodeAt(index) + 1)
          invNum = invNum.substring(0, index) + char + invNum.substring(index + 1)
          index = 0
        }
        index--
      }
      return invNum
    } else {
      throw new Error('str cannot be empty')
    }
  }
}
