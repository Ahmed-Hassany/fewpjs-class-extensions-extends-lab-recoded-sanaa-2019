// Your code here

class Polygon {
  constructor(sidesArr){
    this.sidesArr = sidesArr
    this.count = this.sidesArr.length
  }
  get countSides(){
    return this.sidesArr.length
  }
  get perimeter(){
    let sum = this.sidesArr.reduce((s,side)=>{
      return s+=side
    },0)
    return sum
  }
  
}

class Triangle  extends Polygon{
  get isValid(){
    let isV = true
    if(this.count!=3)
    isV = false
    else
    for(let i =1;i<this.count;i++)
    {
      if(this.sidesArr[i]!=this.sidesArr[i-1])
      isV = false
    }
    return isV
  }
}

class Square extends Polygon{
  get isValid(){
    let isV = true
    if(this.count!=4)
    isV = false
    else
    for(let i =1;i<this.count;i++)
    {
      if(this.sidesArr[i]!=this.sidesArr[i-1])
      isV = false
    }
    return isV
  }
  get area(){
    return this.sidesArr
  }
}
