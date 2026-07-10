 function openImage(img){
document.getElementById("lightbox").style.display="flex";
document.getElementById("lightbox-img").src=img.src;
}

function closeImage(){
document.getElementById("lightbox").style.display="none";
}

function filterImages(category){

let images=document.querySelectorAll(".gallery img");

images.forEach(function(img){

if(category=="all"){
img.style.display="block";
}
else if(img.classList.contains(category)){
img.style.display="block";
}
else{
img.style.display="none";
}

});

}
