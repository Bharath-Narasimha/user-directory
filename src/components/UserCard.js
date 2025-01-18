import { Link } from 'react-router-dom';

export default function UserCard({ user }) {
  return (
    <Link 
      to={`/user/${user.id}`}
      className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{user.name}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-1">
        <span className="font-medium">Email:</span> {user.email}
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        <span className="font-medium">City:</span> {user.address.city}
      </p>
    </Link>
  );
}