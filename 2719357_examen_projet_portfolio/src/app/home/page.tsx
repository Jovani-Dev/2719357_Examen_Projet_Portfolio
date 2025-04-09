'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
        <Image
          src="/profil-jovani.jpg"
          alt="Photo de Jovani"
          width={150}
          height={150}
          className="rounded-full shadow-md border-2 border-white mb-4"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
          Adoté Jovani Akue-Goeh
        </h1>
        <p className="text-lg sm:text-xl text-center max-w-2xl mb-4">
          Développeur Desktop, web et mobile passionné, formé en React.js, Next.js, Node, WPF, C# et plus encore.
        </p>
        <div className="flex gap-4 mt-6">
          <Link href="/projects">
            <span className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition">
              Voir mes projets
            </span>
          </Link>
          <Link href="/testimonials">
            <span className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition">
              Témoignages
            </span>
          </Link>
        </div>
      </div>
    </ProtectedRoute>
  );
}
