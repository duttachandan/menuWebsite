import React from 'react'
import MainNav from '../components/MainNav';
import "./Landing_page.css"

const Sign = () => {
    function preventLoad(e) {
        console.log(e);
    }
    return (
        <>
            <MainNav />
            <div className='mainflex main-body'>
                <h1>Sign In</h1>
                <form action="" className='SignInPage mainflex' onSubmit={() => preventLoad()}>
                    <div className="btn">
                        <label htmlFor="user_name">User Name:</label>
                        <input type="text" name="UserName" id="user_name" placeholder='Type a User Name' />
                    </div>
                    <div className="btn"><label htmlFor="email_Id">Email Id:</label>
                        <input type="email" name="emailId" id="email_Id" placeholder='xyz@gmail.com' /></div>
                    <div className="btn">
                        <label htmlFor="Password">Password:</label>
                        <input type="pass_id" name="Password" id="pass_id" />
                    </div>
                    <div className="btn">
                        <label htmlFor="num_id">Phone No:</label>
                        <input type="number" name="phone" id="num_id" />
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
