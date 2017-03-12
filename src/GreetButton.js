/**
* Copyright (C) 2017 by Jim Geist
*
* This software is licensed BSD0 per the contents of the file LICENSE.txt in
* the root of the repository.
*/

import React, { PropTypes } from 'react';

class GreetButton extends React.Component
{
  static propTypes =
  {
    onClick: PropTypes.func.isRequired,
  };

  render()
  {
    return (
      <button onClick={this.props.onClick}>
        Change Greeting
      </button>
    );
  }
}

export default GreetButton;
