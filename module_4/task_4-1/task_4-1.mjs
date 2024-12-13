"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

// Create a constant object to hold account types
const accountTypes = { normal: "Brukskonto", savings: "Sparekonto", credit: "Kreditkonto", Pension: "Pensjonskonto" };

const CurrencyTypes = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
    USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
    INR: { value: 7.3809, name: "Indiske rupee", denomination: "₹" },
    AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
    PHP: { value: 6.1583, name: "Filippinske peso", denomination: "₱" },
    SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
    CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
    THB: { value: 3.3289, name: "Thai baht", denomination: "฿" },
};

class TAccount {
    
        #type; // Private variable for account type
        #balance; // Private variable for balance
        #withdrawCount; // Private variable for withdrawal counter
        #currencyType; // Private variable for currency type
    
        // Constructor to initialize the account type, balance, and currency
        constructor(initialType, initialBalance = 0, initialCurrencyType = "NOK") {
            this.#type = initialType;
            this.#balance = initialBalance;
            this.#withdrawCount = 0;
            this.#currencyType = initialCurrencyType;
        }
    
        // Method to return the account type
        toString() {
            return this.#type;
        }
    
        // Method to set a new account type and reset withdrawal counter
        setType(newType) {
            const oldType = this.#type;
            this.#type = newType;
            this.#withdrawCount = 0;
            printOut(`Account is changed from ${oldType} to ${newType}`);
        }
    
        // Method to get the balance
        getBalance() {
            return this.#balance.toFixed(2); // Format balance to 2 decimals
        }
    
        // Method to deposit an amount
        deposit(amount) {
            if (amount <= 0) {
                printOut("Sum må være større enn 0kr");
                return;
            }
            this.#balance += amount;
            this.#withdrawCount = 0;
            printOut(`Deposit of ${amount}${CurrencyTypes[this.#currencyType].denomination}, new balance is ${this.getBalance()}${CurrencyTypes[this.#currencyType].denomination}`);
        }
    
        // Method to withdraw an amount
        withdraw(amount) {
            if (amount <= 0) {
                printOut("Uttak må være større enn 0kr");
                return;
            }
    
            switch (this.#type.toLowerCase()) {
                case "sparekonto": // Max 3 withdrawals for Sparekonto
                    if (this.#withdrawCount >= 3) {
                        printOut("Du kan bare ta ut penger tre ganger fra Sparekontoen din!");
                        return;
                    }
                    break;
    
                case "pensjonskonto": // No withdrawals allowed for Pensjonskonto
                    printOut("Ingen uttak lov på pensjonskontoen!");
                    return;
    
                default:
                    // No restrictions for other account types
                    break;
            }
    
            if (amount > this.#balance) {
                printOut("Utilstrekkelig saldo");
                return;
            }
    
            this.#balance -= amount;
            this.#withdrawCount++;
            printOut(`Withdrawal of ${amount}${CurrencyTypes[this.#currencyType].denomination}, new balance is ${this.getBalance()}${CurrencyTypes[this.#currencyType].denomination}`);
        }
    
        // Method to set the currency type
        setCurrencyType(newCurrencyType) {
            if (this.#currencyType === newCurrencyType) {
                printOut(`Currency is already set to ${newCurrencyType}`);
                return;
            }
            const oldCurrencyType = this.#currencyType;
            this.#currencyType = newCurrencyType;
            printOut(`Currency is changed from ${oldCurrencyType} to ${newCurrencyType}`);
        }
    }
    

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a constant object to hold account types with these properties:
*/
// Print all account types as a single comma-separated line

printOut(Object.values(accountTypes).join(", "));



printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a bank account class with this structure:
Let the constructor of the class have a parameter for the account type of this bank account class. And set
"type" to this parameter value. The "toString" method should return the account type. The "setType"
method should set "type" to this new value and print out the change of account type.
Create a constant instance of this "TAccount" class and name it "myAccount" with a "Normal" account
type. Then change the account type to "Saving".
Print something similar to this:
*/

