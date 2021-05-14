// BANK ACCOUNT

// Start by creating the object and the properties. You can leave the functions empty for now if you want.
// You'll find all the information about what properties the object should have in the readme file.

// In the deposit and withdrawal function use this code to show the prompt
// !!! parseFloat(prompt("Put some proper message here"));
// You need to change the message of course. You should also do some research why parseFloat() is used here
// answer by making a comment in the code.
// Be aware of that you need to add some code to this so you can display the actual input.

// In the deposit and withdrawal function you also need to handle som potential errors.
// To handle one of the potential error you can use this piece of code
// !!! isNaN(variableName);
// you need to change the variableName to your actual variable.
// you also need to check some other conditions here and use a logical operator.
// try to say the sentece out loud or think it:
// "A user should not be able to put 0 or negative numbers or empty string or a type that is not a number"
// Do you know what operator you should use?

// In the accountError and accountExit function you can use this to show a message to the user:
// !!! alert("your code here and maybe properties");
// of course you need to put a proper message and you might need to display some of the properties.
/* !!!
// STARTER FUNCTION
  function atm() {
  let choice = parseInt(prompt("Display menu choices here"));
  //prompt user for choice.

  // you can use the variable choice for your switch or if/else statement
  // so choice will hold the value of the user input.
}
*/


//Account 

const account = {

//Property variables
  accountName: ``,
  balance: 100,

//Property functions
  getBalance: function() { 
    if (this.balance > 0) {
      return alert(`Your balance is €${this.balance}`), atm() 
    } else {
      return alert(`Your balance is €${this.balance}. Pay us back soon or we'll take your house!`), atm()
    }
  },
  deposit: function() { 
    depositAmount = parseInt(prompt("How much would you like to deposit?")); 
    if  (isNaN(depositAmount)){
      return this.accountError()
    } else {
      return this.balance = this.balance + depositAmount, alert(`€${depositAmount} has been added to your account.`), atm()
    }
  },
  withdrawal: function() { 
    withdrawalAmount = parseInt(prompt("How much would you like to withdraw?"));
    if (isNaN(withdrawalAmount)){
      return this.accountError()
    } else {
      return this.balance = this.balance - withdrawalAmount, alert(`€${withdrawalAmount} has been withdrawn.`), atm()
    }
  },
  getAccountName: function() { 
    return alert(`This is ${this.accountName}'s account.`), atm()
  },
  accountError: function() { 
    return alert(`Error. Request could not be processed. Returning to menu.`), atm()
  },
  exitAccount: function() { 
    return alert("Goodbye!"), login();
  },
};


//Login function
function login(){
  //Reset balance to fake different user (No way to save previous user data applied)
  account.balance = 100,
  //Username request (Accepts anything except an empty string)
  loginSelection = prompt ("Enter Username");
  if (loginSelection === "") {
    return alert("Please enter a valid username"), login()
  } else if (loginSelection === null){
    return login()
  } else {
  //Assigning accountName value
  account.accountName = (`${loginSelection}`); 
  //Password request for no reason
  password = prompt ("Enter Password");
  }
  if (password === null) {
    return login()
  } else {
  alert("Log in successful");
  return atm();
  }
}


// ATM function
function atm(){
// Menu
  let accountSelection = prompt(

`                 Welcome! 

What would you like to do? 
Enter the number of your selection then press OK. 
Press cancel to log out.

        1. Check Balance
        2. Check Account Owner
        3. Make a Deposit
        4. Make a Withdrawal
        `
  )

//Selections
  if (accountSelection === "1"){
    return account.getBalance();
  } else if (accountSelection === "2"){
    return account.getAccountName();
  } else if (accountSelection === "3"){
    return account.deposit();
  } else if (accountSelection === "4"){
    return account.withdrawal();
  } else if (accountSelection === ""){
    return account.accountError();
  } else if (accountSelection === null){
    return account.exitAccount();
  } else {
    return account.accountError();
  }
}

//User takes the wheels here!
login();

/*In general there could be a lot more specific error handling for all the different types of interactions but I hope 
this is ok for what the assignment requires */