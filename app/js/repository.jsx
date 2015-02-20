var React = require('react');
var Repository = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    stars: React.PropTypes.number,
    watchers: React.PropTypes.number,
    forks: React.PropTypes.number
  },

  render: function() {
    return(
      <div>
        <span>{this.props.name}</span>
        <div>
          {this.props.stars} {this.props.watchers} {this.props.forks}
        </div>
      </div>
    );
  }
});

module.exports = Repository;
