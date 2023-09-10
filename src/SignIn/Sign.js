import React, { useState } from 'react'
import MainNav from '../components/MainNav';
import "./Landing_page.css"

const Sign = () => {
    const [Data, setData] = useState({
        UserName: "",
        emailId: "",
        Password: "",
        phone: ""
    })
    const { UserName, emailId, Password, phone } = Data;

    function preventLoad(e) {
        e.preventDefault();
        setData({
            UserName: "",
            emailId: "",
            Password: "",
            phone: ""
        })
    }
    function submitform(e) {
        const formValue = e.target.value;
        const name = e.target.name;
        setData((Data)=>{
            return {...Data, [name]:formValue}
        }            
        )
    }
    return (
        <>
            <MainNav />
            <div className='mainflex main-body'>
                <h1>Sign In</h1>
                <form action="" className='SignInPage mainflex' onSubmit={(e) => preventLoad(e)}>
                    <div className="btn">
                        <label htmlFor="user_name">User Name:</label>
                        <input type="text" name="UserName" id="user_name" placeholder='Type your User Name' value={UserName} onChange={(e) => submitform(e)} />
                    </div>
                    <div className="btn"><label htmlFor="email_Id">Email Id:</label>
                        <input type="email" name="emailId" id="email_Id" placeholder='xyz@gmail.com' value={emailId} onChange={(e) => submitform(e)} /></div>
                    <div className="btn">
                        <label htmlFor="Password">Password:</label>
                        <input type="pass_id" name="Password" id="pass_id" value={Password} onChange={(e) => submitform(e)} />
                    </div>
                    <div className="btn">
                        <label htmlFor="num_id">Phone No:</label>
                        <input type="number" name="phone" id="num_id" value={phone} onChange={(e) => submitform(e)} />
                    </div>
                    <dir className="btn-s">
                        <button type="submit" className="btn-submit">Submit</button>
                        <button type="reset" className="btn-submit">Reset</button>
                    </dir>
                </form>
            </div>
        </>
    )
}

export default Sign
