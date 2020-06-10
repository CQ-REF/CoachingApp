import React from "react";
import PropTypes from "prop-types";
import {createMuiTheme, withStyles} from "@material-ui/core/styles";
import {blue, deepOrange, indigo, lightGreen, orange, red, white} from "@material-ui/core/colors";
import ChildWaitingImage from "../../../assets/images/ChildWaitingImage.svg";
import WaitingInLineImage from "../../../assets/images/WaitingInLineImage.svg";
import WalkingImage from "../../../assets/images/WalkingImage.svg";
import ClassroomRoutinesImage from "../../../assets/images/ClassroomRoutinesImage.svg";
import BMDImage from "../../../assets/images/BMDImage.svg";
import OtherImage from "../../../assets/images/OtherImage.svg";
import {toggleNewTransitionType} from "../../../state/actions/transition-time";
import {connect} from 'react-redux';

import {Button, Grid} from '@material-ui/core';

const styles = theme => ({
    button: {
        margin: theme.spacing(1),
        width: 130,
        height: 130,
        textAlign: "center"
    },
    label: {
        flexDirection: "column ",
        textAlign: "center"
    }
});

const raisedThemes = createMuiTheme({
    palette: {
        waitingColor: {
            backgroundColor: lightGreen[300],
            color: "#000",
            textColor: white,
            primaryTextColor: white,
            boxShadow: "8px 8px #a9a9a9"
        },
        travelingColor: {
            backgroundColor: orange[400],
            color: "#000",
            textColor: white,
            primaryTextColor: white,
            boxShadow: "8px 8px #a9a9a9"
        },
        childWaitingColor: {
            backgroundColor: deepOrange[400],
            color: "#000",
            textColor: white,
            primaryTextColor: white,
            boxShadow: "8px 8px #a9a9a9"
        },
        classroomRoutinesColor: {
            backgroundColor: blue[300],
            color: "#000",
            textColor: white,
            primaryTextColor: white,
            boxShadow: "8px 8px #a9a9a9"
        },
        bmiColor: {
            backgroundColor: red["A200"],
            color: "#000",
            textColor: white,
            primaryTextColor: white,
            boxShadow: "8px 8px #a9a9a9"
        },
        otherColor: {
            backgroundColor: indigo["A200"],
            color: "#000",
            textColor: white,
            primaryTextColor: white,
            boxShadow: "8px 8px #a9a9a9"
        }
    }
});

const themes = createMuiTheme({
    palette: {
        waitingColor: {
            backgroundColor: lightGreen[300],
            color: "#000",
            textColor: white,
            primaryTextColor: white
        },
        travelingColor: {
            backgroundColor: orange[400],
            color: "#000",
            textColor: white,
            primaryTextColor: white
        },
        childWaitingColor: {
            backgroundColor: deepOrange[400],
            color: "#000",
            textColor: white,
            primaryTextColor: white
        },
        classroomRoutinesColor: {
            backgroundColor: blue[300],
            color: "#000",
            textColor: white,
            primaryTextColor: white
        },
        bmiColor: {
            backgroundColor: red["A200"],
            color: "#000",
            textColor: white,
            primaryTextColor: white
        },
        otherColor: {
            backgroundColor: indigo["A200"],
            color: "#000",
            textColor: white,
            primaryTextColor: white
        }
    },
    overrides: {
        MuiButton: {
            raisedPrimary: {
                color: "white"
            },
            textColor: white,
            primaryTextColor: white
        }
    }
});

const clickedThemes = createMuiTheme({
    palette: {
        waitingColor: {
            backgroundColor: lightGreen[100],
            color: "#000",
            textColor: white,
            primaryTextColor: white
        },
        travelingColor: {
            backgroundColor: orange[100],
            color: "#000",
            textColor: white,
            primaryTextColor: white
        },
        childWaitingColor: {
            backgroundColor: deepOrange[100],
            color: "#000",
            textColor: white,
            primaryTextColor: white
        },
        classroomRoutinesColor: {
            backgroundColor: blue[100],
            color: "#000",
            textColor: white,
            primaryTextColor: white
        },
        bmiColor: {
            backgroundColor: red["A100"],
            color: "#000",
            textColor: white,
            primaryTextColor: white
        },
        otherColor: {
            backgroundColor: indigo["A100"],
            color: "#000",
            textColor: white,
            primaryTextColor: white
        }
    },
    overrides: {
        MuiButton: {
            raisedPrimary: {
                color: "white"
            },
            textColor: white,
            primaryTextColor: white
        }
    }
});

/**
 * transition type buttons
 * @class TransitionTypeSel
 */
class TransitionTypeSel extends React.Component {
    /**
     * @param {Props} props
     */
    constructor(props) {
        super(props);

        this.state = {
            selected: null
        };
    }

    /**
     * invoked after component updates
     * @param {prevProps} prevProps
     */
    componentDidUpdate = prevProps => {
        if (!prevProps.transitionEnded && this.props.transitionEnded) {
            this.setState({
                selected: null
            });
        }
    };

    /**
     * @param {string} type
     */
    handleButtonChange = type => {
        this.props.handleTransitionType(type);
        this.props.toggleNewTransitionType(type);
        this.setState({
            selected: type
        });
        if (type === "other") {
            this.props.handleNotes(true);
        }
    };

