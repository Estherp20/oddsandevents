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
const oddsBank = document.querySelector("#odds");
const oddsOutput = oddsBank.querySelector("output");
console.log(oddsOutput);
const evensBank = document.querySelector("#evens");
const evensOutput = evensBank.querySelector("output");
console.log(evensOutput); 


form.addEventListener("submit", (event) => {
    event.preventDefault(); //keeps page from refreshimg
    if(!inputNumber.value){ // non-numeric number
        return;
    } else{
        state.numberBank.push(inputNumber.value) 
    }
    inputNumber.value = ""; // Clear input after adding

    console.log(state.numberBank) 
   update();
});

// sort odd and even by sort 1

// added query for sort 1
const sortNumber = document.querySelector("#sortOne");

// event listener for when botton is clicked will run the asort funtion 
sortNumber.addEventListener('click', (event) => {
    event.preventDefault();
if(state.numberBank.lenght == 0){
    return
}
// sort Odds and Evens
 const num = state.numberBank.shift();
     if (num % 2 === 0) {
      state.Evens.push(num);
    } else {
      state.Odds.push(num);
    }
    console.log(state);
    update();
})

// update html
function update (){
    numberBankOutput.textContent = `${state.numberBank}`;
    oddsOutput.textContent = `${state.Odds}`;
    evensOutput.textContent = `${state.Evens}`;
   
}


console.log(numberBankOutput);

// sort all
const sortNumberAll = document.querySelector("#sortAll");
sortNumberAll.addEventListener('click', (event) => {
    event.preventDefault();
if(state.numberBank.length == 0){
    return;
}
 while(state.numberBank.length > 0){
    const num = state.numberBank.shift();
 
// sort odds and evens

    if (num % 2 == 0) {
      state.Evens.push(num);
    } else {
      state.Odds.push(num);
    }
}
    update();
  })

// write function outside with proper syntax
// dom js 



