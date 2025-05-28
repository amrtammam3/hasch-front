

import { useTheme } from '../context/ThemeContext';
import '../styles/ThemeToggle.css';

// استيراد الصورتين
import darkImage from '../assets/images/Land Switch-Dark.png';
import lightImage from '../assets/images/Land Switch-Light.png';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // تحديد الصورة حسب الثيم الحالي
  const switchImage = theme === 'light' ? lightImage : darkImage;

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === 'light'}
        onChange={toggleTheme}
        id="theme-toggle"
        aria-label="Toggle dark mode"
        aria-checked={theme === 'light'}
      />
      <span
        className="slider image-slider"
        style={{ backgroundImage: `url(${switchImage})` }}
      ></span>
    </label>
  );
};

export default ThemeToggle;
