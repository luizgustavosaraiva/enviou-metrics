import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <h1>This is a home!</h1>
      <Link to="/dashboard">Este é um link</Link>
    </>
  );
}
