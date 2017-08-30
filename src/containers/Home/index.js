import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as counterActions from '../../redux_modules/counter';

import Button from '../../components/Button';
import IncrementButton from '../../components/IncrementButton';

@connect(
  state => ({
    counter: state.counter,
  }),
  counterActions
)
export default class Home extends Component {
  static propTypes = {
    counter: PropTypes.shape({
      count: PropTypes.number,
      isLoading: PropTypes.bool,
    }).isRequired,
    delayedIncrementCounter: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <h1>Hello React! ({this.props.counter.count})</h1>
        <IncrementButton
          increment={this.props.delayedIncrementCounter}
          isLoading={this.props.counter.isLoading}
        />
      </div>
    );
  }
}
