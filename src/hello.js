/**
* Copyright (C) 2017 by Jim Geist
*
* This software is licensed BSD0 per the contents of the file LICENSE.txt in
* the root of the repository.
*/

import React from 'react';

import Greeting from './Greeting.js';
import GreetButton from './GreetButton.js';

class Hello extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      greeting: null,
    };

    this.onChangeGreeting = this.onChangeGreeting.bind(this);
  }

  onChangeGreeting()
  {
    this.setState({
      greeting: 'Guten Tag',
    });
  }

  render()
  {
    return (
      <div>
        <Greeting greeting={this.state.greeting}/>
        <GreetButton onClick={this.onChangeGreeting}/>
      </div>
    );
  }
}

export default Hello;
