import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Well } from 'react-bootstrap';
import { fetchNotes} from '../actions/noteActions'

const wellStyle = {
  background: "#A3BFA8",
  border: "#fff"
}

const titleStyle = {
  color: "#004F2D"
}

const descriptionStyle = {
  color: "#0A0F0D"
}

class NoteList extends Component {

  componentWillMount() {
    this.props.fetchNotes()
  }

  render() {
    return (
      <React.Fragment>
        {this.props.notes.map(note => (
          <Well bsSize="small" style={wellStyle} key={note.id}>
            <h4 style={titleStyle}>{note.title}</h4>
            <h5 style={descriptionStyle}>{note.description}</h5>
          </Well>))}
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