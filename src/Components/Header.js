import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {

    if(this.props.data){
       var linkedin = this.props.data.linkedin;
       var github = this.props.data.github;
       var email = this.props.data.email;
      var name = this.props.data.name;
      var description= this.props.data.description;
    }

    return (
      <header id="home">
      <ParticlesBg color='#73ff00' num={50} type="cobweb" bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
         
         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
	         <li><a className="smoothscroll" href="#skill">Skills</a></li>
	         <li><a className="smoothscroll" href="#Exp">Education</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h2 className="responsive-headline">Hi, I'm {name}</h2>
            <h3>{description}</h3>
            <hr />
            <ul className="social">
               <a href={github} target="_blank" className="github-btn"><i className="fa fa-github"></i></a> 
               <a href={linkedin} target="_blank" className="linkedin-btn"><i className="fa fa-linkedin"></i></a>
               <a href={email} target="_blank" className="mail-btn"><i className="fa fa-envelope"></i></a>
            </ul>
         </div>
      </div>

   </header>
    );
  }
}

export default Header;
