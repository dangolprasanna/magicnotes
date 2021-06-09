console.log("This is magic notes");

//Creating an element "Write here..."
let element = document.createElement("p");
element.setAttribute("style", "font-size: 30px; font-weight:100 ")
element.innerText = "write here...";
let inputbox = document.querySelector(".inputs"); //box
inputbox.appendChild(element);

let clip = document.querySelector(".clip");
inputbox.addEventListener("click", function() {
    document.querySelector(".nheading").style.textDecoration = "underline dotted";
    document.querySelector(".nheading").style.color = "#000000ee";
    inputbox.style.transform = "rotate(0deg)";
    clip.style.marginTop = "3.4rem";
    clip.style.marginLeft = "-1rem";
    let noTextAreas = document.getElementsByClassName("textarea").length;
    if (noTextAreas == 0) {
        let html = "";
        element.innerHTML = `<textarea class= "textarea form-control" id="textarea" rows="3" maxlength= "130">${html}</textarea>`;
    }
})



//note count
var ncount = 1;
let addbtn = document.querySelector(".add_note");
let number = document.querySelector(".number");
number.innerText = ncount;


addbtn.addEventListener("click", function(e) {
    showNotes();
    document.getElementById("textarea").value = '';
    ncount += 1;
    number.innerText = ncount;

})

function showNotes() {
    let texts = document.getElementById("textarea").value;
    let prntarea = document.querySelector(".printarea");
    let printer = document.createElement("div");
    printer.setAttribute("class", "printer");
    printer.innerHTML = "Note #" + ncount + "<br>" + texts;
    prntarea.appendChild(printer);

}



// number.innerText = ncount;
// document.querySelector(".note_save").innerText = texts;
// document.querySelector(".noteno").innerText = (ncount - 1);
// document.querySelector(".printer").style.display = "flex";
// // localStorage.setItem("NoteNumber", ncount);