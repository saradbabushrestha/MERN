import { Component } from "react";
class Postfeedbar extends Component{
    render(){
        return   <div className="posts-section">
       {[1,2,3].map((a,b) => <div key ={b} className="post-bar">
<div className="post_topbar">
<div className="usy-dt">
<img src="./images/5.jpg" alt="" />
<div className="usy-name">
<h3>Nischal shakhya</h3>
<span>just now</span>
</div>
</div>
<div className="ed-opts">
<a
href="./index.html#"
title=""
className="ed-opts-open"
><i className="la la-ellipsis-v"></i></a>
<ul className="ed-options">
<li>
  <a href="./index.html#" title="">Edit Post</a>
</li>
<li>
  <a href="./index.html#" title="">Unsaved</a>
</li>
<li>
  <a href="./index.html#" title="">Unbid</a>
</li>
<li>
  <a href="./index.html#" title="">Close</a>
</li>
<li><a href="./index.html#" title="">Hide</a></li>
</ul>
</div>
</div>
<div className="epi-sec">
<ul className="descp">
<li>
<img src="./images/icon8.png" alt="" /><span
  >Epic Coder</span>
</li>
<li>
<img src="./images/icon9.png" alt="" /><span
  >Kathmandu</span>
</li>
</ul>
<ul className="bk-links" style={{display: "none"}}>
<li>
<a href="./index.html#" title=""
  ><i className="la la-bookmark"></i></a>
</li>
<li>
<a href="./index.html#" title=""
  ><i className="la la-envelope"></i></a>
</li>
</ul>
</div>
<div className="job_descp">
<h3>Mobile Application Developer</h3>
<ul className="job-dt">
<li>
<a href="./index.html#" title="">Full Time</a>
</li>
<li><span>$40 / hr</span></li>
</ul>
<p>
Like web application development, mobile application development has its roots in more traditional software development. One critical difference, however, is that mobile apps are often written specifically to take advantage of the unique features of a particular mobile device. For example, a gaming app might be written to take advantage of the iPhone's accelerometer or a mobile health app might be written to take advantage of a smartwatch's temperature sensor....
<a href="./index.html#" title="">view more</a>
</p>
<ul className="skill-tags">
<li><a href="./index.html#" title="">Andriod Studio</a></li>
<li><a href="./index.html#" title="">PHP</a></li>
<li><a href="./index.html#" title="">Python</a></li>
<li>
<a href="./index.html#" title="">Javascript</a>
</li>
<li>
<a href="./index.html#" title="">Flutter</a>
</li>
</ul>
</div>
<div className="job-status-bar">
<ul className="like-com">
<li>
<a href="./index.html#"
  ><i className="fas fa-heart"></i> Like</a>
<img src="./images/liked-img.png" alt="" />
<span>43</span>
</li>
<li>
<a href="./index.html#" className="com"
  ><i className="fas fa-comment-alt"></i> Comment
  19</a>
</li>
</ul>
<a href="./index.html#"
><i className="fas fa-eye"></i>Views 89</a>
</div>
</div>)}
</div>
          
    }
};
export default Postfeedbar;