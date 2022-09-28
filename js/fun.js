const entry = document.getElementById("entry");
const out= document.getElementById("out");
let tittleCasper= document.getElementById("tittleCasper");
let casper = document.getElementById("casper");
let exit = document.getElementById("exit");

entry.addEventListener("click", () =>{
console.log("ENTRY");
    casper.style.display = "block";
    tittleCasper.textContent= "Ingreso";
});
out.addEventListener("click", () =>{
    console.log("OUT");
    casper.style.display = "block"; 
    tittleCasper.textContent= "Egreso";
});

exit.addEventListener("click", () =>{
    console.log("Bye");
        casper.style.display = "none";
        tittleCasper.textContent= ""; 
    });