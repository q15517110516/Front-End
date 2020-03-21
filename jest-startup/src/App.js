// export default{
//   sum(a, b){
//     return a + b;
//   }
// }

export default{
  getIntArray(num){
    if(!Number.isInteger(num)){
      throw Error(' "getIntArray" accepts only integer type parameters ');
    }

    let result = [];
    for(let i= 0, len = num; i < len; i++){
      result.push(i);
    }

    return result;
  }
}