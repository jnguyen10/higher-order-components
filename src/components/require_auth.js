import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    // set the context object to have a router object
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/')
      }
    }

    // called when component will be handed a new set of props or re-rendered
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state){
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}


/*
*** In some other location (not in this file), we want to use this High-Order Component ***
import Authentication -- This is my HOC
import Resources -- component I want to wrap with Authentication

const ComposedComponent = Authentication(Resources);

*** In some render method ***
<ComposedComponent resources={ resourceList } />


*/
