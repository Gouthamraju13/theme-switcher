import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import SurfaceCard from './components/SurfaceCard/SurfaceCard';
import MemoizedPanel from './components/MemoizedPanel/MemoizedPanel';
import ThemeStats from './components/ThemeStats/ThemeStats';
import './App.css';

export default function App() {
  return (
    <main className="page">

      <header className="app-header">
        <h1 className="app-title">Chroma theme lab</h1>
        <p className="app-subtitle">
          Context API · persistence · system sync · no flash
        </p>
      </header>

      <section className="controls-section" aria-label="Theme controls">
        <ThemeSwitcher />
      </section>

      <section className="cards-grid" aria-label="Demo cards">
        <SurfaceCard />
        <MemoizedPanel />
      </section>

      <section aria-label="Context debug">
        <ThemeStats />
      </section>

    </main>
  );
}