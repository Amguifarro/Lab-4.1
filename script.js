// Task #1
function formatFullName(firstName,lastName){
  

  if (!firstName || !lastName) {
    return "Invalid name input.";
}


firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  return lastName + ", " + firstName;
}

console.log(formatFullName("amara", "guifarro"));

// Task #2

function calculateTotalCost(price, quantity, taxRate) {

  totalCost = (price * quantity) * (1 + taxRate);

  return totalCost;

}

  console.log(calculateTotalCost( 15, 4, 0.08));

  // Task #3
  function checkEligibility(age, isEmployed) {

    if (age > 18 && isEmployed) {

      return "Eligible";
  
    }

    else if(age > 18 && isEmployed == false) {

      return "Conditionally Eligible";
    }

    else {
      return ("Not eligible")
    }

  }

  console.log(checkEligibility(20, true));
  console.log(checkEligibility(20, false));
  console.log(checkEligibility(17, true));
  console.log(checkEligibility(18, true));

   

  





