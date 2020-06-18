import React from 'react'

export default function Form(props){
    const{
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
        onCheckboxChange
    } = props

return (
    <form onSubmit={onSubmit}>
        <div>
            <h2>Add a User</h2>
            <button disabled={disabled}>Submit</button>

            <div>
                <div> {errors.firstName} </div>
                <div> {errors.lastName} </div>
                <div> {errors.email} </div>
                <div> {errors.password} </div>
                <div> {errors.terms} </div>
            </div>
        </div>
        <div>
            <h4>Input Info Here</h4>
            <label>First Name&nbsp;
                <input 
                    value={values.firstName}
                    onChange={onInputChange}
                    name='firstName'
                    type='text'
                />
            </label><br></br>

            <label>Last Name&nbsp;
                <input
                    value={values.lastName}
                    onChange={onInputChange} 
                    name='lastName'
                    type='text'
                />
            </label><br></br>

            <label>Email&nbsp;
                <input
                    value={values.email}
                    onChange={onInputChange} 
                    name='email'
                    type='email'
                />
            </label><br></br>

            <label>Password&nbsp;
                <input 
                    values={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='password'
                />
            </label><br></br>

            <label>Terms of Service&nbsp;
                <input
                    checked={values.terms}
                    onChange={onCheckboxChange} 
                    name='terms'
                    type='checkbox'
                />
            </label>
        </div>
    </form>
)
}