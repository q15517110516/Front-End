import App from './App';

// test('sum(2+2) = 4', () => {
//   expect(App.sum(2,2)).toBe(4);
// })

// test(' getIntArray(3) should return 3 as the length of the array ', () => {
//   expect(App.getIntArray(3)).toHaveLength(3);
// });

// test(' getIntArray(3.3) should throw an error' , () => {
//   function getIntArrayWrapFn(){
//     App.getIntArray(3.3);
//   }
//   expect(getIntArrayWrapFn).toThrow(' "getIntArray" accepts only integer type parameters ');
// })

test('fetchUser() could request an object with a name attribute value of Leanne Graham', () => {
  
  // This ensures that in an asynchronous test, an assertion will be executed in the callback function.
  expect.assertions(1);

  return App.fetchUser()
    .then(data => {
      expect(data.name).toBe('Leanne Graham');
    });
})

test('fetchUser() could request an object with a name attribute value of Leanne Graham', async () => {
  expect.assertions(1);
  const data = await App.fetchUser();
  expect(data.name).toBe('Leanne Graham');
})