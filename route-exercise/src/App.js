
import { HashRouter } from 'react-router-dom';
import './App.css';
import TabBar from './components/TabBar';
import MyRouter from './router/MyRouter_bak';
import './components/TabBar.css'

function App() {
  return (
    <HashRouter>
      <MyRouter/>
      <TabBar/>
    </HashRouter>

  );
}

export default App;
