import React, { Component } from "react";
import axios from "axios";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentInfo: {}
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          studentInfo: response.data
        });
      });
  }

  render() {
    console.log(this.state.studentInfo);
    let { email, first_name, last_name, grade, id } = this.state.studentInfo;
    return (
      <div className="box" key={id}>
        <h1>Student</h1>
        <h1>{`${last_name}, ${first_name}`}</h1>
        <h3>{`Grade: ${grade}`}</h3>
        <h3>{`Email: ${email}`}</h3>
      </div>
    );
  }
}
