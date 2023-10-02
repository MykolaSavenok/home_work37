import { removeElementFromArray } from './removeFromArray.js'

describe('removeElementFromArray', () => {
   test('видаляє елемент з масиву', () => {
      const array = [1, 2, 3, 4, 5, 3, 6, 7];
      removeElementFromArray(array, 5);

      expect(array).toEqual([1, 2, 3, 4, 3, 6, 7]);
   });

   test('видалення неіснуючого елемента не змінює масив', () => {
      const array = [1, 2, 3, 4, 5, 3, 6, 7];

      removeElementFromArray(array, 8);

      expect(array).toEqual([1, 2, 3, 4, 5, 3, 6, 7]);
   });

   test('видаляє всі входження для елемента, що повторюється', () => {
      const array = [1, 2, 3, 4, 5, 3, 6, 7, 5];

      removeElementFromArray(array, 3, 5);

      const expectedArray = [1, 2, 4, 6, 7];

      expect(array).toEqual(expectedArray);
   });
});