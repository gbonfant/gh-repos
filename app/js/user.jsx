var $ = require('jquery');
var React = require('react');
var User = React.createClass({
  getInitialState: function() {
    return { initialUser: {} };
  },

  componentDidMount: function() {
    this.fetchUser(function(user) {
      if (this.isMounted()) {
        this.setState({ initialUser: user });
      }
    }.bind(this));
  },

  fetchUser: function(callback) {
    var url = "https://api.github.com/users/" + this.props.user;

    return $.get(url, callback);
  },

  render: function() {
    return(
      <div className="user pull-right">
        <img src={this.state.initialUser.avatar_url} className="user__image" />
        <span className="user__name"repos>{this.state.initialUser.name}</span>
      </div>
    );
  }
});

module.exports = User;
