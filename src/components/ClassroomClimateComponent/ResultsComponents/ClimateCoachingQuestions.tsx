import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import DataQuestions from '../../ResultsComponents/DataQuestions';
import {withStyles} from "@material-ui/core/styles";
import * as Constants from '../../../constants';

const styles: object = {
    categoryView: {}
};

interface Props {
    classes: {
        categoryView: string
    },
    addedToPlan: Array<{ panel: string, number: number, question: string }>,
    sessionId: string
    teacherId: string

    handleAddToPlan(panelTitle: string, index: number, question: string, sessionId: string, teacherId: string, magic8: string): void,
}

interface State {
    categoryView: string,
    openPanel: string,
}

/**
 * data reflection question layout for classroom climate
 * @class ClimateCoachingQuestions
 */
class ClimateCoachingQuestions extends React.Component<Props, State> {
    /**
     * @param {Props} props
     */
    constructor(props: Props) {
        super(props);

        this.state = {
            categoryView: '',
            openPanel: '',
        }
    }

    approvalsClick = (): void => {
        if (this.state.categoryView !== "approvals") {
            this.setState({
                categoryView: "approvals",
                openPanel: null
            })
        }
    };

    redirectionsClick = (): void => {
        if (this.state.categoryView !== "redirections") {
            this.setState({
                categoryView: "redirections",
                openPanel: null
            })
        }
    };

    disapprovalsClick = (): void => {
        if (this.state.categoryView !== "disapprovals") {
            this.setState({
                categoryView: "disapprovals",
                openPanel: null
            })
        }
    };

    /**
     * @param {string} panel
     */
    handlePanelChange = (panel: string): void => {
        if (this.state.openPanel === panel) {
            this.setState({openPanel: ''});
        } else {
            this.setState({openPanel: panel});
        }
    };

    /**
     * @return {ReactNode}
     */
    render(): React.ReactNode {
        const {classes} = this.props;
        return (
            <Grid container direction="column">
                <Grid container direction="row" justify="space-around" alignItems="center" style={{marginTop: "1vh"}}>
                    <Grid item>
                        <Button
                            // style={this.state.categoryView === "line" ? raisedThemes.palette.waitingColor : themes.palette.waitingColor}
                            onClick={this.approvalsClick}
                        >
                            <ThumbUpIcon fill="#0988ec"/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            // style={this.state.categoryView === "traveling" ? raisedThemes.palette.travelingColor : themes.palette.travelingColor}
                            onClick={this.redirectionsClick}
                        >
                            <ThumbDownIcon fill="#f37b6b"/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={this.disapprovalsClick}
                        >
                            <NotInterestedIcon fill="#ec2409"/>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="space-around" alignItems="center"
                      style={{marginTop: ".5vh", fontFamily: "Arimo"}}>
                    <Grid
                        item xs={2}
                    >
                        Behavior Approvals
                    </Grid>
                    <Grid
                        item xs={2}
                        // className = {classes.buttonText}
                        // style={{fontWeight: this.state.categoryView === "traveling" ? "bold" : "normal"}}
                    >
                        Redirections
                    </Grid>
                    <Grid
                        item xs={2}
                        // className = {classes.buttonText}
                        // style={{fontWeight: this.state.categoryView === "childrenWaiting" ? "bold" : "normal"}}
                    >
                        Disapprovals
                    </Grid>
                </Grid>
                <Grid container direction="column" style={{marginTop: "1vh"}}>
                    {this.state.categoryView === "approvals" ? (
                        <DataQuestions
                            questions={Constants.CoachingQuestions.Climate.Approvals}
                            openPanel={this.state.openPanel}
                            handlePanelChange={this.handlePanelChange}
                            addedToPlan={this.props.addedToPlan}
                            handleAddToPlan={this.props.handleAddToPlan}
                            sessionId={this.props.sessionId}
                            teacherId={this.props.teacherId}
                            magic8={"Classroom Climate"}
                            color={Constants.Colors.CC}
                        />
                    ) : this.state.categoryView === "redirections" ? (
                        <DataQuestions
                            questions={Constants.CoachingQuestions.Climate.Redirections}
                            openPanel={this.state.openPanel}
                            handlePanelChange={this.handlePanelChange}
                            addedToPlan={this.props.addedToPlan}
                            handleAddToPlan={this.props.handleAddToPlan}
                            sessionId={this.props.sessionId}
                            teacherId={this.props.teacherId}
                            magic8={"Classroom Climate"}
                            color={Constants.Colors.CC}
                        />
                    ) : this.state.categoryView === "disapprovals" ? (
                        <DataQuestions
                            questions={Constants.CoachingQuestions.Climate.Disapprovals}
                            openPanel={this.state.openPanel}
                            handlePanelChange={this.handlePanelChange}
                            addedToPlan={this.props.addedToPlan}
                            handleAddToPlan={this.props.handleAddToPlan}
                            sessionId={this.props.sessionId}
                            teacherId={this.props.teacherId}
                            magic8={"Classroom Climate"}
                            color={Constants.Colors.CC}
                        />
                    ) : <div/>}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ClimateCoachingQuestions);
