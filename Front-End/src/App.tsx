import { Routes, Route } from 'react-router-dom';
import { StartScreen } from './containers';

function App() {
  return (
      <Routes>
        <Route path='/' Component={StartScreen} />
      </Routes>
  );
}

export default App;
