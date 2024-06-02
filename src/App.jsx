import './App.css';
import { ContentLayout } from './components/ContentLayout';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Planets } from './components/Planets';
import { Characters } from './components/Characters';
import { Starships } from './components/Starships';
import { Planet } from './components/Planet';
import { SearchResults } from './components/SearchResults'; // Import the SearchResults component

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<ContentLayout />} />
        <Route path='/planets'>
          <Route index element={<Planets />} />
          <Route path=':id' element={<Planet />} />
        </Route>
        <Route path='/characters' element={<Characters />} />
        <Route path='/starships' element={<Starships />} />
        <Route path='/search' element={<SearchResults />} /> {/* Add search route */}
        <Route path='*' element={<ContentLayout />} />
      </Routes>
    </Router>
  );
}
