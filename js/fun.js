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

function nuevoObjeto(amount, concept, date, type_op) {
    this.amount = amount,
    this.concept= concept,
    this.daymonth = date,
    this.type_op = type_op
};
let cuna = [];
confirmID.addEventListener("click", () => {
    const amount= document.getElementById("amountFR").value;
    const concept= document.getElementById("concept").value;
    const date= document.getElementById("current_date").innerHTML = Date();
    const type_op = document.getElementById("tittleCasper").textContent;
    // let newArray = new nuevoObjeto (amount, concept,date, type_op)
    // cuna.push(newArray);
    // console.log(cuna[0])
    let management = { amount:amount, concept:concept, daymonth:date, type_op:type_op};
    let managementJson = JSON.stringify(management);
    
    console.log(managementJson);
    fetch('http://localhost:3000/entry' , {
        method: 'Post',
        body: managementJson       
    });
    
    exitFunction();
    
})
