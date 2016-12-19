import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';




class AppBarExampleIconButton extends React.Component {
  getChildContext() {
  return {muiTheme: getMuiTheme()};
}
  handleTouchTap() {
    alert('onTouchTap triggered on the title component');
  }
  render () {
    const styles = {
      title: {
        cursor: 'pointer',
      },
    };

    return(
      <AppBar
        title={<span style={styles.title}>Title</span>}
        onTitleTouchTap={this.handleTouchTap.bind(this)}
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={<FlatButton label="Save" />}
      />
    )

  }
}
AppBarExampleIconButton.childContextTypes = {
  muiTheme:React. PropTypes.object.isRequired,
};
export default AppBarExampleIconButton;
