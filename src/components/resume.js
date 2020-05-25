import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://iliya-hacker.github.io/iliya-hacker/assets/4-removebg-preview.png"
                alt="avatar"
                style={{height: '250px'}}
                 />
            </div>

            <h2 style={{paddingTop: '.1em'}}>Iliya Tsvibel </h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Dev. framework - ASP.NET Core; Node.JS; Angular JS; React.JS.
               Development languages – OOP: C#, JS.
               Internet development technologies – SOA, Ajax, jQuery, HTML, JS, CSS, WEB.API, Word Press.
               Databases technologies – MS SQL Server, Firebase, ADO.NET.
               Computer applications including Mathematical Analysis Software: EXEL, SQLPatchFinder, JMP, SPC.

           </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Rishon LeZion, Israel</p>
            <h5>Phone</h5>
            <p>(972) 546-800559</p>
            <h5>Email</h5>
            <p>zabaron@gmail.com</p>
            <h5>GitHub</h5>
            <p>https://github.com/Iliya-hacker</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
          <h2>Skills</h2>
              <Skills
                skill="React JS"
                progress={75}
                />
                <Skills
                  skill=".NET Core"
                  progress={75}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="SQL"
                      progress={80}
                      />
                        <Skills
                      skill="HTML"
                      progress={70}
                      />
                         <Skills
                      skill="CSS"
                      progress={70}
                      />
                       <hr style={{borderTop: '3px solid #e22947'}} />
                       <h2>Experience</h2>

                 <Experience
                    startYear={2017}
                     endYear={"Now"}
     jobName="Process and Equipment Engineer / Data Analyst at Intel Corp."
  jobDescription=""
  // eslint-disable-next-line
  jobDescription="• JS, AJAX, JSON, HTML, CSS for building data output of analytical reports.
                  • Establishing communication between control PC and production tools, OS settings and maintenance.
                  • Creating SQL queries and scripts for building graphic analysis.
                  • Process monitoring, data collection and troubleshooting; applying Statistical Process Control (SPC and JMP) by using big data analysis based on Machine Learning."
  />

  <Experience
    startYear={2016}
    endYear={2017}
    jobName="Materials Engineer at Curapipe Systems Ltd."
    jobDescription="Research and development of new technologies.
                    Definition and execution design of experiments and root cause analysis
                    Writing reports based on experiments.
                    Technical and scientific consultation.
                    Trips abroad for technology transfer.
                    Technical management of engineers and technicians team."
    />

  <Experience
    startYear={2015}
    endYear={2016}
    jobName="Chemist / Head of the Laboratory at Ditron Dental"
    jobDescription="• Responsible for the chemical laboratory."
    />

  <Experience
    startYear={2013}
    endYear={2015}
    jobName="Technologist/Process Engineer/Chemist at AMS Membrane Technologies"
    jobDescription="Effective interaction with R&D team and other technicians. Implementation of new equipment in accordance to the technical policy of the company."
    />
  <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Education</h2>


            <Education
              startYear={2018}
              endYear={2020}
              schoolName="HackerU"
              schoolDescription="Full Stack Software Development; .Net, Javascript, Python |
                 Object Oriented Programming and Advance C# 7 Programming
                 Microsoft SQL Server
                 Data Access with .NET
                 Development using WPF & UWP - Cross Platform Desktop Apps	
                 Programming HTML/HTML5, CSS/CSS3 and Java Script - Web Client side
                 Mobile Hybrid Development - using Angular, React
                 Server side and Client side Development using ASP.NET Core – WebAPI MVC
                 Implementing SOA With WCF"
               />

               <Education
                 endYear={"Graduated in 2013"}
                 schoolName="Jerusalem College of Engineering"
                 schoolDescription="Bachelor of Applied Science (B.Sc.) | Advanced Material Engineering"
                  />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
