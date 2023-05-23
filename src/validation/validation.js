class Validation{

  
    static validateFullName = (text, setErrorFullName) => {

        text = (text)?.trim();

        let length = text?.length;

        if(length === 0){
            setErrorFullName("Fields are required.")
			return false;
        }

        if(length < 3){
            setErrorFullName(" Must be 3 character long.")
			return false;
        }

        if(length > 30){
            setErrorFullName("Name not more than 30 character.")
			return false;
        }

        if(/^[a-zA-Z ]*$/.test(text) !== true){
            setErrorFullName("Name must contain alphabet.")
			return false;
        }
       
        setErrorFullName("");
        return true;
    }



    static validateMobileNumber = (text, setErrorPhone) => {

        text = (text)?.trim();

        let length = text?.length;

        if(length === 0){
            setErrorPhone("Please enter the Mobile number to proceed.")
			return false;
        }

 

        if(/^\d+$/.test(text) !== true){
            setErrorPhone("Mobile number must contain digit.")
			return false;
        }
       
        setErrorPhone("");
        return true;
    }


    static validateDOB = (text, setErrorDOB) => {

        text = (text)?.trim();

        let length = text?.length;

        if(length === 0){
            setErrorDOB("Field is required")
			return false;
        }

 

        // if(/^(1[89]|[2-9]\d)$/.test(text)!== true){
        //     setErrorDOB("Age should be greater than 20")
		// 	return false;
        // }
       
        setErrorDOB("");
        return true;
    }



    
}

export default Validation;