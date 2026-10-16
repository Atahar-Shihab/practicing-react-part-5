

const FormAction = () => {


    const handleFormAction = (formData) => {
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }



    return (
        <div className="form-container">
            <form action={handleFormAction} className="form">

                <input className="form-control " type="text" name="name" placeholder="Name" />
                <br />
                <br />
                <input className="form-control" type="email" name="email" placeholder="Email" />
                <br />

                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default FormAction;