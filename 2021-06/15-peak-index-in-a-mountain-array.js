function peakIndexInMountainArray(arr) {
  // for(let i = 1;i<arr.length-1;i++){
  //     if(arr[i]>arr[i+1]){
  //         return i;
  //     }
  // }
  let left = 0,right = arr.length-1;
  while(left!==right){
      const mid = Math.floor((left+right)/2);
      if(arr[mid-1]<arr[mid]){
          if(arr[mid]>arr[mid+1]){
              return mid;
          }else{
              left = mid;
          }
      }else{
          right = mid;
      }
  }

  return left;
};

console.log(peakIndexInMountainArray([3,5,3,2,0]))