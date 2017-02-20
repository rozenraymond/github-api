import React from 'react';

// FIRST
  // Focused
  // Independent
  // Reusable
  // Small
  // Testable

class ProfilePic extends React.Component {
  render() {
    console.log(this.props);
    return(
      <img src={this.props.imageURL}/>
    );
  }
}

class ProfileName extends React.Component {
  render() {
    return(
      <h3>{this.props.name}</h3>
    );
  }
}

class ProfileLink extends React.Component {
  render() {
    const url = `http://github.com/${this.props.username}`;
    return(
      <div>
        <a href={url} target="_blank">
          {this.props.username}
        </a>
      </div>
    );
  }
}

// Avatar that outputs all of those other components in a div tag
// Then put it on the page

class Paragraph extends React.Component {
  render(){
    // this.props.childer will represent all the text
    return(
      <p>
        {this.props.children}
      </p>
    );
  }
}

class Avatar extends React.Component {
  render(){
    console.log(this.props.user);
    return(
      <div>
        <p>About Badger</p>

        <ProfilePic  imageURL = {this.props.user.imageURL} />
        <ProfileName name= {this.props.user.name}/>
        <ProfileLink username = {this.props.user.username}/>

        <Paragraph>
          Some text goes here
        </Paragraph>
      </div>
    );
  }
}

export default Avatar;


// ReactDOM.render(
//   <Avatar user={USER_DATA}/>,
//   document.getElementById('app')
// );
