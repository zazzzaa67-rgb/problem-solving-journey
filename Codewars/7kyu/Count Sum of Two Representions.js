function countSumOfTwoRepresentations(n, l, r) {
  // coding and coding ..
  let count = 0 
  for(let a = l ; a <= r ; a++){
    let b = n - a;
    if(b >= a && b<= r ){
        count++
    }
  }
  return count
}
console.log(countSumOfTwoRepresentations(10, 5, 6))