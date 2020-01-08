import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { HorizontalBar } from "react-chartjs-2";

const styles = {};

/**
 * specifies data sets (and formatting) for the teacher behaviors details horizontal bar
 * @type {{datasets: *[], labels: string[][]}}
 */
const teacherBehaviorsData = {
  labels: [
    "Participating in children’s play",
    "Asking questions to check for understanding or extend children’s thinking",
    "Encouraging children to share, work, or interact with each other",
    "Helping children find the words to communicate"
  ],
  datasets: [
    {
      label: "Number of Times Observed",
      backgroundColor: "#90c4ed",
      borderColor: "#0988EC",
      borderWidth: 2,
      data: [65, 59, 80, 81]
    }
  ]
};

class TeacherBehaviorsDetailsHorizontalBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <HorizontalBar data={teacherBehaviorsData} width="650" height="400" />
    );
  }
}

TeacherBehaviorsDetailsHorizontalBar.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default withStyles(styles)(TeacherBehaviorsDetailsHorizontalBar);
