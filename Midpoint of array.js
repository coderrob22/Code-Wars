function median(array) {
    array = array.sort((a,b) =>a-b)
    let midpoint = (Math.floor(array.length/2))
    if (array.length %2 ==1){
      return array[midpoint]
    }else{
      return (array[midpoint -1] + array[midpoint])/2
    }
    
  }