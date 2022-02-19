const func = require("./someFunc");


test('First letter is capitalized',()=>{
  expect(func.capitalize('sanja')).toEqual('Sanja');
});
test('String is reversed',()=>{
  expect(func.reverse("sanja")).toEqual("ajnas");
})
test("Calculator is working fine", () => {
  expect(func.calculator.add(5,4)).toEqual(9);
  expect(func.calculator.subtract(5, 4)).toEqual(1);
  expect(func.calculator.multiply(5, 4)).toEqual(20);
  expect(func.calculator.divide(10, 3)).toBeCloseTo(3.33);
});
test("String is shifted", () => {
  expect(func.caesarCipher("Sanja",-3)).toEqual("Pxkgx");
});
test("Array info is true", () => {
  expect(func.analyzeArray([2,5,6,7])).toEqual({average:5,min:2,max:7,length:4});
});