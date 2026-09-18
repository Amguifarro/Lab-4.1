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

function calculateTotalCost(price, quantity, taxRate, discount = 0) {

  
    let subtotal = price * quantity;

    subtotal = subtotal - discount;
    
    let totalCost = subtotal * (1 + taxRate);

    return totalCost;
  }




  console.log(calculateTotalCost(20, 4, 0.08));

  console.log(calculateTotalCost(20, 4, 0.08, 5))





