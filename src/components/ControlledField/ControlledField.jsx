
import { useState } from 'react';
const ControlledField = () => {



    const [Password, setPassword] = useState('')
    const [Error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handlePasswordOnChange = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);

        if(Password.length < 6){
            setError('Password must be at least 6 characters long');
        } else {
            setError('');
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="email" name="email" placeholder="Enter your email" required id=""/>
                <br />
                <input type="password" name="password" placeholder="Enter your password" required onChange={handlePasswordOnChange} defaultValue={Password} id=""/>

                <br />
            <p style={{color: 'red'}}><small>{Error}</small></p>
                <input type="submit" value="Submit" />


            </form>

            
        </div>
    );
};

export default ControlledField;