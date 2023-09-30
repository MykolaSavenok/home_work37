export function pow(num, degree) {
   if (!Number.isInteger(num)) {
      throw new Error("Entered value not a number!");
   }

   if (!Number.isInteger(degree) || Number.isNaN(degree)) {
      throw new Error(
         "Entered degree is not a number/not integer/is not a number"
      );
   }

   if (degree < 0) {
      return 1 / pow(num, -degree);
   }

   if (num === 0) {
      return 0;
   }

   if (degree === 0) {
      return 1;
   }

   if (num === 1 || degree === 1) {
      return num;
   }

   return num * pow(num, degree - 1);
}
