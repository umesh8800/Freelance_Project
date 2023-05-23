import React from 'react'
import './Form.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getCategoriesData from '../Store/Actions/Department/CategoriesFetch';
import { useState } from 'react';
import Validation from '../validation/validation';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Select from 'react-select';


function Form() {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerDOB, setCustomerDOB] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [errorDOB, setErrorDOB] = useState('');
  
  const [selectedOption, setSelectedOption] = useState([]);
  
 
  const handleSelector=(user)=>{
    if(selectedOption.includes(user)){
      setSelectedOption([...selectedOption.filter((el)=>{
        return el!=user
      })])
    }
    else{
      setSelectedOption([...selectedOption,user])
    }

  }

  const dispatch = useDispatch()
  const { categories } = useSelector(state => state)

  const handleNameChange = event => {
    setCustomerName(event.target.value)
  };

  const handlePhoneChange = event => {
    setCustomerPhone(event.target.value)

  };

  const handleDOBChange = event => {
    setCustomerDOB(event.target.value)

  };

  useEffect(() => {

    dispatch(getCategoriesData())

  }, [])

  const handleSubmit = event => {
    event.preventDefault();
    console.log(customerName)
    console.log(customerPhone)
    console.log(customerDOB)

    console.log(selectedOption)
    let name_validate = Validation.validateFullName(customerName, setErrorName)
    let Phone_validate = Validation.validateMobileNumber(customerPhone, setErrorPhone)
    let DOB_validate = Validation.validateDOB(customerDOB, setErrorDOB)

    if (name_validate === true && Phone_validate === true && DOB_validate === true) {


    }
    else {

    }
  };

  const apiData = categories.CategoriesData
  return (
    <div>
      <form className='form_main'>
        <div className='heading'>
          <h2>Customer Onboarding</h2>
        </div>
        <div className="mb-3">
          <label className="form-label">Constomer Name</label>
          <input type="text" className="form-control"
            onBlur={() => { Validation.validateFullName(customerName, setErrorName) }}
            name="customerName"
            onChange={handleNameChange}
            value={customerName}
          />
          {errorName === true ? <></> : <span style={{ color: "red" }} className="error_text">{errorName}</span>}
        </div>

        <div className="mb-3">
          <label className="form-label">Customer Phone Number</label>
          <input type="text" className="form-control"
            onBlur={() => { Validation.validateMobileNumber(customerPhone, setErrorPhone) }}
            name="customerPhone"
            onChange={handlePhoneChange}
            value={customerPhone}
          />
          {errorPhone === true ? <></> : <span style={{ color: "red" }} className="error_text">{errorPhone}</span>}
        </div>

        <div className="mb-3">
          <label className="form-label">Customer DOB</label>
          <input type="date" className="form-control"
            onBlur={() => { Validation.validateDOB(customerDOB, setErrorDOB) }}
            name="customerDOB"
            onChange={handleDOBChange}
            value={customerDOB}
          />
          {errorDOB === true ? <></> : <span style={{ color: "red" }} className="error_text">{errorDOB}</span>}

        </div>

        {/* ##card start from here */}

        <div className="mb-3">
          <label className="form-label"> Interested Categories</label>

          <div style={{ display: "flex" }}>

            {apiData.map((user, index) => (
              <div key={index} className='same' style={selectedOption.includes(user)? {backgroundColor:"black",color:"white"}:{}} onClick={(e)=>{e.preventDefault(); handleSelector(user)}} >
          {user}
              </div>
            ))}

          </div>
        </div>



        <button className="btn btn-primary" type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Form