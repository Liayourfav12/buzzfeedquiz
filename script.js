let input1 = document.querySelector(".questionOne");
let input2 = document.querySelector(".questionTwo");
let button = document.querySelector("button");
let pic = document.querySelector(".rossImg");
let heading = document.querySelector(".title")
let questions = document.querySelector(".questions")
let result = document.querySelector(".result")



button.onclick = function(){
 
  console.log("button check");
  let answer1 = input1.value;
console.log(answer1);
let answer2 = input2.value;
console.log(answer2);
  
if(answer1 ==="ew gross" && answer2=== "shopping duh"){
      questions.style.display = "none";
 pic.src= "images/emma.webp";
result.style.display= "block";
result.innerHTML= "You are: Emma!";

  

}
  
  if(answer1 ==="yes" && answer2=== "shopping duh"){
    questions.style.display = "none"
 pic.src=
   "images/zuri.webp";
  result.innerHTML= "You are: Zuri!";
  result.style.display= "block";
  }
  
  if(answer1 ==="ew gross" && answer2=== "study"){
    questions.style.display = "none"
 pic.src=
   "images/luke.webp";
  result.innerHTML= "You are: Luke!";
  result.style.display= "block";
  
  
  }
  
  if(answer1 ==="yes" && answer2=== "study"){
 pic.src=
   "https://kayfil.wordpress.com/wp-content/uploads/2013/04/jessie-s01e03-used-karma.png"
  heading.innerHTML= "You are: Ravi!";
  button.style.display = "none";
  input1.style.display = "none";
  input2.style.display = "none";
  questions.style.display = "none"
    
  }
 
  
};