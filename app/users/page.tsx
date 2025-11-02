'use client';
import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email?: string;
  phone?: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: User[] = await res.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Users List</h1>
        <p className="text-gray-600 mb-8">{new Date().toLocaleDateString()}</p>

        {loading ? (
          <div className="text-center text-gray-600">Loading users...</div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <ul className="divide-y">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="p-6 hover:bg-gray-50 transition flex items-center gap-4 border-b last:border-b-0"
                >
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {user.id}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
                    {user.email && <p className="text-gray-600 text-sm">{user.email}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
};

export default UsersPage;