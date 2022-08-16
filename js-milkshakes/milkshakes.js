function upDate(milkshakePic){
    document.getElementById("image").style.backgroundImage="url('" + milkshakePic.src + "')";
    document.getElementById("image").innerHTML="" + milkshakePic.alt + "";
    document.getElementById("image").style.color="black";
}
   
function unDo(){
    document.getElementById("image").style.backgroundImage="url('')";
    document.getElementById("image").innerHTML="hover over an image below to display here";
    document.getElementById("image").style.color="#e7738a";
}