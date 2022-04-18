const  myFunction= (imgs)=> {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}
const storeClosed = ()=> {
    if (new Date().getDay() == 0) {
        document.getElementById("storeinfo").innerHTML=("We are closed today");
    } else {
        document.getElementById("storeinfo").innerHTML = ("We open from 7:00 AM to 8:00 PM");
    }
}

