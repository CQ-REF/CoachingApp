import * as React from "react";
import * as PropTypes from "prop-types";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import ChildBehaviorsPie from "./ChildBehaviorsPie.tsx";
import TeacherBehaviorsPie from "./TeacherBehaviorsPie.tsx";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";

interface Props {
  ac: number,
  noAc: number,
  noChildOpp: number,
  support: number,
  noSupport: number,
  noTeacherOpp: number
}

/**
 * Swipe View for Child and Teacher Associative&Cooperative Pie Charts
 * @class ChildTeacherBehaviorDetailsSlider
 * @return {void}
 */
class ChildTeacherBehaviorPieSlider extends React.Component<Props, {}> {
  
  static propTypes = {
    ac: PropTypes.number.isRequired,
    noAc: PropTypes.number.isRequired,
    noChildOpp: PropTypes.number.isRequired,
    support: PropTypes.number.isRequired,
    noSupport: PropTypes.number.isRequired,
    noTeacherOpp: PropTypes.number.isRequired
  }
  /**
   * render function
   * @return {ReactElement}
   */
  render() {
    // const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <Grid justify={"center"} direction={"column"}>
            <Typography align={"center"} variant={"h2"}>
              Child Behaviors
            </Typography>
            <ChildBehaviorsPie
              ac={this.props.ac}
              noAc={this.props.noAc}
              noChildOpp={this.props.noChildOpp}
            />
          </Grid>
        </div>
        <div>
          <Grid justify={"center"} direction={"column"}>
            <Typography align={"center"} variant={"h2"}>
              Teacher Behaviors
            </Typography>
            <TeacherBehaviorsPie
              support={this.props.support}
              noSupport={this.props.noSupport}
              noTeacherOpp={this.props.noTeacherOpp}
            />
          </Grid>
        </div>
      </Slider>
    );
  }
}

export default ChildTeacherBehaviorPieSlider;
