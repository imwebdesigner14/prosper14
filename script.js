



let bnt = document.querySelector(".enq");




let f = document.querySelector("form");


bnt.addEventListener("click", function (){

   f.style.transform = "scale(1)"
});







let cl = document.querySelector(".close");
cl.addEventListener("click" ,function(){
    f.style.transform = "scale(0)"

    a.value ="";
    b.value ="";
    c.value ="";
    d.value ="";
    
});







let sub = document.querySelectorAll("input")[3];

let a = document.querySelectorAll("input")[0];
let b = document.querySelectorAll("input")[1];
let c = document.querySelectorAll("input")[2];

let d = document.querySelectorAll("textarea");

sub.addEventListener("click" , function xyz(){
    let naam = a.value;
    let mail = b.value;
    let phn = c.value;
    let msg = d.value;

    if(naam ==""){
        alert("Please fill Your Name ")
    }

    else if(mail ==""){
        alert("Please Fill Your Email")
    }
    else if(phn ==""){
        alert("Please Fill Your Phone No")
    }
    else if(msg ==""){
        alert("Please Fill Your Massage")
    }

    else{
        console.log(naam , mail , phn , msg)
    }
});



let cursor =  document.querySelector(".cur");

    document.addEventListener("mousemove", function jkl(e){

      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";

    });






var i = 0;
var image = [ ];


image[0]="1.jpg";
image[1]="2.jpg";
image[2]="3.jpg";

function slide(){
    document.sl.src =image[i];
    if(i < image.lengtht - 1){
        i++;
    }
    else{
        i = 0;
    }
    setInterval(slide,6000);


}
window.onload = slide();




/* products javascript starts from here */

$("button").eq(0).click(function(){
    $(".inner-box").css({
        display : "block"
    })

});


$("button").eq(1).click(function(){
    $(".inner-box").not(".non-woven").css({
        display : "none"
    });
    $(".inner-box").fillter(".non-woven").css({
        display : "block"
    });
});

$("button").eq(1).click(function(){
    $(".inner-box").not(".paperbeg").css({
        display : "none"
    });
    $(".inner-box").fillter(".paperbeg").css({
        display : "block"
    });
});


$("button").eq(1).click(function(){
    $(".inner-box").not(".babydaiper").css({
        display : "none"
    });
    $(".inner-box").fillter(".babydaiper").css({
        display : "block"
    });
});