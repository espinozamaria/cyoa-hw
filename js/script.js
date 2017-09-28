var username, choice1, choice2, choice3, choice4, choice5, total, seoul=0, shanghai=0, taiwan=0, hongkong=0, chengdu=0;
var tot = [seoul, shanghai, taiwan, hongkong, chengdu];

function intro(){
    username = prompt("Lets begin! Please enter the username you'd like to use for this game: ");
  alert(username + "," + "welcome aboard on this adventure! We will be traveling the world, lets see where your choices take you!");
  choice1 = prompt("Let's make our first choice! Select which of the following describes you best: (stylish, modern, environmental-friendly, hipster)");
  if(choice1 == "stylish")
  {
    seoul++;
  }
  else if(choice1 =="modern")
  {
    chengdu++;
    shanghai++;
  }
  else if(choice1 == "environmental-friendly")
  {
    hongkong++;
  }
  else if(choice1 =="hipster")
  {
    taiwan++;
  }
  else{
  choice1 = prompt("Let's try that answer one more time! Please type your choice as it appears: (stylish, modern, environmental-friendly, hipster)");
  if(choice1 == "stylish")
  {
    seoul++;
  }
  else if(choice1 =="modern")
  {
    chengdu++;
    shanghai++;
  }
  else if(choice1 == "environmental-friendly")
  {
    hongkong++;
  }
  else if(choice1 =="hipster")
  {
    taiwan++;
  }
  else{
    alert("Oops, looks like something's not right! Why not start over?");
  }
  }
alert("Whoa, that was a tough choice, was it not!? Let's try an easier question!");
choice2 = prompt("Out of the following dates, which would you enjoy the most: amusement park, fake market, visit pandas, Folk Village ?");
if(choice2 == "amusement park")
{
  taiwan++;
  shanghai++;
  hongkong++;
  seoul++;
}
else if(choice2=="fake market")
{
  shanghai++;
}
else if(choice2=="Folk Village" || choice2=="folk village")
{
  seoul++;
}
else if(choice2=="visit pandas")
{
  chengdu++;
}
else
{
  alert("Maybe you mistyped an answer, please return to the main button!");
}

choice3 = prompt("Imagine you can only be at this city for a single day, what style of food would you want to eat: Spicy, Sweet, or just Anything(lots to choose from) ?");
if(choice3 =="Spicy" || choice3=="spicy")
{
  chengdu++;
  seoul++;
}
else if(choice3=="Sweet"||choice3=="sweet")
{
  shanghai++;
}
else if(choice3=="Anything"|| choice3=="anything" || choice3=="just Anything(lots to choose from)"|| choice3=="Anything(lots to choose from)")
{
  taiwan++;
  hongkong++;
}
else{
  alert("Answer typed incorrectly, try again from the beginning!");
}

choice4 = prompt("Okay, " + username + " if you could speak any language of these listed, which would it be: Mandarin Chinese, Korean, Cantonese, or Shanghainese?");

if(choice4=="Mandarin Chinese"|| choice4=="mandarin"|| choice4=="mandarin chinese")
{
  shanghai++;
  taiwan++;
  chengdu++;
}
else if(choice4=="Korean"||choice4=="korean")
{
  seoul++;
}
else if(choice4=="Cantonese"||choice4=="cantonese")
{
  hongkong++;
}
else if(choice4=="Shanghainese"||choice4=="shanghainese")
{
  shanghai++;
}
choice5 = prompt("Now for the last question, from Seoul, Korea to Shanghai or Chengdu in China, or the beautiful peninsula of Hong Kong, or Taiwan, which would you be interested in visiting? Type the place as following: Seoul, Shanghai, Chengdu, Hong Kong, Taiwan");

if(choice5 =="Seoul"|| choice5=="seoul")
{
  seoul++;
}
else if(choice5=="Shanghai"||choice5=="shanghai")
{
  shanghai++;
}
else if(choice5=="Chengdu"||choice5=="chengdu")
{
  chengdu++;
}
else if(choice5=="Hong Kong"|| choice5=="hong kong")
{
  hongkong++;
}
console.log(seoul);
console.log(chengdu);
console.log(hongkong);
console.log(shanghai);
console.log(taiwan);

alert("You've played this fun game, so how about we see your results now? ");
// var max = tot.reduce(function(a, b){
//   return Math.max(a, b);
//   total=Math.max(a,b);
//   console.log(total);
// });
total = Math.max(seoul, chengdu, hongkong, shanghai, taiwan);
console.log(total);
if(total == seoul)
{
  alert("You should go to Seoul! The city of lights and Korean pop idols! You will enjoy delicious spicy food such as Kimchi and Ramen! The night view is stunning, and its night markets are among the best in the world!");
}




}
