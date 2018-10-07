class SmartCalculator {
  constructor(initialValue) {
  this.str=String(initialValue); 
  }

  add(number) {
    this.str+="+"+String(number);
    return new SmartCalculator(this.str);
    }
    
    subtract(number) {
    this.str+=("-"+String(number));
    return new SmartCalculator(this.str);
    }
    
    multiply(number) {
    this.str+=("*"+String(number));
    return new SmartCalculator(this.str);
    }
    
    devide(number) {
    this.str+=("/"+String(number));
    return new SmartCalculator(this.str);
    }
    
    
    pow(number) {
    let last= String(this.str.match(/\d+$/ig));
    this.str=this.str.substring(0,this.str.length-last.length)+String(Math.pow(Number(last),number));
    return new SmartCalculator(this.str);
    }
    
    toString(){
    return eval(this.str);
    }
    
}
    
    module.exports = SmartCalculator;
    


