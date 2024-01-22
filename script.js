
const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');


let numberOfPeople = Number(numberOfPeopleDiv.innerText)


const calculateBill = () => {

    const bill = Number(billInput.value)
    // console.log(bill)
    const tipPercentage = Number(tipInput.value) /100
    // console.log(tipPercentage)
    // get the total tip amount
    const tipAmount = bill * tipPercentage
    const total = tipAmount + bill
    // console.log({total})

    const perPersonTotal = total / numberOfPeople
    // console.log(perPersonTotal)

    perPersonTotalDiv.innerText = `${perPersonTotal.toLocaleString('en-US')}Rs`


  
  }
  
  const increasePeople = () => {
    numberOfPeople += 1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()

  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {

    if(numberOfPeople <=1)
    {
        return
    }
  
    numberOfPeople -= 1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
  }