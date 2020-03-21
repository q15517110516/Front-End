import App from './App';

// test('sum(2+2) = 4', () => {
//   expect(App.sum(2,2)).toBe(4);
// });

test(' getIntArray(3) should return 3 as the length of the array ', () => {
  expect(App.getIntArray(3)).toHaveLength(3);
});

test(' getIntArray(3.3) should throw an error' , () => {
  function getIntArrayWrapFn(){
    App.getIntArray(3.3);
  }
  expect(getIntArrayWrapFn).toThrow(' "getIntArray" accepts only integer type parameters ');
});
