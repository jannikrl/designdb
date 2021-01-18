import React, { Component } from "react";
import Controls from "./Controls/Controls";
import Grid from "../../components/Grid/Grid";
import * as gridSelectors from "../../store/grid/selectors";
import { connect } from "react-redux";


class Designs extends Component {
  render() {
    return (
      <div>
        <Controls showFeatured={this.showFeatured} />
        <Grid data={this.props.designs} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        designs: gridSelectors.getDesigns(state),
    }
}

export default connect(mapStateToProps)(Designs);