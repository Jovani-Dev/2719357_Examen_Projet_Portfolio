'use client';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useState } from 'react';

export default function ContactPage() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [envoye, setEnvoye] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnvoye(true);
    setNom('');
    setEmail('');
    setMessage('');
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-6 text-gray-800 dark:text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Contactez-moi</h1>

        {envoye ? (
          <div className="bg-green-100 text-green-700 p-4 rounded shadow">
            Merci pour votre message ! Je vous répondrai dès que possible.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-4 rounded shadow">
            <input
              type="text"
              placeholder="Votre nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
            <textarea
              placeholder="Votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border p-2 rounded"
              rows={5}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>
    </ProtectedRoute>
  );
}
