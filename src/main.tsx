import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { runDateMathTests } from './lib/date-utils.test';

// Run automated unit verification tests
try {
  runDateMathTests();
  console.log('SUCCESS: Date utilities math validation tests passed.');
} catch (error) {
  console.error('CRITICAL: Date utilities math validation tests failed!', error);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
