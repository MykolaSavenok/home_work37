import { pow } from './pow.js'

describe('pow', () => {
   it('кидає помилку на неціле число', () => {
      expect(() => pow(1.5, 2)).toThrowError("Entered value not a number!");
   });

   it('кидає помилку на нецілий ступінь', () => {
      expect(() => pow(2, 1.5)).toThrowError("Entered degree is not a number/not integer/is not a number");
   });

   it('правильно рахує для додатнього ступеня', () => {
      const result = pow(2, 3);
      expect(result).toBe(8);
   });

   it('правильно рахує для ступеня 0', () => {
      const result = pow(3, 0);
      expect(result).toBe(1);
   });

   it('правильно рахує для від\'ємного ступеня', () => {
      const result = pow(2, -2);
      expect(result).toBe(0.25);
   });

   it('правильно рахує для від\'ємної основи', () => {
      const result = pow(-2, 3);
      expect(result).toBe(-8);
   });
});
