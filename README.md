# 🎨 Theme-Switcher

A modern React Theme Switcher built using the Context API. The application provides a global theming system with support for Light, Dark, and System themes while focusing on performance optimization, accessibility, and real-world user experience.

---

## 🚀 Features

### Theme Management
- Light Theme
- Dark Theme
- System Theme Detection
- Reset to System Preference

### Persistence
- Saves user-selected theme in Local Storage
- Restores preference on page reload
- Falls back to system preference for first-time users

### System Preference Support
- Detects OS-level theme preference
- Automatically applies system theme when no user preference exists
- Listens for runtime system theme changes
- Prevents system changes from overriding explicit user choices

### Performance Optimization
- Global theme management using React Context API
- Memoized context values using `useMemo`
- Memoized components using `React.memo`
- Prevents unnecessary re-renders of unrelated UI

### Accessibility
- Keyboard accessible controls
- Proper ARIA labels
- Clear visual indication of active theme
- Smooth theme transitions

---

## 🛠️ Tech Stack

- React
- Vite
- Context API
- CSS
- Local Storage API
- Match Media API

---

## 📂 Project Structure

```text
src
│
├── assets
│
├── components
│   ├── MemoizedPanel
│   │   ├── MemoizedPanel.jsx
│   │   └── MemoizedPanel.css
│   │
│   ├── SurfaceCard
│   │   ├── SurfaceCard.jsx
│   │   └── SurfaceCard.css
│   │
│   ├── ThemeStats
│   │   ├── ThemeStats.jsx
│   │   └── ThemeStats.css
│   │
│   └── ThemeSwitcher
│       ├── ThemeSwitcher.jsx
│       └── ThemeSwitcher.css
│
├── context
│   ├── ThemeContext.jsx
│   ├── ThemeProvider.jsx
│   └── useTheme.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
root
│
├── public
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 🏗️ Architecture

### ThemeContext.jsx
Creates the global Theme Context.

### ThemeProvider.jsx
Handles:
- Theme state management
- Theme persistence
- System theme detection
- Runtime system theme updates
- Theme application to the document

### useTheme.js
Custom hook for consuming theme context.

### Components

#### ThemeSwitcher
Provides controls for:
- Light Theme
- Dark Theme
- System Theme
- Reset to System Preference

#### ThemeStats
Displays current theme-related context values.

#### SurfaceCard
Reusable themed card component.

#### MemoizedPanel
Demonstrates performance optimization using `React.memo`.

---

## ⚙️ Installation

```bash
git clone https://github.com/Gouthamraju13/theme-switcher.git
cd theme-switcher
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## 💾 Persistence Strategy

Theme preferences are stored in Local Storage.

Supported values:

```text
light
dark
system
```

---

## ⚡ Performance Optimizations

- `useMemo` for context value memoization
- `React.memo` for non-theme-dependent components
- Selective context subscriptions
- Reduced unnecessary re-renders

---

## 🎯 Edge Cases Handled

- First-time users with no saved preference
- Theme persistence across reloads
- Runtime OS theme changes
- User preference overriding system preference
- Non-browser environment safety checks
- No visual flicker during initial render

---

## ♿ Accessibility

- Keyboard accessible controls
- ARIA labels
- Semantic HTML
- Clear active-state indicators

---

## 🔮 Future Enhancements

- Additional custom themes
- Theme animations
- Unit and integration tests
- Reduced motion support

---

## 👨‍💻 Author

**Goutham Raju**

GitHub: https://github.com/Gouthamraju13

---

## 📄 License

Created for learning and technical assessment purposes.
