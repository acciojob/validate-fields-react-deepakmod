import React, { useState } from 'react';

const Form = () => {

    const [userDetails,setUserDetails] = useState({username:'',password:''});
    const [error,setError] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        if(userDetails.username === '' || userDetails.password === '')
        {
            setError('Both username and password are required.');
            return;
        }

        setError('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                Username:<input type="text" onChange={(e)=>{
                    setUserDetails({...userDetails,username:e.target.value});
                }} ></input>
            </div>

            <div>
                Password:<input type="password" onChange={(e)=>{
                    setUserDetails({...userDetails,password:e.target.value});
                }} ></input>
            </div>
            
            {error && <p id='errorMessage' >{error}</p>}

            <button type="submit" >Login</button>
        </form>
    );
};

export default Form;