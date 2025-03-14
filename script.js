const result = document.querySelector(".result");
const birth = document.querySelector(".birth");
const year = document.querySelector(".year");
const submit = document.querySelector(".submit");

function validateAge(year,birth){
    return year-birth;
}
// console.log(validateAge(2025,2004));

submit.addEventListener("click",() =>{
    const birthYear = parseInt(birth.value);
    const currentYear = parseInt(year.value);

    if(isNaN(birthYear) || isNaN(currentYear)){
        result.textContent = "Please Enter a valid Numbers"
    }else{
        const age = validateAge(currentYear,birthYear);
        result.textContent = `Your Current age is ${age} years.`;
        result.style.backgroundColor = "violet";
        result.style.color = "black";
        result.style.fontWeight = "bold";
        result.style.padding = "10px";
        result.style.margin = "15px";
        result.style.borderRadius = "5px";

    }
});
