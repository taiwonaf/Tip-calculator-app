const people = document.getElementById("people");
const bill = document.getElementById("bill");
const tipPerPerson = document.getElementById("tip-figure");
const totalPerPerson = document.getElementById("total-figure");
const tips = document.getElementById("tips");

bill.addEventListener("keyup", () => {
    tips.addEventListener("click", (e) => {
        let tipPercent = " ";
        const targetClass = e.target.className;
        if (targetClass === "custom") {
            const custom = document.getElementById("custom");
            custom.addEventListener("keyup", () => {
                tipPercent = custom.value;
                const tipAmount = bill.value * (tipPercent /100) 
                people.addEventListener("keyup", () => {
                    const valuePerPerson = bill.value / people.value;
                    const tipPerPersonCal = tipAmount / people.value; 
                    tipPerPerson.textContent = `$${tipPerPersonCal.toFixed(2)}`
                    totalPerPerson.textContent = `$${valuePerPerson.toFixed(2)}`;
                })
            })
        }
        
        if (targetClass !== "custom") {
            tipPercent = targetClass.slice(0, -1);
            const tipAmount = bill.value * (tipPercent /100) 
            people.addEventListener("keyup", () => {
                const valuePerPerson = bill.value / people.value;
                const tipPerPersonCal = tipAmount / people.value; 
                tipPerPerson.textContent = `$${tipPerPersonCal.toFixed(2)}`
                totalPerPerson.textContent = `$${valuePerPerson.toFixed(2)}`;
            })
            
        }
    })
})


