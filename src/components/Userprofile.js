import { Component } from "react";


class Userprofile extends Component{
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    const that = this;
    fetch("http://localhost:5001/api/v1/user")
      .then((resp) => resp.json())
      .then((data) => {
        that.setState({ user: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
    render()
    {
      //const user= this.props.user;
      const {user}=this.props;
        return   <div className="main-left-sidebar no-margin">
        <div className="user-data full-width">
          <div className="user-profile">
            <div className="username-dt">
              <div className="usr-pic">
                <img src={"./images/" + user.username + ".gif"} alt="" />
              </div>
            </div>
            <div className="user-specs">
              <h3>{user.fullname}</h3>
              <span>{user.title}</span>
            </div>
          </div>
          <ul className="user-fw-status">
            <li>
              <h4>Following</h4>
              <span>{user.following.length}</span>
            </li>
            <li>
              <h4>Followers</h4>
              <span>{user.follower.length}</span>
            </li>
            <li>
              <a href="./my-profile.html" title="">View Profile</a>
            </li>
          </ul>
        </div>
        <div className="suggestions full-width" style={{display:"none"}}>
          <div className="sd-title">
            <h3>Suggestions</h3>
            <i className="la la-ellipsis-v"></i>
          </div>
          <div className="suggestions-list">
            <div className="suggestion-usd">
              <img src="./images/s1.png" alt="" />
              <div className="sgt-text">
                <h4>Jessica William</h4>
                <span>Graphic Designer</span>
              </div>
              <span><i className="la la-plus"></i></span>
            </div>
            <div className="suggestion-usd">
              <img src="./images/s2.png" alt="" />
              <div className="sgt-text">
                <h4>Saroj Shakya</h4>
                <span>PHP Developer</span>
              </div>
              <span><i className="la la-plus"></i></span>
            </div>
            <div className="suggestion-usd">
              <img src="./images/s3.png" alt="" />
              <div className="sgt-text">
                <h4>Poonam</h4>
                <span>Wordpress Developer</span>
              </div>
              <span><i className="la la-plus"></i></span>
            </div>
            <div className="suggestion-usd">
              <img src="./images/s4.png" alt="" />
              <div className="sgt-text">
                <h4>Bill Gates</h4>
                <span>C &amp; C++ Developer</span>
              </div>
              <span><i className="la la-plus"></i></span>
            </div>
            <div className="suggestion-usd">
              <img src="./images/s5.png" alt="" />
              <div className="sgt-text">
                <h4>Jessica William</h4>
                <span>Graphic Designer</span>
              </div>
              <span><i className="la la-plus"></i></span>
            </div>
            <div className="suggestion-usd">
              <img src="./images/s6.png" alt="" />
              <div className="sgt-text">
                <h4>Saroj Shakya</h4>
                <span>PHP Developer</span>
              </div>
              <span><i className="la la-plus"></i></span>
            </div>
            <div className="view-more">
              <a href="./index.html#" title="">View More</a>
            </div>
          </div>
        </div>
        <div className="tags-sec full-width" style={{display: "none"}}>
          <ul>
            <li>
              <a href="./index.html#" title="">Help Center</a>
            </li>
            <li><a href="./index.html#" title="">About</a></li>
            <li>
              <a href="./index.html#" title="">Privacy Policy</a>
            </li>
            <li>
              <a href="./index.html#" title=""
                >Community Guidelines</a>
            </li>
            <li>
              <a href="./index.html#" title="">Cookies Policy</a>
            </li>
            <li><a href="./index.html#" title="">Career</a></li>
            <li><a href="./index.html#" title="">Language</a></li>
            <li>
              <a href="./index.html#" title="">Copyright Policy</a>
            </li>
          </ul>
          <div className="cp-sec">
            <img src="./images/lec-full.png" alt="" />
            <p>
              <img src="./images/cp.png" alt="" />Copyright 2019
            </p>
          </div>
        </div>
      </div>
    }
}
export default Userprofile;