jest.dontMock('../app/js/repository.jsx');

describe('Repository Component', function() {
  it('renders the repo information', function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var Repository = require('../app/js/Repository.jsx');
    var props = { name: 'Foobar', stars: 10, watchers: 100, forks: 0 };
    var repository = TestUtils.renderIntoDocument(<Repository {...props} />);

    expect(repository.getDOMNode().textContent).toMatch(/Foobar/);
  });
});
