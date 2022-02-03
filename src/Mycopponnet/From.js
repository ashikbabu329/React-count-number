import React,{useState} from 'react'
import Component from './style.css'
function From(){
    const [Name ,setName] = useState ("");
    const [Email ,setEmail] = useState ("");
    const [Password ,setPassword] = useState ("");
    const handleSubmit = (e) => {
        console.log("from submitted")
        console.log(userInfo)
        e.prevendDefualt();
        let userInfo ={
            name:Name,
            email:Email,
            password:Password
        }
    }
const handleNameChange = (e) => {
    setName(e.target.value)
}
const handleEmailChange = (e) => {
    setEmail(e.target.value)
}
const handlePasswordChange = (e) => {
    setPassword(e.target.value)
}
    return(
        <div className={"from"}>
        <h1 className={"hh"}>Registration From</h1>
        
            <from action="" onSubmit={handleSubmit}>
            <div className="fromgroup">
                <label className={"lab"} htmlFor="name">Name </label><br />
                <input className={"inp" } type="text" name="name" id="name" value={Name} placeholder="Enter Your Name" onChange={handleNameChange}
                 reqired/>
                </div>
                <div className="fromgroup">
                <label className={"lab"} htmlFor="name">Email </label><br />
                <input className={"inp" } type="email" name="email" id="email" value={Email} placeholder="Enter Your Email" onChange={handleEmailChange} reqired/>
                </div>
                <div className="fromgroup">
               < label className={"lab"} htmlFor="name">password </label><br />
                <input className={"inp" }type="password" name="password" id="password" value={Password} placeholder="Enter Your Password" onChange={handlePasswordChange} reqired/>
                </div>
                <div>
                    <button className={"btn"} type="submit">Submit</button>
                </div>
            </from>

        
        </div>
    )
}
export default From;
