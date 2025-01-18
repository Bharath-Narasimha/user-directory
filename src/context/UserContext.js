import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredAndSortedUsers = users
    .filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortDirection === 'asc' ? comparison : -comparison;
    });

  return (
    <UserContext.Provider 
      value={{
        users: filteredAndSortedUsers,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        sortDirection,
        setSortDirection
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUsers = () => useContext(UserContext);