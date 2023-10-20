import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import IMG20220815112254 from "./ameya profile1.png"
class Profile extends React.Component {
render() {
return (
<div className="container">
<strong><h2>{this.props.name}</h2></strong>
<div className='row'>
<div className='col-md-4'>
<img src={IMG20220815112254} alt="Ameya"/>
</div>
</div>
<p>
</p>
<p>
{this.props.bio}
</p>
<p>
<hr/>
<h2><i>Interests :</i></h2>
<p>
<h4>Boxing</h4>
<h4>Ballet Dancing</h4>
<h4>Watching horror movies</h4>
</p>
<br/>
<hr/>
<strong><h3><i>Personal Details :</i></h3></strong>
<p>Phone no: 7070707070</p>
<p>Email Id: amyboii@gmail.com</p>
<p>LinkedIn: <a href="https://www.linkedin.com/in/ameya-angne-02a728199"
target="_blank"><b>https://www.linkedin.com/in/ameya-angne-02a728199</b></a></p>
</p>
<p>
<Link to={'/contact'}>Contact Me</Link>
</p>
</div>
);
}
}
class Home extends React.Component {
render() {
const d = { name: "Ameya Angne", bio: "Passionate boxer and sports enthusiast." };
return (
<div>
<Profile name={d.name} bio={d.bio} />
</div>
);
}
}
export default Home;