import React, { Component } from 'react';
import { connect } from 'react-redux'

@connect()

export default class Layout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
