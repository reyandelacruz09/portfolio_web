function InputValidation(values){
    let flagError = false
    const errors = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if(values.first_name === ""){
        errors.first_name = "First name is Required!"
        flagError = true
    }

    if(values.last_name === ""){
        errors.last_name = "Last name is Required!"
        flagError = true
    }

    if(values.middle_name === ""){
        errors.middle_name = "Middle name is Required!"
        flagError = true
    }

    if(values.email === ""){
        errors.email = "Email is Required!"
        flagError = true
    }else if(!email_pattern.test(values.email)){
        errors.email = "Email didn't matched!"
        flagError = true
    }

    if(values.employee_id === ""){
        errors.employee_id = "Employee ID is Required!"
        flagError = true
    }

    if(values.phone_number === ""){
        errors.phone_number = "Phone Number is Required!"
        flagError = true
    }

    if(values.mobile_number === ""){
        errors.mobile_number = "Mobile Number is Required!"
        flagError = true
    }

    if(values.contact_person_incase_of_emergency === ""){
        errors.contact_person_incase_of_emergency = "Contact person info is Required!"
        flagError = true
    }

    if(values.cpioe_contact_no === ""){
        errors.cpioe_contact_no = "Contact person info number is Required!"
        flagError = true
    }
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
export default InputValidation;
