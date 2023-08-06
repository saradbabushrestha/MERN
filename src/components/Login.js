import { Component } from "react";


class Login extends Component {
  handleSigninClick(evey){
    const formElem = document.getElementById("login-form");
    // get value from input field
    const username = formElem.querySelector("#username").value;
    const password = formElem.querySelector("#password").value;

    if (!username || !password) {
     
      document.querySelector("#err").innerHTML = "username or password not entered";
      return;
    }
    // clear err msg
    document.querySelector("#err").innerHTML = "";
   //call bs api user create api
    fetch("http://localhost:5001/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {

        console.log("Created new user", data);
        if(data.error)
        {
          document.querySelector("#err").innerHTML = data.error;

        }
      
       
      })
      .catch((err) => {
        document.querySelector("#err").innerHTML = err.message;
        console.error(err);
      });
  }

  
  handleSignUpClick(evnt) {
    const formElem = document.getElementById("signup-form");
    const username = formElem.querySelector("#signin-username").value;
    const email = formElem.querySelector("#email").value;
    const fullname = formElem.querySelector("#fullname").value;
    const address = formElem.querySelector("#address").value;
    const title = formElem.querySelector("#title").value;
    const job_type = formElem.querySelector("#job_type").value;
    const skills = formElem.querySelector("#skills").value.split(",");
    const password = formElem.querySelector("#signin-password").value;
    const rpassword = formElem.querySelector("#repeat-password").value;

    //const term = formElem.querySelector("term-conditions").Checked;

    if (password !== rpassword) {
      alert("Password doesn't match");
      return;
    }

    document.querySelector("#err").innerHTML = "";

    fetch("http://localhost:5001/api/v1/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        address,
        fullname,
        title,
        skills,
        job_type,
        password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {

        console.log("Created new user", data);
        if(data.error)
        {
          document.querySelector("#err").innerHTML = data.error;

        }
      
       
      })
      .catch((err) => {
        document.querySelector("#err").innerHTML = err.message;
        console.error(err);
      });
  }
  render() {
    return (
      <div className="sign-in-page" style={{ background: "cornflowerblue" }}>
        <div className="signin-popup">
          <div className="signin-pop">
            <div className="row">
              <div className="col-lg-5">
                <div className="cmp-info">
                  <div className="cm-logo">
                    <img
                      src="images/logo2.png"
                      alt=""
                      style={{ width: "100px" }}
                    />
                    <p>
                      LEC, is a global freelancing platform and social
                      networking where businesses and independent professionals
                      connect and collaborate remotely
                    </p>
                  </div>
                  <img src="images/logo2.png" alt="" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="login-sec">
                  <ul className="sign-control">
                    <li data-tab="tab-1" className="current">
                      <a href="./#" title="">
                        Sign in
                      </a>
                    </li>
                    <li data-tab="tab-2">
                      <a href="./#" title="">
                        Sign up
                      </a>
                    </li>
                  </ul>
                  <div className="sign_in_sec current" id="tab-1">
                    <h3>Sign in</h3>
                    <form id="login-form">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="text"
                              name="username"
                              id="username"
                              placeholder="Username"
                            />
                            <i className="la la-user"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              placeholder="Password"
                            />
                            <i className="la la-lock"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="checky-sec">
                            <div className="fgt-sec">
                              <input type="checkbox" name="cc" id="c1" />
                              <label htmlFor="c1">
                                <span></span>
                              </label>
                              <small>Remember me</small>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button type="button" value="submit" onClick={this.handleSigninClick}>
                            Sign in
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="sign_in_sec" id="tab-2">
                    <h3>Sign up</h3>
                    <form id="signup-form">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="text"
                              name="username"
                              id="signin-username"
                              placeholder="Username"
                            />
                            <i className="la la-user"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="text"
                              name="email"
                              id="email"
                              placeholder="Email"
                            />
                            <i className="la la-envelope"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="text"
                              name="fullname"
                              id="fullname"
                              placeholder="Full Name"
                            />
                            <i className="la la-user"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="text"
                              name="title"
                              id="title"
                              placeholder="Title"
                            />
                            <i className="la la-user"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <select name="job_type" id="job_type">
                              <option>Job Type</option>
                              <option value="Part Time">Part Time</option>
                              <option value="Full Time">Full Time</option>
                            </select>
                            <i className="la la-task"></i>
                            <span>
                              <i className="fa fa-ellipsis-h"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="text"
                              name="skills"
                              id="skills"
                              placeholder="Skills (comma separated)"
                            />
                            <i className="la la-cogs"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="sn-field">
                            <input
                              type="text"
                              name="address"
                              id="address"
                              placeholder="Address"
                            />
                            <i className="la la-globe"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="password"
                              name="password"
                              id="signin-password"
                              placeholder="Password"
                            />
                            <i className="la la-lock"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="password"
                              name="repeat-password"
                              id="repeat-password"
                              placeholder="Repeat Password"
                            />
                            <i className="la la-lock"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="checky-sec st2">
                            <div className="fgt-sec">
                              <input type="checkbox" name="cc" id="c2" />
                              <label htmlFor="c2">
                                <span></span>
                              </label>
                              <small>
                                Yes, I understand and agree to the LEC Terms
                                &amp; Conditions.
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <button
                            type="button"
                            value="submit"
                            onClick={this.handleSignUpClick}
                          >
                            Get Started
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div id="err"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footy-sec">
          <div className="container">
            <ul>
              <li>
                <a href="./#" title="">
                  Help Center
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  About
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Career
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Forum
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Language
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Copyright Policy
                </a>
              </li>
            </ul>
            <p>
              <img src="images/copy-icon.png" alt="" />
              Copyright 2019
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
