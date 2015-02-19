jest.dontMock('../app/js/repository.jsx');

describe('Repository Component', function() {
  it('should work', function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var Repository = require('../app/js/Repository.jsx');
    var repository = TestUtils.renderIntoDocument(<Repository />);

    expect(repository.getDOMNode().textContent).toEqual('Hello world');
  });
});
