import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  pickRandomStudent(){
    console.log("Random Bitches");
    // Make an array of all students
    const students = ["rozenraymond"];

    // Pick a random username
    const randomIndex = Math.floor(Math.random() *students.length);
    // console.log(randomIndex + " = Index of this random bitch");

    const username = students[randomIndex];

    console.log(username);

    // Then go to the /details/username with that username
    this.context.router.push(`/details/${username}`);
  }
  render(){
    return (
      <div>
        <h3>Welcome to our Github App</h3>
        <p>This will display a basic user profile for a given user </p>
        <Link to="search">
          <button className="button-primary">Serach for a user </button>
        &nbsp;
        </Link>
        <button
          className="button-primary"
          onClick= {this.pickRandomStudent.bind(this)}>
          See my Repo
        </button>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Home;
