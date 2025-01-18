import { CiSearch } from "react-icons/ci";
import { useUsers } from '../context/UserContext';

export default function SearchBar() {
  const { searchTerm, setSearchTerm, sortDirection, setSortDirection } = useUsers();

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <button
        onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Sort {sortDirection === 'asc' ? 'A-Z' : 'Z-A'}
      </button>
    </div>
  );
}