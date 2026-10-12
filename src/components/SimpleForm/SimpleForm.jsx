

const SimpleForm = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        console.log(e.target);
        console.log(e.target[0].value); // Accessing the first input value (name)
        console.log(e.target[1].value); // Accessing the second input value (email)
        console.log(e.target[2].value); // Accessing the third input value (password)

        console.log('Name:', e.target.name.value);
        console.log('Email:', e.target.email.value);
        console.log('Password:', e.target.password.value);
        
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter your name" />
                <br />
                <input type="email" name="email" placeholder="Enter your email" />
                <br />
                <input type="password" name="password" placeholder="Enter your password" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;