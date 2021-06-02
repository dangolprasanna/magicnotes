console.log("This is magic notes");

let element = document.createElement("p");
element.setAttribute("class", "val");
element.setAttribute("id", "val");
element.setAttribute("style", "font-size: 30px; font-weight:100 ")
element.innerText = "write here...";
let txtchange = document.querySelector(".inputs"); //box
txtchange.appendChild(element);


element.addEventListener("click", function() {
        document.querySelector(".nheading").style.textDecoration = "underline dotted";
        document.querySelector(".nheading").style.color = "#000000ee";
        txtchange.style.transform = "rotate(0deg)";
        let noTextAreas = document.getElementsByClassName("textarea").length;
        if (noTextAreas == 0) {
            let html = element.innerHTML;
            element.innerHTML = `<textarea class= "textarea form-control" id="textarea" rows="3">${html}</textarea>`;
        }

    })
    //note count
var ncount = 1;
let addbtn = document.querySelector(".add_note");
let number = document.querySelector(".number");
addbtn.addEventListener("click", function() {
    ncount += 1;
    number.innerText = ncount;
})