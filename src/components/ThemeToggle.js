import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
    >
      {darkMode ? (
        <CiLight className="h-6 w-6 text-white" />
      ) : (
        <MdOutlineDarkMode className="h-6 w-6 text-gray-700" />
      )}
    </button>
  );
}