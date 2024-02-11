class Validate {

    // declaring all the properties needed for this project
    cardNumber 
    verveRegex
    visaRegex
    masterCardRegex

    masterCardValidation(cardNumber){
        this.cardNumber = cardNumber.replace(/\D/g, '')

        this.masterCardRegex = /^5[1-5][0-9]{14,16}/
        if (!this.masterCardRegex) {
            return 'This is an invalid MasterCard Number'
        }
        return this.masterCardRegex.test(this.cardNumber)
    }

    // method for visa validation (4[0-9]{12,15}
    visaValidation(cardNumber){
        this.cardNumber = cardNumber.replace(/\D/g, '')
        this.visaRegex = /^4[0-9]{12,15}/
        return this.visaRegex.test(this.cardNumber)
    }

    // method for verve validation (506[0-1]{1}[0-9]{11, 13} | 650[0-9]{12, 14})
    verveValidation(cardNumber){
        this.cardNumber = cardNumber.replace(/\D/g, '')

        this.verveRegex = /^(506[0-1]{1}[0-9]{11,13}|650[0-9]{12,14})/
        return this.verveRegex.test(this.cardNumber)
    }
}

module.exports = {Validate}
