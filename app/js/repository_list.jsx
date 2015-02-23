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
        var sortedRepos = this.sortByStars(repositories);

        this.setState({ initialRepoList: sortedRepos });
      }
    }.bind(this));
  },

  fetchRepos: function(callback) {
    var url = "https://api.github.com/users/" + this.props.user + "/repos";

    return $.get(url, callback);
  },

  sortByStars: function(repositories) {
    return repositories.sort(function(a, b) {
      if (a.stargazers_count > b.stargazers_count) {
        return -1;
      }

      if (a.stargazers_count < b.stargazers_count) {
        return 1;
      }

      return 0;
    });
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
      <div className="repo-list"> {repoNodes} </div>
    );
  }
});

module.exports = RepositoryList;
