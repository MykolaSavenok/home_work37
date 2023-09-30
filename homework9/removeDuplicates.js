export const removeAllDuplicates = function (array) {
   for (let i = 0; i < array.length; i++) {
      const currentValue = array[i];
      for (let j = i + 1; j < array.length; j++) {
         if (array[j] === currentValue) {
            array.splice(j, 1); 
            j--; 
         }
      }
   }
   return array;
}