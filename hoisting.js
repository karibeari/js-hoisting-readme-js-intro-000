function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  var lyric = "maybe";
  return lyric;
}



function crazy() {
  thisIsCrazy();
  function thisIsCrazy(){
    console.log("hey!!!")
  }
}

var name = "Kristin";
function sayMyName() {
  function sayMy() {
    console.log(name);
  }
  sayMy(name);
}
