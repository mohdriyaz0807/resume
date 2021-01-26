import React from 'react'

const Skill = (props) => {
        var skillmessage = props.data.skillmessage;
    var skills = props.data.skills.map((skills)=>{
        var icon = 'images/'+skills.icon
        return (
          <div className='two columns' key={skills.name}>
            <div >{skills.name}</div>
            <img className='icon' src={icon} alt={skills.name}/>
          </div>
        )
      })
    
    return (
      <section id='skill'>
      <div className="row skill">

      <div className="twelve columns header-col">
        <h1>Skills</h1>
      </div>

      <div className="twelve columns main-col">
        <div>{skillmessage}</div>

      <div className="bars">
        <div className="row skills">
        {skills}
      </div>
      </div>
    </div>
    </div>
    </section>
    )
}

export default Skill
