import React, {PureComponent} from 'react';
import '../common/logo.css';

export class Logo extends PureComponent {
  render() {
    return React.createElement(
        'div',
        {className: 'logo'},
        React.createElement('b', null, 'netflix'),
        'roulette',
    );
  }
}
