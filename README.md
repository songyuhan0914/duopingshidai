# React Transform Boilerplate

## Installation

```bash
git clone https://github.com/gaearon/react-transform-boilerplate.git
cd react-transform-boilerplate
npm install
npm start
open http://localhost:3000
```

Transforms are enabled for files inside `src` (except `index.js`).

### ui引用
```js
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
          <RaisedButton label="hahha" />//水波纹按钮
          <CircularProgress  />//加载圈
        </div>
    )
  }
}
Demo.childContextTypes = {
  muiTheme:React. PropTypes.object.isRequired,
};

export default Demo;

```
