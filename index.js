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
    if
  }
}