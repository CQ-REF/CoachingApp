import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FirebaseContext from '../../../components/Firebase/context';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import Fab from '@material-ui/core/Fab';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Grid from '@material-ui/core/Grid';
import AppBar from '../../../components/AppBar';
import LabeledInfo from '../../../components/MyTeachersComponents/LabeledInfo';
import { ReactComponent as TransitionTimeSvg } from '../../../assets/icons/TransitionTime.svg';
import { ReactComponent as StudentEngagementSvg } from '../../../assets/icons/StudentEngagement.svg';
import { ReactComponent as SequentialActivitiesSvg } from '../../../assets/icons/SequentialActivities.svg';
import { ReactComponent as ListeningToChildrenSvg } from '../../../assets/icons/ListeningtoChildren.svg';
import { ReactComponent as MathInstructionSvg } from '../../../assets/icons/MathInstruction.svg';
import { ReactComponent as LevelOfInstructionSvg } from '../../../assets/icons/LevelofInstruction.svg';
import { ReactComponent as ClassroomClimateSvg } from '../../../assets/icons/ClassroomClimate.svg';
import { ReactComponent as AssocCoopInteractionsSvg } from '../../../assets/icons/AssocCoopInteractions.svg';
// import Firebase from "../../../components/Firebase";

const styles = {
  root: {
    flexGrow: 1,
    width: '100%'
  },
  container: {
    //borderColor: '#000000',
    //borderWidth: 2,
    //borderStyle: 'solid',
    margin: '2% 8% 0em 8%',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    //justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  button: {
    color: '#333333',
    //borderWidth: 1,
    //borderColor: '#333333',
    //borderStyle: 'solid',
    borderRadius: 3,
    textTransform: 'none'
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  teacherCard: {
    //borderWidth: 2,
    //borderColor: '#7FFF00',
    //borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexGrow: 1,
    marginTop: '1em',
    width: '50%',
    fontSize: '1.5em'
  },
  magicEightCard: {
    //borderWidth: 2,
    //borderColor: '#00FFFF',
    //borderStyle: 'solid',
    marginTop: '1.5em',
    width: '50%',
    flexGrow: 1
  },
  teacherHeader: {
    //borderWidth: 2,
    //borderColor: '#DC143C',
    //borderStyle: 'solid',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '2em',
    marginTop: '2em',
    width: '50%'
  },
  actionButton: {
    marginRight: '2em'
  }

};

class TeacherDetail extends Component {

  constructor (props) {
    super(props);
    this.state = {
      inputFirstName: "Katherine",
      inputLastName: "Newman",
      inputSchool: "Ruby Major Elementary",
      inputEmail: "knewman@vanderbilt.edu",
      inputNotes: "Really sensitive about her tone\nWorking on behavior management",
      isEditing: false,
      isDeleting: false
    };


  }

  render() {
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <FirebaseContext.Consumer>
          {firebase => <AppBar firebase={firebase} />}
        </FirebaseContext.Consumer>
        <div className={classes.container}>
          <Button variant="contained" size="medium" className={classes.button}>
            <ChevronLeftRoundedIcon />
            <b>My Teachers</b>
          </Button>
          <div className={classes.teacherHeader}>
                <span>
                  <b>Katherine Newman</b><br/>
                  Teacher
                </span>
            <div style={{marginRight: '2em'}}>
              <Fab aria-label="Edit" className={classes.actionButton} style={{backgroundColor: '#FDBF28'}}>
                <EditOutlinedIcon style={{color: '#FFFFFF'}} />
              </Fab>
              <Fab aria-label="Delete" className={classes.actionButton} style={{backgroundColor: '#DC143C'}}>
                <DeleteForeverIcon style={{color: '#FFFFFF'}}/>
              </Fab>
            </div>
          </div>
          <Grid direction="row" justify="space-between" alignItems="stretch" className={classes.contentContainer}>
            <div className={classes.teacherCard}>
              <div style={{display:'flex', flexDirection:'row'}}>
                <LabeledInfo label="First Name" field="Katherine"/>
                <LabeledInfo label="Last Name" field="Newman"/>
              </div>
              <LabeledInfo label="School" field="Ruby Major Elementary"/>
              <LabeledInfo label="Email" field="knewman@vanderbilt.edu"/>
              <LabeledInfo label="Notes" field="Really sensitive about her tone\nWorking on behavior management"/>
            </div>
            <div className={classes.magicEightCard}>

            </div>
          </Grid>
        </div>
      </div>
    )
  }

}

TeacherDetail.propTypes = {
  //teacher: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

TeacherDetail.contextType = FirebaseContext;
export default withStyles(styles)(TeacherDetail);
