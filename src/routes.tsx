import { Routes as NativeRoutes, Route, BrowserRouter } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';

export function Routes() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <NativeRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </NativeRoutes>
    </BrowserRouter>
  );
}
