import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { Tasks } from './pages/Tasks';
import { Insights } from './pages/Insights';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/tasks" element={<Layout><Tasks /></Layout>} />
        <Route path="/insights" element={<Layout><Insights /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
