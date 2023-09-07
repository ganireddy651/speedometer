import {Provider} from 'react-redux'
import Speedometer from './components/Speedometer'
import store from './components/Store'

import './App.css'

const App = () => (
  <Provider store={store}>
    <Speedometer />
  </Provider>
)

export default App
