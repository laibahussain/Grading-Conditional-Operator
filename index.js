let num = parseInt(prompt("Enter your marks"))
let a = "Grade A";
let b = "Grade B";
let c = "Grade C";
let d = "Grade D";
let e = "Grade E";
let f = "Fail";
let g = "Invalid input";
let h = "Enter number"

// how to show some alert  on empty input in prompt

if(num >=90 && num <=100){
  alert(a)
}
else if(num >= 80 && num <=89){
  alert(b)
}
else if(num >= 70 && num <=79){
  alert(c)
}
else if(num >= 60 && num <=69){
  alert(d)
}
else if(num >= 50 && num <=59){
  alert(e)
}
else if(num > 100){
  alert(g)
}
else if(num < 50){
  alert(f)
}
else{
  alert(h)
}