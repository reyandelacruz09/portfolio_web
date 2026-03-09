function InputValidationEditContact(values){
    let flagError = false
    const errors = {}
    // const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if (values.secemail === "") {
        errors.secemail = "Email is Required!"
        flagError = true
    }
    if (values.mobile_n === "") {
        errors.mobile_n = "Mobile number is Required!"
        flagError = true
    }
    if (values.ecname === "") {
        errors.ecname = "Contact person name is Required!"
        flagError = true
    }
    if (values.ecnumber === "") {
        errors.ecnumber = "Contact person info number is Required!"
        flagError = true
    }

    return [errors, flagError]
}
export default InputValidationEditContact;
