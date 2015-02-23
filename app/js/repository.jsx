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
      <div className="repo">
        <div className="pull-left repo__name">{this.props.name}</div>

        <div className="pull-right repo__stats-wrapper">
          <div className="pull-right repo__stats">
            <span className="glyphicon glyphicon-random"></span>
            <span>{this.props.forks}</span>
          </div>

          <div className="pull-right repo__stats">
            <span className="glyphicon glyphicon-eye-open"></span>
            <span>{this.props.watchers}</span>
          </div>

          <div className="pull-right repo__stats">
            <span className="glyphicon glyphicon-star"></span>
            <span>{this.props.stars}</span>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = Repository;
