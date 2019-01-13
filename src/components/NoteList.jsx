import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';
import { fetchNotes} from '../actions/noteActions'

class NoteList extends Component {

  componentWillMount() {
    this.props.fetchNotes()
  }

  render() {
    return (
      <React.Fragment>
        <div>Example Component</div>
     </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes.items
})

export default connect(
  mapStateToProps,
  { fetchNotes }
)(NoteList)