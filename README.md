# 🎨 Chroma Theme Lab

A modern React Theme Switcher built using the Context API. The application provides a global theming system with support for Light, Dark, and System themes while focusing on performance optimization, accessibility, and real-world user experience.

---

## 🚀 Live Features

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
- Respects user experience best practices

### User Experience
- No Flash Of Incorrect Theme (FOIT/FOUT)
- Smooth visual transitions
- Responsive layout
- Clean and modern UI

---

## 🛠️ Tech Stack

- React 19
- Vite
- React Context API
- CSS Variables
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
│   └── ThemeContext.jsx
│
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Gouthamraju13/theme-switcher.git
```

### Navigate to Project

```bash
cd theme-switcher
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Application runs at:

```text
http://localhost:5173
```

---

## 🧠 Context API Flow

### Theme Context Stores

```js
{
  mode,
  resolvedTheme,
  systemTheme,
  setTheme,
  resetToSystem
}
```

### Theme Resolution Logic

1. Check Local Storage for saved preference.
2. If found, apply saved theme.
3. Otherwise detect OS theme.
4. Listen for system theme changes.
5. Update UI only when user hasn't selected a custom theme.

---

## 💾 Persistence Strategy

Theme preference is stored in:

```js
localStorage
```

Example:

```js
localStorage.setItem("theme", "dark")
```

Supported values:

```text
light
dark
system
```

---

## ⚡ Performance Optimizations

### Memoized Context Value

```js
useMemo()
```

Prevents unnecessary object recreation.

### Memoized Components

```js
React.memo()
```

Used for components that do not directly depend on theme state.

### Selective Re-rendering

Only theme-dependent components subscribe to Theme Context.

---

## 🎯 Edge Cases Handled

- First-time users with no saved preference
- Theme persistence across refreshes
- Runtime OS theme changes
- User preference overriding system preference
- Non-browser environment safety checks
- No visual flicker during initial render
- Prevention of unnecessary component re-renders

---

## ♿ Accessibility Features

- Semantic HTML
- Keyboard navigable controls
- ARIA labels
- Visible active state indicators
- Smooth and intuitive interactions

---

## 📸 Preview

### Dark Theme

- Global dark appearance
- Theme statistics panel
- Memoized component rendering demonstration
- Context state visualization

### Light Theme

- Fully responsive light appearance
- Same functionality with alternate color palette

---

## 🔮 Future Enhancements

- Additional custom themes
- Theme animations
- Unit and integration testing
- Theme presets
- User customization options
- Reduced motion preference support

---

## 👨‍💻 Author

**Goutham Raju**

GitHub: https://github.com/Gouthamraju13

---

## 📄 License

This project is created for learning and technical assessment purposes.
