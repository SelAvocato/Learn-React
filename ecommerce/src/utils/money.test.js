import { it, expect, describe } from 'vitest'
import { formatMoney } from './money'

describe('formatMoney', () => {
    it('formats 2000 cents into $20.00', () => {
        expect(formatMoney(2000)).toBe('$20.00')
    })

})