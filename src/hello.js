/**
* Copyright (C) 2017 by Jim Geist
*
* Permission to use, copy, modify, and/or distribute this software for any purpose
* with or without fee is hereby granted.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
* REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
* FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
* INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
* OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
* TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
* THIS SOFTWARE.
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
