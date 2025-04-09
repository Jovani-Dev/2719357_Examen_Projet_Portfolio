'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTestimonial, editTestimonial, removeTestimonial } from '@/redux/slices/testimonialSlice';
import { RootState } from '@/redux/store';
import ProtectedRoute from '@/components/ProtectedRoute';

interface Testimonial {
  id: number;
  auteur: string;
  message: string;
}

export default function TestimonialsPage() {
  const dispatch = useDispatch();
  const testimonials = useSelector((state: RootState) => state.testimonials.list);

  const [auteur, setAuteur] = useState('');
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!auteur || !message) return;

    const testimonial: Testimonial = {
      id: editingId ?? Date.now(),
      auteur,
      message,
    };

    if (editingId !== null) {
      dispatch(editTestimonial(testimonial));
      setEditingId(null);
    } else {
      dispatch(addTestimonial(testimonial));
    }

    setAuteur('');
    setMessage('');
  };

  const handleEdit = (t: Testimonial) => {
    setAuteur(t.auteur);
    setMessage(t.message);
    setEditingId(t.id);
  };

  const handleDelete = (id: number) => {
    dispatch(removeTestimonial(id));
  };

  return (
    <ProtectedRoute>
      <div className="p-6 max-w-3xl mx-auto text-gray-800 dark:text-white">
        <h1 className="text-2xl font-bold mb-6 text-center">Témoignages</h1>

        <form onSubmit={handleSubmit} className="mb-8 bg-white dark:bg-gray-800 p-6 rounded shadow space-y-4">
          <input
            type="text"
            placeholder="Votre nom"
            value={auteur}
            onChange={(e) => setAuteur(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            placeholder="Votre témoignage"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
            {editingId !== null ? 'Modifier' : 'Ajouter'}
          </button>
        </form>

        <div className="space-y-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow relative transition hover:shadow-md"
            >
              <p className="italic mb-2">"{t.message}"</p>
              <p className="text-right font-semibold">– {t.auteur}</p>

              <div className="absolute top-2 right-2 space-x-2">
                <button
                  onClick={() => handleEdit(t)}
                  className="text-yellow-500 hover:text-yellow-400"
                  title="Modifier"
                >
                  ✏️
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="text-red-500 hover:text-red-400"
                  title="Supprimer"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
