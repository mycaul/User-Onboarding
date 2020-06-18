import * as yup from 'yup'

const formSchema = yup.object().shape({
    firstName: yup.string()
        .trim()
        .min(2, 'First name must be at least two characters long')
        .required('First name is a required field'),
    lastName: yup.string()
        .trim()
        .min(2, 'Last name must be at least two characters long')
        .required('Last name is a required field'),
    email: yup.string()
        .email('Email must be a valid email address')
        .required('Email is a required field'),
    password: yup.string()
        .trim()
        .min(6, 'Password must be at least six characters long')
        .required('Password is a required field'),
    terms: yup.boolean().oneOf([true], 'Terms of service must be checked')
})

export default formSchema