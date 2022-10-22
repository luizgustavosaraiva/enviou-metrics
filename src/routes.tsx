import { Routes as NativeRoutes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';

export function Routes() {
  return (
    <NativeRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </NativeRoutes>
  );
}
