import axios from 'axios';
import 'babel-polyfill';
// export default{
//   sum(a, b){
//     return a + b;
//   }
// }

// export default{
//   getIntArray(num){
//     if(!Number.isInteger(num)){
//       throw Error(' "getIntArray" accepts only integer type parameters ');
//     }

//     let result = [];
//     for(let i= 0, len = num; i < len; i++){
//       result.push(i);
//     }

//     return result;
//   }
// }

export default{
  fetchUser(){
    return axios.get('http://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(error => console.log(error));
  }
}