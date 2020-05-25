import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div className="aboutme-body">
        <Grid className="aboutme-grid">
          <Cell col={10}>
            <h2>Iliya Tsvibel</h2>
            <img
              src="https://iliya-hacker.github.io/iliya-hacker/assets/pp-wbg-o.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '100%', margin: 'auto', paddingTop: '1em'}}>
             <h4>I’m a beginner but good Full Stack Software Engineer with experience in React JS and .NET Core.
                I love to program and I love working with people to do things bigger than I could accomplish alone.
                I have spent the last three years developing my programming skills as an analyst and process engineer at Intel corporation and as a student in "HackerU" college. I love process of developing and solving customer problems.
             </h4>
             </p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
