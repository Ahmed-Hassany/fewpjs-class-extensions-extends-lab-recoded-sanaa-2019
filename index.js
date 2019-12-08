// Your code here

class Polygon {
  constructor(sidesArr){
    this.sidesArr = sidesArr
    
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