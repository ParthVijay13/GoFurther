import Hero from './Hero';
// import Navbar from './Navbar';
// import About from './About'; // Example additional component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Explore from './Explore';

function App() {
  return (
    <>
      <div className="bg-[#dedede] h-[100vh]">
        <Router>
          <Routes>
            {/* Layout will always include Navbar */}
            <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} /> 
            <Route index element={<Explore/>}/> 
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
