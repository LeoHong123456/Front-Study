import './App.css';
import {HashRouter} from 'react-router-dom';
import MyRouter from './router/MyRouter';
import TabBar from './components/TabBar';

function App() {
  return (
      <HashRouter>
        <MyRouter/>
        <TabBar/>
      </HashRouter>
  );
}
export default App;
