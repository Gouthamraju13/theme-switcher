import { memo } from 'react';
import useTheme from '../../context/useTheme'
import './ThemeSwitcher.css';

const OPTIONS = [
  { mode: 'light',  label: 'Light',  icon: 'sun' },
  { mode: 'dark',   label: 'Dark',   icon: 'moon' },
  { mode: 'system', label: 'System', icon: 'monitor' },
];

const ThemeSwitcher = memo(function ThemeSwitcher() {
  const { mode, resolved, setMode, resetToSystem } = useTheme();

  return (
    <div className="switcher-wrapper">
      <div className="switcher-group" role="group" aria-label="Theme selection">
        {OPTIONS.map(({ mode: m, label }) => (
          <button
            key={m}
            className={`switcher-btn${mode === m ? ' active' : ''}`}
            onClick={() => setMode(m)}
            aria-pressed={mode === m}
            aria-label={`Switch to ${label} theme`}
          >
            {label}
          </button>
        ))}

        <button
          className="switcher-btn reset-btn"
          onClick={resetToSystem}
          aria-label="Reset to system theme preference"
          disabled={mode === 'system'}
        >
          Reset to system
        </button>
      </div>

      <p className="switcher-status" aria-live="polite">
        Active appearance:{' '}
        <strong className={`resolved-badge ${resolved}`}>{resolved}</strong>
        {mode === 'system' && <span className="following"> (following OS)</span>}
      </p>
    </div>
  );
});

export default ThemeSwitcher;
