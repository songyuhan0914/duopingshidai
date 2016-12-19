import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import CircularProgress from 'material-ui/CircularProgress';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Demo extends React.Component {
  getChildContext() {
  return {muiTheme: getMuiTheme()};
}
  render () {
    return(
      <div>

          <RaisedButton label="hahha" />
          <CircularProgress  />


      </div>
    )
  }
}
Demo.childContextTypes = {
  muiTheme:React. PropTypes.object.isRequired,
};

export default Demo;
