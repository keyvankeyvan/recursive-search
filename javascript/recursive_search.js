function recursiveSearch(arr, target) {
  if(arr[0] === target){
    return true
  } else if (arr[0] == undefined){
    return false
  } else {
    arr.splice(0,1)
    return(recursiveSearch(arr,target))
  }

}

// function iterativeSearch(arr, target) {
//   for (const value of arr) {
//     if (value === target) {
//       return true;
//     }
//   }

//   return false;
// }


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
