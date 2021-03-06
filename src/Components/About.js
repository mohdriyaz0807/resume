import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about" >
      <div className="row" >
        <div className="twelve columns head">
            <h1 >About Me</h1>
      </div>
      </div>
      <div>
      <div className='row'>
         <div className="six columns main-col profile-pic">
            <img src={profilepic} alt="Profile Pic" />
         </div>
         <div className="six columns main-col">
            <h2>{bio}</h2>
            <div className="buttonDiv">
            <a href={resumeDownload} target="_blank" className="res-button"><i className="fa fa-file"></i>  Resume</a>
         </div>
         </div>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
