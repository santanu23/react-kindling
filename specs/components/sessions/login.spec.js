import React              from 'react';
import TestUtils          from 'react/lib/ReactTestUtils';
import Login              from '../../../client/js/components/sessions/login';
import StubRouterContext  from '../../support/stub_router_context';
import Utils              from '../../support/utils';

describe('login', function() {
  var login;
  var Subject;
  var textFields;

  beforeEach(function() {
    // Render component wrapped in router context
    Subject = StubRouterContext(Login, {});
    login = TestUtils.renderIntoDocument(<Subject/>);
    textFields = TestUtils.scryRenderedDOMComponentsWithClass(login, 'mui-text-field');
  });

  it('renders the login component', function() {
    expect(login).toBeDefined();

    var email = Utils.findTextField(textFields, 'email');
    expect(email).toBeDefined();

    var password = Utils.findTextField(textFields, 'password');
    expect(password).toBeDefined();
  });

  it('outputs a validation error if no email is provided', function(){
    // var button = TestUtils.findRenderedDOMComponentWithClass(login, 'login-button');
    // TestUtils.Simulate.click(button);

    var form = TestUtils.findRenderedDOMComponentWithTag(login, 'form');
    TestUtils.Simulate.submit(form);

    var email = Utils.findTextField(textFields, 'email');
    expect(email.getDOMNode().className).toContain('mui-has-error');
    expect(login.getDOMNode().textContent).toContain('Invalid email');
  });

});
