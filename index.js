// TODO: this file! :)
//Place to hold all the numbers
const state = { 
    numberBank:/*Key*/ [], /*Value*/
    Odds: [],
    Evens: [],
};
//1st get user info from form and put in number bank
const form = document.querySelector("form");
const inputNumber = document.querySelector("#number");
const numberBankSection = document.querySelector("#numberBank");
const numberBankOutput = numberBankSection.querySelector("output");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(!inputNumber.value){
        return;
    } else{
        state.numberBank.push(inputNumber.value) 
    }

    console.log(state.numberBank) 
    //we will be moving this outside function
    numberBankOutput.textContent = `${state.numberBank}`;
});






  
