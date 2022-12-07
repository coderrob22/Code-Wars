function hasSurvived(attackers, defenders){
    let countA = 0
    let countB = 0
    
    for (let i= 0; i<attackers.length || i<defenders.length; i++){
      if (attackers[i] > defenders[i] || defenders[i]== undefined){
        countA++
      }else if(defenders[i] > attackers[i] || attackers[i]== undefined){
        countB++
      }
    }
    if (countA == countB){
      let x = attackers.reduce((acc, curr)=> acc + curr, 0),
          y= defenders.reduce((acc, curr)=> acc + curr, 0)
      if (x > y){
        return false
      }
      return true
    }
    return countB > countA
  }