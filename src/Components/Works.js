import React, { Component } from 'react';

class Works extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">            <div className="item-wrap">
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                    <h6>Technologies Used</h6>
                    <ul>{projects.stack.map(ele=>{
                      return(<li>{ele}</li>)
                    })}</ul>
                  </div>
                </div>
            </div>
            <br/>
              <a href={projects.deployed} target="_blank"><button type="button">Live Site</button></a>
              <a href={projects.github} target="_blank"><button type="button">View Code</button></a>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>My Works</h1>

            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Works;
