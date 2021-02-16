import React from 'react'
import { CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skill = (props) => {
        var skillmessage = props.data.skillmessage;
    var skills = props.data.skills.map((skills)=>{
        var icon = 'images/'+skills.icon
        var percent = skills.percent
        return (
          <div className='two columns' key={skills.name}>
            <div className='progress'>{skills.name}- {percent}%</div>
            <CircularProgressbarWithChildren counterClockwise   value={percent}>
            <img className='icon' src={icon} alt={skills.name} />
            </CircularProgressbarWithChildren>
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
