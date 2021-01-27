import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var message = this.props.data.contactmessage;
    }

   let sub=''
   let msg=''   
    const handleChange=(e)=>{
       if(e.target.name==="subject"){
      sub=e.target.value
       }else{
         msg=e.target.value
         }
      }
      const handleClick = () => {
        window.open(
          `mailto:mohdriyaz0807@gmail.com?subject=${sub}&body=${msg}`
        )
      }
      
    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="nine columns">

               <div id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <input placeholder="Name *" type="text" defaultValue="" size="35" id="contactName" name="subject" onChange={handleChange}/>
                  </div>

                  <div>
						   <input placeholder="Email *" type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" />
                  </div>

                  <div >
                     <textarea placeholder="Message *" cols="20" rows="3" id="contactMessage" name="body" onChange={handleChange}></textarea>
                  </div>
                  <div>
                     <button className="submit" type="button" onClick={handleClick}>Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </div>

           <div id="message-warning"> Error </div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>

            <aside className="three columns footer-widgets">
               <div className="widget widget_contact">
					   <h3>Address and Phone</h3>
					   <h6 className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </h6>
				   </div>
            </aside>
      </div>
   </section>
      );
   }
}

export default Contact;