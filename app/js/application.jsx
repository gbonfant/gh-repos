var React = require('react');
var RepositoryList = require('./repository_list.jsx');
var User = require('./user.jsx');
var username = 'sindresorhus';

var repositoryList = <RepositoryList user={username} />;
var user = <User user={username} />

React.render(repositoryList, document.getElementById('react-repository-list'));
React.render(user, document.getElementById('react-user'));
