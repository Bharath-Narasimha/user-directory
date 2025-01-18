import { useParams, useNavigate } from 'react-router-dom';
import { useUsers } from '../context/UserContext';
import { FaArrowLeft } from "react-icons/fa";

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useUsers();
  
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return (
      <div className="text-center text-red-500 p-4">
        User not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300 font-bold"
      >
        <FaArrowLeft className="h-4 w-4 mr-2" />
        Go Back
      </button>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{user.name}</h1>
        
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-400">Username: {user.username}</p>
            <p className="text-gray-600 dark:text-gray-400">Email: {user.email}</p>
            <p className="text-gray-600 dark:text-gray-400">Phone: {user.phone}</p>
            <p className="text-gray-600 dark:text-gray-400">Website: {user.website}</p>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Company</h2>
            <p className="text-gray-600 dark:text-gray-400">Name: {user.company.name}</p>
            <p className="text-gray-600 dark:text-gray-400">Catch Phrase: {user.company.catchPhrase}</p>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Address</h2>
            <p className="text-gray-600 dark:text-gray-400">
              {user.address.street}, {user.address.suite}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}