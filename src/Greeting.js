/**
* Copyright (C) 2017 by Jim Geist
*
* This software is licensed BSD0 per the contents of the file LICENSE.txt in
* the root of the repository.
*/

import React, { PropTypes } from 'react';

class Greeting extends React.Component
{
  static propTypes =
  {
    greeting: PropTypes.string,
  };

  render()
  {
    return (
      <div>
        {this.props.greeting || 'Hello, world'}
      </div>
    )
  }
};

export default Greeting;
