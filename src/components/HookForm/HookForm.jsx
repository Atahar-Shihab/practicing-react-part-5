
const HookForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted');
        console.log(event.target);
        console.log(event.target[0].value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit }>
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

export default HookForm;