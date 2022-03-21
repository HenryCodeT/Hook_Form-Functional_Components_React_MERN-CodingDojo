import React from 'react';

const Form = (props) => {
    
    const{inputs, setInputs} = props;

    const onChange = (e)=>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }
    
    return(
        <form className='container border border-dark m-2 p-2 rounded border-3' action="">
            <div className="form-group">
                <label className="form-label" htmlFor="firstName">First Name</label>
                <input className="form-control" onChange={onChange} type="text" name="firstName" />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="lastName">Last Name</label>
                <input className="form-control" onChange={onChange} type="text" name="lastName" />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-control" onChange={onChange} type="email" name="email" />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-control" onChange={onChange} type="password" name="password" />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                <input className="form-control" onChange={onChange} type="password" name="confirmPassword" />
            </div>
        </form>
    );
}

export default Form;