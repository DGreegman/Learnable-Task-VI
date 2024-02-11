# CREDIT CARD VALIDATOR 

## Description
A simple console JavaScript Program to Validate Credit card number, indicating credit card type like Visa, MasterCard or Verve Card.

This only covers only the Three Major card used in my country Home, Nigeria Visa, Verve and MasterCard 

## Regex Pattern Used 

    masterCardRegex = /^5[1-5][0-9]{14,16}/

*This will match strings that*
1. Start with a 5 (^5)
2. Followed by a digit between 1-5 ([1-5])
3. Followed by 14 to 16 digits ([0-9]{14,16})


    verveRegex = /^(506[0-1]{1}[0-9]{11,13}|650[0-9]{12,14})/

*This pattern contains an OR (|) condition*
1. It will match strings that:
2. Start with 506 followed by a 0 or 1, then 11-13 digits
3. OR start with 650 followed by 12-14 digits


    visaRegex = /^4[0-9]{12,15}/

*This will match strings that*
1. Start with a 4 (^4)
2. Followed by 12 to 15 digits ([0-9]{12,15})

## Features of the program 
The Program has a single Class of name Validators and a Function file that implemented the class called validated

**Validators Class**
The Class has four Properties and Three Methods namely

*Properties*
1. cardNumber: this property is used to filter the input from the user
2. verveRegex: this property is used to set the pace for vervePattern
3. visaRegex: this property is used for visa card pattern just like the name is.
4. masterCard: this property is also used to set the master card Pattern 

*Methods*
1. masterCardValidation: for all the validation concerning Master card
2. visaValidation: for all the validation associated with Visa Card
3. verveValidation: for all the validation associated with Verve card 


**Validated Function**
This function is in the file validate.js with one parameter called number to capture the user input when passed to the method that was created in the class.
Basically the function is just used to implement the Validate class
