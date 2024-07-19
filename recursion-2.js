
function fibsRec(num){
  let fibArr = [];

  if(num <= 0){
    return [];
  }else if(num == 1){
    return [0];
  }else if (num == 2){
    return [0, 1];
  }

  fibArr = fibsRec(num - 1);
  fibArr.push(fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3]);

  return fibArr;

}


function mergeSort(arr){

  if(arr.length == 1){
    return arr;
  }

  let newArr = [];
  let leftArr = arr.toSpliced(Math.round(arr.length/2), arr.length - Math.round(arr.length/2));
  let rightArr = arr.toSpliced(0, Math.round(arr.length/2));
  

  leftArr = mergeSort(leftArr);
  rightArr = mergeSort(rightArr);

  console.log(leftArr, rightArr);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftArr.length && j < rightArr.length){
    if(leftArr[i] < rightArr[j]){
      newArr[k++] = leftArr[i++];
    } else {
      newArr[k++] = rightArr[j++];
    }
  }
  for (;i < leftArr.length; i++){
    newArr[k++] = leftArr[i];
  }
  for(;j < rightArr.length; j++){
    newArr[k++] = rightArr[j];
  }

  console.log("newArr = ", newArr);

  return newArr;
}

