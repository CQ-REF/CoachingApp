import * as React from "react";
import * as PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton/IconButton";
import ClassroomClimateIconImage from "../../../assets/images/ClassroomClimateIconImage.svg";
import GenerateReportImage from "../../../assets/images/GenerateReportImage.svg";
import { withStyles } from "@material-ui/core/styles";
// import spreadsheetData from "../../../SPREADSHEET_SECRETS";
import FirebaseContext from "../../../components/Firebase/FirebaseContext";
import AppBar from "../../../components/AppBar";
import Typography from "@material-ui/core/Typography/Typography";
// import { ImmortalDB } from "immortal-db";
import moment from "moment";
import NotesListDetailTable from "../../../components/ResultsComponents/NotesListDetailTable.tsx";
import BehaviorCounterResults from "../../../components/ResultsComponents/BehaviorCounterResults.js";
import AverageToneRating from "../../../components/ResultsComponents/AverageToneRating.js";
import ClimateTrendsGraph from "../../../components/ClassroomClimateComponent/ResultsComponents/ClimateTrendsGraph.tsx";
import ResultsLayout from '../../../components/ResultsLayout';
import BehaviorResponsesSummaryChart from "../../../components/ClassroomClimateComponent/ResultsComponents/BehaviorResponsesSummaryChart";
import BehaviorResponsesDetailsChart from "../../../components/ClassroomClimateComponent/ResultsComponents/BehaviorResponsesDetailsChart";
import ClimateCoachingQuestions from "../../../components/ClassroomClimateComponent/ResultsComponents/ClimateCoachingQuestions";
import ClimateSummarySlider from "../../../components/ClassroomClimateComponent/ResultsComponents/ClimateSummarySlider";


