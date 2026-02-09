let input1 = document.querySelector(".questionOne");
let input2 = document.querySelector(".questionTwo");
let button = document.querySelector("button");
let pic = document.querySelector(".rossImg");
let heading = document.querySelector(".title")
let questions = document.querySelector(".questions")



button.onclick = function(){
 
  console.log("button check");
  let answer1 = input1.value;
console.log(answer1);
let answer2 = input2.value;
console.log(answer2);
  
if(answer1 ==="ew gross" && answer2=== "shopping duh"){
      questions.style.display = "none";
 pic.src= "https://uploads.wornontv.net/2014/09/emmas-grey-floral-front-sweatshirt.jpg"
 heading.innerHTML= "You are: Emma!";
  
  

}
  
  if(answer1 ==="yes" && answer2=== "shopping duh"){
 pic.src=
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7tVS272PfKTvX5dx-EWS9DscR5Uyid1uGg&s"
  heading.innerHTML= "You are: Zuri!";
  button.style.display = "none";
  input1.style.display = "none";
  input2.style.display = "none";
  questions.style.display = "none"
  
  }
  
  if(answer1 ==="ew gross" && answer2=== "study"){
 pic.src=
   "https://i.pinimg.com/474x/be/06/59/be06597e33229c9c39f207f8298f7817.jpg"
  heading.innerHTML= "You are: Luke!";
  button.style.display = "none";
  input1.style.display = "none";
  input2.style.display = "none";
  questions.style.display = "none"
  
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