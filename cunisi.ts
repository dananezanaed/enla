import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

const App = lazy(() => import('./App'));

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const LoadingMessage = () => <div>Loading...</div>;

root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingMessage />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
