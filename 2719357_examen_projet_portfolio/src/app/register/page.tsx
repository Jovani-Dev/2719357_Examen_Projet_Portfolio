'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nom || !email || !password) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    dispatch(register({ nom, email, password }));
    router.push('/home');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-sm space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center">Créer un compte</h1>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <input
          type="text"
          placeholder="Nom complet"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
          S’inscrire
        </button>

        <p className="text-sm text-center">
          Déjà un compte ? <a href="/login" className="text-blue-500 underline">Connexion</a>
        </p>
      </form>
    </div>
  );
}
