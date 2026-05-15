import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Calendar } from './pages/Calendar';
import { RaceDetail } from './pages/RaceDetail';
import { Garage } from './pages/Garage';
import { Season } from './pages/Season';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calendrier" element={<Calendar />} />
          <Route path="calendrier/:raceId" element={<RaceDetail />} />
          <Route path="mongarage" element={<Garage />} />
          <Route path="masaison" element={<Season />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
