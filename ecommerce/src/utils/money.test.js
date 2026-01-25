import { it, expect, describe } from 'vitest'
import { formatMoney } from './money'

describe('formatMoney', () => {
    it('formats 2000 cents into $20.00', () => {
        expect(formatMoney(2000)).toBe('$20.00')
    })

    it('formats 0 cents into $0.00', () => {
        expect(formatMoney(0)).toBe('$0.00')
    })
})