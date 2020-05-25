import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Iliya Tsvibel</h2>
            <img
              src="https://iliya-hacker.github.io/iliya-hacker/assets/2-removebg-preview-mir.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ fontSize: '20px', width: '75%', margin: 'auto', paddingTop: '1em'}}>I’m a beginner but good Full Stack Software Engineer with experience in React JS and .NET Core.
                I love to program and I love working with people to do things bigger than I could accomplish alone.
                I have spent the last three years developing my programming skills as an analyst and process engineer at Intel corporation and as a student in "HackerU" college. I love process of developing and solving customer problems.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+972) 546-800559
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-whatsapp" aria-hidden="true"/>
                    (+972) 546-800559
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-telegram" aria-hidden="true"/>
                    (+972) 546-800559
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    zabaron@gmail.com
                  </ListItemContent>
                </ListItem>
        
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
