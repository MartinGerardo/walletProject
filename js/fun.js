const entry = document.getElementById("entry");
const out= document.getElementById("out");

let tittleCasper= document.getElementById("tittleCasper");
let casper = document.getElementById("casper");
let exit = document.getElementById("exit");

const confirmID = document.getElementById("confirmID");

const navHistory = document.getElementById("navHistory");
const ulHistory = document.getElementById("ulHistory");

entry.addEventListener("click", () =>{
console.log("ENTRY");
    casper.style.display = "block";
    casper.setAttribute("class", "entry")
    tittleCasper.textContent= "Ingreso";

});
out.addEventListener("click", () =>{
    console.log("OUT");
    casper.style.display = "block"; 
    casper.setAttribute("class","out");
    tittleCasper.textContent= "Egreso";
});

function exitFunction() {
    casper.style.display = "none";
    tittleCasper.textContent= "";
    casper.removeAttribute("class","entry");
    casper.removeAttribute("class","out");
    document.getElementById("amountFR").value= "";
    document.getElementById("concept").value= "";
}
exit.addEventListener("click", () =>{
        console.log("Bye");
        exitFunction()
    });

confirmID.addEventListener("click", () => {
    
    let amount= document.getElementById("amountFR").value;
    let concept= document.getElementById("concept").value;
    let date= document.getElementById("current_date").innerHTML = Date();
    let management = { amount:amount, concept:concept, date:date}
    let managementJson = JSON.stringify(management);
     exitFunction();
    
})
