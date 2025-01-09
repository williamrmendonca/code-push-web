import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import SafeHtml from '../SafeHtml';
import s from './Home.css';

class Home extends Component {
  static propTypes = {
    html: PropTypes.string,
  };

  static defaultProps = {
    html: '',
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <SafeHtml content={this.props.html} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