const styles: object = {
  root: {
    flexGrow: 1,
    height: "100vh",
    flexDirection: "column",
    overflow: "auto"
  },
  main: {
    flex: 1,
    height: "90%",
    marginTop: "10vh"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  viewButtons: {
    minWidth: 150,
    textAlign: "center"
  },
  buttonsList: {
    position: "relative",
    top: "3vh"
  },
  title: {
    position: "relative",
    left: "33%",
    top: "10%"
  },
  secondTitle: {
    position: "relative",
    left: "40%",
    top: "10%"
  },
  chart: {
    position: "relative",
    left: "7%",
    top: "5%"
  },
  generateReport: {
    position: "relative",
    right: "10%",
    top: "76%",
    left: "10%"
  },
  resultsContent: {
    height: "60vh",
    position: "relative",
    top: "8vh"
  }
};

interface Props {
  classes: Style,
  location: { state: { teacher: { id: string }}},
}

interface Style {
  root: string,
  main: string,
  grow: string,
  menuButton: string,
  viewButtons: string,
  buttonsList: string,
  title: string,
  secondTitle: string,
  chart: string,
  generateReport: string,
  resultsContent: string
}

interface State {
  disapprovalBehaviorCount: number,
  redirectionsBehaviorCount: number,
  nonspecificBehaviorCount: number,
  specificBehaviorCount: number,
  averageToneRating: number,
  sessionId: string,
  trendsDates: Array<string>,
  trendsPos: Array<number>,
  trendsNeg: Array<number>,
  actionPlanExists: boolean
}

/**
 * classroom climate results
 * @class ClassroomClimateResultsPage
 */
class ClassroomClimateResultsPage extends React.Component<Props, State> {
  /**
   * @param {Props} props 
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      disapprovalBehaviorCount: 0,
      redirectionsBehaviorCount: 0,
      nonspecificBehaviorCount: 0,
      specificBehaviorCount: 0,
      averageToneRating: 0,
      sessionId: '',
      trendsDates: [],
      trendsPos: [],
      trendsNeg: [],
      notes: [],
      actionPlanExists: false
    };
  }

  /** lifecycle method invoked after component mounts */
  componentDidMount() {
    const firebase = this.context;
    firebase.fetchBehaviourTypeCount(this.state.sessionId);
    firebase.fetchAvgToneRating(this.state.sessionId);
  }

  /**
   * @param {string} teacherId
   */
  handleTrendsFetching = (teacherId: string): void => {
    const firebase = this.context;
    const dateArray: Array<string> = [];
    const posArray: Array<number> = [];
    const negArray: Array<number> = [];
    firebase.fetchBehaviourTrend(teacherId).then((dataSet: Array<object>) => {
      console.log("dataset is: ", dataSet);
      dataSet.forEach((data: {dayOfEvent: {value: string}, positive: number, negative: number}) => {
        dateArray.push(moment(data.dayOfEvent.value).format("MMM Do YYYY"));
        posArray.push(data.positive);
        negArray.push(data.negative);
      });
      this.setState({
        trendsDates: dateArray,
        trendsPos: posArray,
        trendsNeg: negArray,
      });
    });
  };

  /**
   * @param {string} sessionId
   */
  handleNotesFetching = (sessionId: string): void => {
    const firebase = this.context;
    firebase.handleFetchNotesResults(sessionId).then(notesArr => {
      console.log(notesArr);
      const formattedNotesArr = [];
      notesArr.map(note => {
        const newTimestamp = new Date(
          note.timestamp.seconds * 1000
        ).toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true
        });
        formattedNotesArr.push({
          id: note.id,
          content: note.content,
          timestamp: newTimestamp
        });
      });
      console.log(formattedNotesArr);
      this.setState({
        notes: formattedNotesArr
      });
    });
  };

  trendsFormatData = () => {
    return {
      labels: this.state.trendsDates,
      datasets: [
        {
          label: "Disapproval",
          data: this.state.trendsNeg,
          backgroundColor: "#ec2409",
          borderColor: "#ec2409",
          fill: false,
          lineTension: 0,
        },
        {
          label: "Positive",
          data: this.state.trendsPos,
          backgroundColor: "#0988ec",
          borderColor: "#0988ec",
          fill: false,
          lineTension: 0,
        }
      ]
    };
  };

  /**
   * @param {SyntheticEvent} event
   */
  changeSessionId = (event: React.SyntheticEvent) => {
    console.log("sessionId", event.target.value);
    let specificCount = 0;
    let nonspecificCount = 0;
    let disapprovalCount = 0;
    let redirectionCount = 0;
    this.setState(
      {
        sessionId: event.target.value
      },
      () => {
        this.handleNotesFetching(this.state.sessionId);
        const firebase = this.context;
        firebase.fetchAvgToneRating(this.state.sessionId).then((json: Array<{average: number}>) =>
          json.forEach(toneRating => {
            this.setState({
              averageToneRating: toneRating.average
            });
          })
        );
        firebase.getActionPlan(this.state.sessionId).then((actionPlanData) => {
          if (actionPlanData.length>0) {
            console.log('actionplan data: ', actionPlanData>0)
            this.setState({
              actionPlanExists: true
            })
          } else {
            this.setState({
              actionPlanExists: false
            })
          }
        }).catch(() => {
          console.log('unable to retrieve action plan')
        })
        firebase.fetchBehaviourTypeCount(this.state.sessionId).then((json: Array<{behaviorResponse: string, count: number}>) => {
          json.forEach(behavior => {
            if (behavior.behaviorResponse === "specificapproval") {
              specificCount = behavior.count;
            } else if (behavior.behaviorResponse === "nonspecificapproval") {
              nonspecificCount = behavior.count;
            } else if (behavior.behaviorResponse === "disapproval") {
              disapprovalCount = behavior.count;
            } else if (behavior.behaviorResponse === "redirection") {
              redirectionCount = behavior.count;
            }
          });
          this.setState({
            redirectionsBehaviorCount: redirectionCount,
            disapprovalBehaviorCount: disapprovalCount,
            nonspecificBehaviorCount: nonspecificCount,
            specificBehaviorCount: specificCount
          });
        });
      }
    );
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  /**
   * render function
   * @return {ReactNode}
   */
  render(): React.ReactNode {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ResultsLayout
          teacherId={this.props.location.state.teacher.id}
          magic8="Classroom Climate"
          handleTrendsFetch={this.handleTrendsFetching}
          observationType="climate"
          summary={
            <ClimateSummarySlider
              positiveResponses={this.state.specificBehaviorCount+this.state.nonspecificBehaviorCount}
              negativeResponses={this.state.redirectionsBehaviorCount+this.state.disapprovalBehaviorCount}
              averageToneRating={this.state.averageToneRating}
            />
          }
          details={
            <BehaviorResponsesDetailsChart
              disapprovalBehaviorCount={this.state.disapprovalBehaviorCount}
              redirectionsBehaviorCount={this.state.redirectionsBehaviorCount}
              nonspecificBehaviorCount={this.state.nonspecificBehaviorCount}
              specificBehaviorCount={this.state.specificBehaviorCount}
            />
          }
          trendsGraph={<ClimateTrendsGraph data={this.trendsFormatData}/>}
          changeSessionId={this.changeSessionId}
          sessionId={this.state.sessionId}
          notes={this.state.notes}
          questions={<ClimateCoachingQuestions />}
          teacherFirstName={this.props.location.state.teacher.firstName}
          teacherLastName={this.props.location.state.teacher.lastName}
          actionPlanExists={this.state.actionPlanExists}
        />
      </div>
    );
  }
}


ClassroomClimateResultsPage.contextType = FirebaseContext;
export default withStyles(styles)(ClassroomClimateResultsPage);