import React, {useState} from "react";


// object data
export const FormTemplate = () => {
  const formData = {
    fullname: "",
    email: "jhjjl@gmail",
    password: "****",
    confirmPassword: "****",
  };

  // ASSIGNED INNITIAL VALUE OF FORM DATA TO THE STATE HOOK
  const [form, setFormValue] = useState(formData);
  // destructuring form (value name for state {form:formData})
  const { fullname, email, password, confirmPassword } = form;
  
// creating an onchange event
  const handleChange = (ev) => {
    // getting name and value from target tag 
    const {name,value} = ev.target;
    // setting up state function by spreading all target tag attribute and fetching name as key, and value and value
    setFormValue((preValues) =>({...preValues
    , [name] : value }))
    console.log(ev.target);
  }
  

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Create Account</h2>

      <form>
        <div className="form-container">
          <div className="form-info">
            <input
              htmlFor="fullname"
              name="fullname"
              className="form-input"
              typeof={"text"}
              placeholder={"Full Name"}
              value={fullname.value}
              onChange={handleChange}
            />
          </div>
          <div className="form-info">
            <input
              htmlFor="email"
              name="email"
              className="form-input"
              typeof={"email"}
              placeholder={"Email"}
              value={email.value}
              onChange={handleChange}

            />
          </div>
          <div className="form-info">
            <input
              htmlFor="password"
              name="password"
              className="form-input"
              typeof={"password"}
              placeholder={"Password"}
              value={password.value}
              onChange={handleChange}

            />
          </div>
          <div className="form-info">
            <input
              htmlFor="confirmPassword"
              name="confirmPassword"
              className="form-input"
              typeof={"password"}
              placeholder={"Confirm Password"}
              value={confirmPassword.value}
              onChange={handleChange}

            />
          </div>
        </div>
      </form>
      <p className="name-output">Your fullname is {fullname}</p>
    </div>
  );
};




export const Template = () => {
  return (
    <div>FormTemplate</div>
  )
}
