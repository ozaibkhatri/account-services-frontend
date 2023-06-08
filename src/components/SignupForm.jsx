import React, {useState} from 'react'






const SignupForm = () => {
const [fname, setFname] = useState('');
const [lname, setLname] = useState('');
const [phone, setPhone] = useState('');
const [address, setAddress] = useState('');

const [email, setEmail] = useState('');
const [cnic, setCnic] = useState('');
const [password, setPassword] = useState('');
const [role, setRole] = useState('');




const handleForm = async(e) => {
  e.preventDefault();


  const newUser = {
    firstName: fname,
    lastName: lname,
    phoneNumber: phone,
    address: address,
    email: email,
    nationalId: cnic,
    password: password,
   
  };


  try {
    const response = await fetch('http://localhost:8082/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/Json'
      },
      body: JSON.stringify(newUser)
    })
    if (response.ok) {
      console.log(" New User is registered!!!");
      console.log(newUser);
    } else {
      console.log("some error occurred")
    }
  } catch (error) {
    console.log(error);
  }
  }


  return (
    <div>
        <h1>Create Account</h1>
        <form onSubmit={handleForm}>
<label htmlFor="firstName">First Name</label> <br />
<input type="text" name="fname" id="fname" onChange={e => setFname(e.target.value)} value={fname} required />
<br />


<label htmlFor="lastName">Last Name</label> <br />
<input type="text" name="lname" id="lname"  onChange={e => setLname(e.target.value)} value={lname} required/>
<br />


<label htmlFor="phoneNum">Phone No</label> <br />
<input type="text" name="phone" id="phone" onChange={e => setPhone(e.target.value)} value={phone} required/>
<br />

<label htmlFor="address">Address</label> <br />
<input type="text" name="address" id="address" onChange={e => setAddress(e.target.value)} value={address} required />
<br />

<label htmlFor="email">Email address</label> <br />
<input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} value={email} required/>
<br />

<label htmlFor="cnic">CNIC</label> <br />
<input type="text" name="cnic" id="cnic" onChange={e => setCnic(e.target.value)} value={cnic} required />
<br />

<label htmlFor="password">Password</label> <br />
<input type="password" name="password" id="password"  onChange={e => setPassword(e.target.value)} value={password} required/>
<br />

 <label htmlFor="role">Role</label> <br />
<input type="radio" name="role" id="role" onChange={e => setRole(e.target.value)} value={role} required />Patient <br /> 
<input type="radio" name="role" id="role" onChange={e => setRole(e.target.value)} value={role} required />Counselor <br /> 
<input type="submit" value="SignUp" />

        </form>

        </div>
    
  )
}

export default SignupForm