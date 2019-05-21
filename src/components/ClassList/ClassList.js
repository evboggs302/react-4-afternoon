import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      .then(response => {
        this.setState({
          students: response.data
        });
      });
  }

  render() {
    console.log(this.state.students);
    let mappedStudents = this.state.students.map((e, i) => {
      return (
        <Link to={`/student/${e.id}`} key={i}>
          <h3>{`${e.last_name}, ${e.first_name}`}</h3>
        </Link>
      );
    });
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mappedStudents}
      </div>
    );
  }
}
