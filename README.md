# invoice-number
Node.js module to generate invoice number sequentially 

## Installation

```sh
$ npm install invoice-number
```
## Usage

```typescript
import { InvoiceNumber } from 'invoice-number'

InvoiceNumber.next('2017/08/ABC001')
// => 2017/08/ABC002

InvoiceNumber.next('xjsiwe234njshd6')
// => XJSIWE234NJSHD7

InvoiceNumber.next('899ZZZ9')
// => 900AAA0

```
