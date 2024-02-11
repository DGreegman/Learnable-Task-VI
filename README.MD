# CREDIT CARD VALIDATOR 

## Description
A simple console JavaScript Program to Validate Credit card number, indicating credit card type like Visa, MasterCard or Verve Card.

This only covers only the Three Major card used in my country Home, Nigeria Visa, Verve and MasterCard 

## Regex Pattern Used 
> for MasterCard I used this pattern below:

    masterCardRegex = /^5[1-5][0-9]{14,16}/

> for Verve I used the pattern below:
    verveRegex = /^(506[0-1]{1}[0-9]{11,13}|650[0-9]{12,14})/

> for Visa I used the pattern below:
    visaRegex = /^4[0-9]{12,15}/

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