// Create a constant instance of TAccount with "Normal" account type
const myAccount = new TAccount("Brukskonto");

// Print the initial account type
printOut("myAccount =" + myAccount.toString());

// Change the account type to "Sparekonto"
myAccount.setType("Sparekonto");

// Print the updated account type
printOut("myAccount =" +  myAccount.toString());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Expand the account class to this structure
"getBalance" should return the account balance. "deposit" should increase the balance by a given amount
and print the amount and the new balance. "withdraw" should decrease the balance by a given amount
and print the amount and the new balance.
*/
//lage ny konto
new TAccount("Brukskonto", 0, "NOK");

//sette inn penger
myAccount.deposit(100);

//ta ut mer enn tilgjengelig
myAccount.withdraw(200);

//ta ut penger
myAccount.withdraw(25);

//sum på konto nå

printOut(`My account balance is: ${myAccount.getBalance()}`);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Expand the account with a private counter that counts the number of withdrawals like this:
Use a "switch statement" to check if the account type is "Pension" or "Saving". If the account type is a
savings account, you cannot make more than three withdrawals. The withdrawal counter should be reset if
the account type is changed or the deposit method is used. If the account type is a pension account, no
withdrawals are allowed.
Make sure that the account is set to "Saving" and that the balance is exactly 100, use "deposit" and
"setType" if necessary.
*/

new TAccount("Sparekonto", 75); //sett in sparekonto

myAccount.deposit(25); // sett denne til 100kr

myAccount.withdraw(30); // balance 70
myAccount.withdraw(30); // balanse 40
myAccount.withdraw(30); // balanse 10
myAccount.withdraw(30); // ingen flere uttak nå (max 3)

myAccount.setType("Pensjonskonto"); //endre til pensjon

myAccount.withdraw(10); //prøv å ta ut fra pensjonskonto (skal ikke gå)

myAccount.setType("Sparekonto"); //endre til sparekonto igjen

myAccount.withdraw(10); //siste uttak, balnse skal være 0kr. 



printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a new static object as follows:
Add a private currency type to the account class and set the default value to "NOK".
Create a "public" "setCurrencyType" method so you can change the account currency. If this method tries
to switch to a new currency of the same type as the account already has, the method should do nothing
and just return. The new structure will be like this:
Make a deposit to the account with an amount of 150, and let the output look like this:

*/

new TAccount("Sparekonto", 0);

myAccount.deposit(150) //new balance is 150kr


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Expand the account class with a private method that converts from one currency to another. Use this
method to change the balance when the currency changes. Replace all places where you print the balance
so that it has exactly 2 decimals.
Change the currency a few times and try to get the output to look like this
*/

new TAccount("sparekonto", 100, "NOK");

//endre til SEK
myAccount.setCurrencyType("SEK");

//endre til USD
myAccount.setCurrencyType("USD");

//endre til NOK igjen
myAccount.setCurrencyType("NOK");



printOut("");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Modify the "deposit" and "withdraw" methods to take an additional parameter for the currency type. If no
currency type is specified (undefined), use NOK as the default. Make this change so that the functions
print out the currency the amount is in.
Deposit 12 USD and withdraw 10 GBP. Change the account currency a few times and withdraw the rest of
the balance with a different currency than the account is in. You should have a balance of exactly 0.00.
Try to print something like this:
*/
// Create an account
new TAccount("Sparekonto", 100, "NOK");

// Deposit 12 USD
myAccount.deposit(12, "USD");

// Change currency to GBP
myAccount.setCurrencyType("GBP");

// Withdraw 10 GBP
myAccount.withdraw(10, "GBP");

// Change back to NOK
myAccount.setCurrencyType("NOK");

// uttak gjennværende sum 
//myAccount.withdraw(myAccount.#balance, "NOK"); // Remaining balance withdrawal
printOut(`Final balance is: ${myAccount.getBalance()}`);

printOut(newLine);
