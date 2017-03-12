/**
 * React webpack example
 *
 * Copyright © 2017 Jim Geist. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
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
