import {JSX, useState} from 'react'
import './index.css'

const ThemeSwitcher = (): JSX.Element => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

  const onLightThemeClick = (): void => {
    setIsDarkTheme(false)
  }

  const onDarkThemeClick = (): void => {
    setIsDarkTheme(true)
  }

  return (
    <div
      className={isDarkTheme ? 'container dark-theme' : 'container light-theme'}
    >
      <h1 className="heading">Theme Switcher</h1>
      <p className="theme-text">
        Current theme: {isDarkTheme ? 'Dark' : 'Light'}
      </p>
      <div>
        <button
          className={isDarkTheme ? 'button' : 'button active'}
          onClick={onLightThemeClick}
        >
          Light Mode
        </button>
        <button
          className={isDarkTheme ? 'button active' : 'button'}
          onClick={onDarkThemeClick}
        >
          Dark Mode
        </button>
      </div>
    </div>
  )
}

export default ThemeSwitcher
