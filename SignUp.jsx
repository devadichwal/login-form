import React, { useRef, useState } from 'react'
import '../style/signup.css'
import '../style/bootstrap.css'
import '../style/bootstrap-expend.css'
import '../style/border-layout.css'
import '../style/colors.css'
import '../style/components.css'
import '../style/dark-layout.css'
import '../style/form.css'
import '../style/Semi-dark-layout.css'
import '../style/vartical.css'

const SignUp = () => {

    const [inputs,setInputs] = useState({
        registerFirstName:"",
        registerLastName:"",
        gender:"",
        registerAge:"",
        registerEducation:"",
        registerState:"",
        

    })

    const [submited,setSubmited] = useState(false)
    const [usererr,setUsererr] = useState(false)

    const handleChange = (e)=>{
        const{name,value} = e.target;

        setInputs({
            ...inputs,
                [name]:value
        })
    }

    const validForm = ()=>{
        let valid = true;
        const newErr = {};

        let firstName = inputs.registerFirstName;
        if (firstName.length<3) {
            newErr.registerFirstName = "Enter a valid name";
            valid = false;
        }

        let lastName = inputs.registerLastName;
        if (lastName.length<3) {
            newErr.registerLastName = "Enter a valid sr name";
            valid = false;
        }

        let age = inputs.registerAge;
        if (age<14) {
            newErr.registerAge = "Not for rqueird age"
            valid=false
        }

        let gender = inputs.gender;
        if (gender=='') {
            newErr.gender = "Select your gender"
            valid = false
        }

        let education = inputs.registerEducation;
        if (education.length<2) {
            newErr.registerEducation = "Not a valid dgree"
            valid = false

        }

        let state = inputs.registerState;
        if (state.length<2) {
            newErr.registerState = "Not a valid state"
            valid = false

        }

        
        setUsererr(newErr);
        return valid
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(validForm()){
            console.log(inputs);
            setSubmited(true)
        }
    }

    const inputRef = useRef(null);

    const handleOnClick = ()=>{
        inputRef.current.click();
    }

    const [image,setImage] = useState('../public/img.png')
    const handleImageChange = (e)=>{
        let file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = ()=>{
            setImage(reader.result);
        }

        if(file){
            reader.readAsDataURL(file);
        }

       
    };

  return (
    <div className="vertical-layout vertical-menu-modern blank-page navbar-floating footer-static   menu-collapsed" data-open="click" data-menu="vertical-menu-modern" data-col="blank-page">
    {/* <!-- BEGIN: Content--> */}
    <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
        <div className="auth-wrapper auth-v1 px-2">
        <div className="auth-inner py-1">
        
                <div className="card mb-0">
                    <div className="card-body">
                    {submited?<p style={{textAlign:'center'}}>Suceess</p>:    
                    <form
                        className="auth-register-form "
                        action="index.html"
                        method="POST"
                        onSubmit={handleSubmit}
                    >

                        <div  style={{display:'flex',justifyContent:'center',alignItems:'center'}} onClick={handleOnClick}>
                            <img src={image} alt="userPhoto"  style={{maxWidth:'120px'}} className='rounded' />
                            <input type="file"  ref={inputRef} accept='image/*' onChange={handleImageChange} style={{display:'none'}} />
                            {usererr.image?<p>Select Image</p>:""}
                        </div>

                        <div className="form-group">
                        <label htmlFor="registerUsername" className="form-label">
                            Your Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="registerFirstName"
                            name="registerFirstName"
                            placeholder="First Name"
                            aria-describedby="registerFirstName"
                            value={inputs.registerFirstName}
                            tabIndex={1}
                            autoFocus=""
                            onChange={handleChange}
                        />
                        {usererr.registerFirstName?<p style={{color:"salmon"}}>{usererr.registerFirstName}</p>:""}
                        <input
                            type="text"
                            className="form-control mt-1"
                            id="registerLastName"
                            name="registerLastName"
                            placeholder="Last Name"
                            aria-describedby="registerLastName"
                            value={inputs.registerLastName}
                            tabIndex={2}
                            autoFocus=""
                            onChange={handleChange}
                            
                        />
                        {usererr.registerLastName?<p style={{color:"salmon"}}>{usererr.registerLastName}</p>:""}
                        </div>


                        <div className="form-group">
                        <label htmlFor="register-gender" className="form-label">
                            Gender
                        </label>
                        <div className="d-flex">
                        <div className="form-check shadow px-2 rounded">
                        <input className="form-check-input" type="radio" name="gender" id="male" tabIndex={3} value={"male"} onChange={handleChange}/>
                        <label className="form-label " htmlFor="male">
                            Male
                        </label>
                        </div>
                        <div className="form-check mx-1 shadow px-2 rounded">
                        <input className="form-check-input " type="radio" name="gender" id="Female" tabIndex={3} onChange={handleChange} value={"female"} />
                        <label className="form-label " htmlFor="Female">
                            Female
                        </label>
                        </div>
                        </div>
                        {usererr.gender?<p style={{color:"salmon"}}>{usererr.gender}</p>:""}
                        </div>

                        <div className="form-group">
                        <label htmlFor="registerAge" className="form-label">
                            Age
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="registerAge"
                            name="registerAge"
                            placeholder="Age"
                            aria-describedby="registerAge"
                            tabIndex={4}
                            autoFocus=""
                            onChange={handleChange}
                        />
                        {usererr.registerAge?<p style={{color:"salmon"}}>{usererr.registerAge}</p>:""}
                        </div>

                        <div className="form-group">
                        <label htmlFor="registerEducation" className="form-label">
                            Highest Education
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="registerEducation"
                            name="registerEducation"
                            placeholder="Enter your Highest Education"
                            aria-describedby="registerEducation"
                            tabIndex={5}
                            autoFocus=""
                            onChange={handleChange}
                        />
                        {usererr.registerEducation?<p style={{color:"salmon"}}>{usererr.registerEducation}</p>:""}
                        </div>

                        <div className="form-group">
                        <label htmlFor="registerState" className="form-label">
                            State
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="registerState"
                            name="registerState"
                            placeholder="Enter your State Resideant"
                            aria-describedby="registerState"
                            tabIndex={6}
                            autoFocus=""
                            onChange={handleChange}
                        />
                        {usererr.registerState?<p style={{color:"salmon"}}>{usererr.registerState}</p>:""}
                        </div>

                      
                        <button className="btn btn-primary btn-block" type='submit' tabIndex={7}>
                        Sign up
                        </button>
                    </form>
                }
                    <p className="text-center mt-2">
                        <span>Already have an account?</span>
                        <a href="page-auth-login-v1.html">
                        <span>Sign in instead</span>
                        </a>
                    </p>
                    </div>
                </div>
                
                </div>
            </div>
            </div>
        </div>
        </div>

    {/* <!-- END: Content--> */}
    </div>
  )
}

export default SignUp
