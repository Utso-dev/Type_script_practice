type paramsType = number | string | boolean;

const formatValue = (value: paramsType) => {
  if (typeof value === "number") {
    const resulte =  value * 10;
    return resulte;
    } else if (typeof value === "string") {
       return value.toUpperCase();
    }else{
         return !value;
    }
}

console.log(formatValue(5)); // "12.35"
console.log(formatValue("hello")); // "HELLO"
console.log(formatValue(false)); // false  