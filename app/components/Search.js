import React, {Component} from 'react';

// Component has individual state
  // HTML should reflect the state
// Component tries to have as little data as possible
  // We have to ask for special information
    // Using context, we have the asked for the react router so that we can programmatically change page
  // Components try to muck around with the keyword this as little as possible
    // When we have event handlers, we need explicitly


class Search extends Component{
  constructor(){
    // super() make sure we enherit from react successfully
    super();
    // Set initial state
      // Force elements to listen to this data by using data binding
    this.state = {
      search: ''
    };
  }
  updateSearch(event){
    const searchTerm = event.currentTarget.value;
    // console.log(searchTerm);
    this.setState({
      search: searchTerm

    });
  }
  handleSubmit( event ){
    event.preventDefault();
    const url = `/details/${ this.state.search }`;

    // [#/home, #/serach, #/home]
    this.context.router.push(url);
    // console.log("Ready to search for: ", this.state.search);
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h3>Search for a user</h3>
          <input type="text"
            name="search"
            value={this.state.search}
            placeholder="Username: "
            onChange={this.updateSearch.bind(this)}/>
        <br/>
        <input type="submit"
          className="button"
          value={`Search for ${this.state.search}`}/>
      </form>
    );
  }
}

// I need to ask React to give us access to the React Router
  // This is so we change pages without a user clicking a link
Search.contextTypes ={
  router: React.PropTypes.object.isRequired
};
export default Search;
