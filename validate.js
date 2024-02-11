const Validate = require('./Validators')

const validate = new Validate()

// creating a function to access all the methods in the class defined above 

function validated(number) {
    if (validate.masterCardValidation(number)) {
        return 'This is a MasterCard Number'
    }else if (validate.visaValidation(number)) {
        return 'This is a Visa Number'
    }else if (validate.verveValidation(number)) {
        return 'This is a Verve Number'
    }else{
        return 'This is an invalid card number'
    }
}

console.log(validated('5100000000000000'))

// console.log(validate.masterCardValidation('5100000000000000'))
// console.log(validate.visaValidation('4000000000005'))
// console.log(validate.verveValidation('5060000000000000'))