import { useCallback, useEffect, useMemo, useState } from 'react';
import ThemeContext from './ThemeContext';

const STORAGE_KEY = 'chroma-theme';
const MODES = ['light', 'dark', 'system'];

function isBrowser() {
  return typeof window !== 'undefined';
}

function getSystemPreference() {
  if (!isBrowser()) return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function readStorage() {
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    if (MODES.includes(val)) return val;
  } catch {
    // localStorage unavailable (private mode / SSR)
  }
  return 'system';
}

function writeStorage(mode) {
  try {
    if (mode === 'system') {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, mode);
    }
  } catch {
    // localStorage unavailable (private mode / SSR)
  }
}

function applyTheme(resolved) {
  if (!isBrowser()) return;
  document.documentElement.classList.toggle('dark', resolved === 'dark');
}

export default function ThemeProvider({ children }) {
  const [mode, setModeState] = useState(() => readStorage());
  const [systemTheme, setSystemTheme] = useState(() => getSystemPreference());

  const resolved = mode === 'system' ? systemTheme : mode;

  useEffect(() => {
    applyTheme(resolved);
  }, [resolved]);

  useEffect(() => {
    if (!isBrowser()) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
    mq.addListener(handler);
    return () => mq.removeListener(handler);
  }, []);

  const setMode = useCallback((newMode) => {
    if (!MODES.includes(newMode)) return;
    setModeState(newMode);
    writeStorage(newMode);
  }, []);

  const resetToSystem = useCallback(() => {
    setMode('system');
  }, [setMode]);

  const value = useMemo(
    () => ({ mode, resolved, systemTheme, setMode, resetToSystem }),
    [mode, resolved, systemTheme, setMode, resetToSystem]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
