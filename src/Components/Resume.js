import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '35px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Resume(props) {
  const classes = useStyles();
  var education = props.data.education.map(function(education){
    return <div key={education.school}><h3>{education.school}</h3>
    <h5 className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></h5>
    </div>
  })
  var work = props.data.work.map(function(work){
    return <div key={work.company}><h3>{work.company}</h3>
        <h5 className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></h5>
        
    </div>
  })


  return (
    <section id='Exp'>
    <h1 className='head'>Experience / Education</h1>
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
          <WorkIcon fontSize="large" color="secondary"/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={2} className={classes.paper}>
            <Typography variant="h6" component="h1">
              <h1>Experience</h1>
            </Typography>
            <Typography >{work}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <CastForEducationIcon fontSize="large" color="secondary"/>
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={2} className={classes.paper}>
            <Typography variant="h6" component="h1">
              <h1>Graduation</h1>
            </Typography>
            <Typography className='data'>{education}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
    </section>
  );
}
