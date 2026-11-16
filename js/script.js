let isHot = false;

function changeTheme() {
  if (isHot == false) {
    document.body.style.backgroundColor = "orangered";
    document.body.style.color = "yellow";
    document.body.style.fontFamily = "Comic Sans MS";
    document.getElementById("title").innerHTML = "Hot Mode";
    isHot = true;
  } else {
    document.body.style.backgroundColor = "lightblue";
    document.body.style.color = "navy";
    document.body.style.fontFamily = "Georgia";
    document.getElementById("title").innerHTML = "Calm Mode";
    isHot = false;
  }
}