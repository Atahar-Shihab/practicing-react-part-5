

const FormAction = () => {


    const handleFormAction = (formData) => {
        console.log(formData);
    }



    return (
        <div className="form-container">
            <form action={handleFormAction} className="form">

                <input className="form-control " type="text" placeholder="Name" />
                <input className="form-control" type="email" placeholder="Email" />

            </form>
        </div>
    );
};

export default FormAction;