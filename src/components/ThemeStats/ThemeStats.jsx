import useTheme from '../../context/useTheme';
import './ThemeStats.css';

export default function ThemeStats() {
  const { mode, resolved, systemTheme } = useTheme();

  const rows = [
    { label: 'mode',        value: mode,                                note: 'user selection' },
    { label: 'resolved',    value: resolved,                            note: 'what you see'   },
    { label: 'systemTheme', value: systemTheme,                         note: 'OS preference'  },
    { label: 'persisted',   value: mode !== 'system' ? mode : '(none)', note: 'localStorage'  },
  ];

  return (
    <section className="theme-stats" aria-label="Theme context debug info">
      <h4 className="stats-heading">Context state</h4>
      <dl className="stats-list">
        {rows.map(({ label, value, note }) => (
          <div key={label} className="stats-row">
            <dt className="stats-key">{label}</dt>
            <dd className="stats-val">
              <span className={`stats-chip ${label === 'resolved' ? value : ''}`}>
                {value}
              </span>
              <span className="stats-note">{note}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