    /**
     * render function
     * @return {ReactElement}
     */
    render() {
        const {classes} = this.props;

        return (
            <div>
                <Grid container alignItems="flex-start" direction={"row"} style={{fontFamily: 'Arimo'}}>
                    <Grid
                        item
                        xs={6}
                        align="center"
                        alignItems="center"
                        justify="center"
                        direction="column"
                    >
                        <Grid item>
                            <Button
                                onClick={() => this.handleButtonChange("waiting")}
                                classes={{root: classes.button, label: classes.label}}
                                variant="contained"
                                style={
                                    this.state.selected === "waiting"
                                        ? raisedThemes.palette.waitingColor
                                        : this.state.selected === null
                                        ? themes.palette.waitingColor
                                        : clickedThemes.palette.waitingColor
                                }
                            >
                                <img
                                    alt="Waiting in line"
                                    src={WaitingInLineImage}
                                    height="100"
                                    width="100"
                                />
                            </Button>
                        </Grid>
                        <Grid item>
                            Waiting in line/
                            <br/>
                            lining up
                        </Grid>
                        <br></br>
                        <Grid item>
                            <Button
                                onClick={() => this.handleButtonChange("traveling")}
                                classes={{root: classes.button, label: classes.label}}
                                variant="contained"
                                style={
                                    this.state.selected === "traveling"
                                        ? raisedThemes.palette.travelingColor
                                        : this.state.selected === null
                                        ? themes.palette.travelingColor
                                        : clickedThemes.palette.travelingColor
                                }
                            >
                                <img
                                    alt="Walking"
                                    src={WalkingImage}
                                    height="100"
                                    width="100"
                                />
                            </Button>
                        </Grid>
                        <Grid item>
                            Traveling outside
                            <br/>
                            the classroom
                        </Grid>
                        <br></br>
                        <Grid item>
                            <Button
                                onClick={() => this.handleButtonChange("child waiting")}
                                classes={{root: classes.button, label: classes.label}}
                                variant="contained"
                                style={
                                    this.state.selected === "child waiting"
                                        ? raisedThemes.palette.childWaitingColor
                                        : this.state.selected === null
                                        ? themes.palette.childWaitingColor
                                        : clickedThemes.palette.childWaitingColor
                                }
                            >
                                <img
                                    alt="Child waiting"
                                    src={ChildWaitingImage}
                                    height="100"
                                    width="100"
                                />
                            </Button>
                        </Grid>
                        <Grid item>Children waiting on teacher/materials</Grid>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        align="center"
                        alignItems="center"
                        justify="center"
                        direction="column"
                    >
                        <Grid item>
                            <Button
                                onClick={() => this.handleButtonChange("classroom routines")}
                                classes={{root: classes.button, label: classes.label}}
                                variant="contained"
                                style={
                                    this.state.selected === "classroom routines"
                                        ? raisedThemes.palette.classroomRoutinesColor
                                        : this.state.selected === null
                                        ? themes.palette.classroomRoutinesColor
                                        : clickedThemes.palette.classroomRoutinesColor
                                }
                            >
                                <img
                                    alt="classroom routines"
                                    src={ClassroomRoutinesImage}
                                    height="100"
                                    width="100"
                                />
                            </Button>
                        </Grid>
                        <Grid item>Classroom routines</Grid>
                        <br></br>
                        <br></br>
                        <Grid item>
                            <Button
                                onClick={() =>
                                    this.handleButtonChange("behavior management disruption")
                                }
                                classes={{root: classes.button, label: classes.label}}
                                variant="contained"
                                style={
                                    this.state.selected === "behavior management disruption"
                                        ? raisedThemes.palette.bmiColor
                                        : this.state.selected === null
                                        ? themes.palette.bmiColor
                                        : clickedThemes.palette.bmiColor
                                }
                            >
                                <img
                                    alt="Behavior Management Disruption"
                                    src={BMDImage}
                                    height="100"
                                    width="100"
                                />
                            </Button>
                        </Grid>
                        <Grid item>
                            Behavior management
                            <br/>
                            disruption
                        </Grid>
                        <br></br>
                        <Grid item>
                            <Button
                                onClick={() => this.handleButtonChange("other")}
                                classes={{root: classes.button, label: classes.label}}
                                variant="contained"
                                style={
                                    this.state.selected === "other"
                                        ? raisedThemes.palette.otherColor
                                        : this.state.selected === null
                                        ? themes.palette.otherColor
                                        : clickedThemes.palette.otherColor
                                }
                            >
                                <img alt="other" src={OtherImage} height="100" width="100"/>
                            </Button>
                        </Grid>
                        <Grid item>Other</Grid>
                        <br></br>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

TransitionTypeSel.propTypes = {
    classes: PropTypes.object.isRequired,
    transitionEnded: PropTypes.bool.isRequired,
    handleTransitionType: PropTypes.func.isRequired,
    toggleNewTransitionType: PropTypes.func.isRequired,
    handleNotes: PropTypes.func.isRequired
};

export default withStyles(styles)(
    connect(
        null,
        {toggleNewTransitionType}
    )(TransitionTypeSel)
);
