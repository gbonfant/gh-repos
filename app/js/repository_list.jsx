var $ = require('jquery');
var React = require('react');
var Repository = require('./repository.jsx');
var RepositoryList = React.createClass({
  getInitialState: function() {
    return { initialRepoList: [] };
  },

  componentDidMount: function() {
    this.fetchRepos(function(repositories) {
      if (this.isMounted()) {
        this.setState({ initialRepoList: repositories });
      }
    }.bind(this));
  },

  fetchRepos: function(callback) {
    var url = "https://api.github.com/users/" + this.props.user + "/repos";

    return $.get(url, callback);
  },

  render: function() {
    var repoNodes = this.state.initialRepoList.map(function(repo) {
      return <Repository
        key={repo.id}
        name={repo.name}
        stars={repo.stargazers_count}
        watchers={repo.watchers_count}
        forks={repo.forks_count} />;
    });

    return(
      <div> {repoNodes} </div>
    );
  }
});

module.exports = RepositoryList;
