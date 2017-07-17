import 'babel-polyfill';
import './index.html';
import './index.css';
import dva from 'dva'
import createLoading from 'dva-loading'
import { browserHistory } from 'dva/router'
import { message } from 'antd';
// 1. Initialize
const app = dva({
  ...createLoading({
    effects: false,
  }),
  history: browserHistory,
  onError (error) {
    message.error(error.message)
  },
})
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
