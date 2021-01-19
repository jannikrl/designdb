import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Design extends Component {
    render() {
        return (<div><p>Show design {this.props.match.params.id}</p></div>);
    }
}

export default withRouter(Design);