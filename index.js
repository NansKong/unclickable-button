function yesFunc(){
    $("h1").addClass("new-h1").text("YESS!!!! Finally...😊")
    $(".cute-img").attr("src","./yay.gif")
    $("button").remove("button")
    $("button").append("")
}



let noBut = document.querySelector("button.no-but");


const wrapper = document.getElementById("box");
const wrapperRect = wrapper.getBoundingClientRect();
const noButrect = noBut.getBoundingClientRect();


noBut.addEventListener("mouseover", () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noButrect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noButrect.height)) + 1;

    noBut.style.left = i + "px";
    noBut.style.top = j + "px";
});


// noBut.mouseover(function(){
//     const i = Math.floor(Math.random() * (wrapperRect.width - noButrect.width)) + 1;
//     const j = Math.floor(Math.random() * (wrapperRect.height - noButrect.height)) + 1;

//     noBut.css({top:j+"px", left:i+"px"})
// })


// $("button.no-but").hover( function(){
//     const i = Math.floor(Math.random() * (wrapperRect.width - noButrect.width)) + 1;
//     const j = Math.floor(Math.random() * (wrapperRect.height - noButrect.height)) + 1;


//     $("button.no-but").css({top:j+"px", left:i+"px"})
// });