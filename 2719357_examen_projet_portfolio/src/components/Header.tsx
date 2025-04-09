'use client';

import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import { RootState } from '@/redux/store';

export default function Header() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-blue-100 dark:bg-gray-800 text-black dark:text-white shadow-md">
      <div className="font-bold text-xl">Jovani Portfolio</div>
      <nav className="flex gap-4">
        {isAuthenticated && (
          <>
            <Link href="/home">Accueil</Link>
            <Link href="/projects">Projets</Link>
            <Link href="/testimonials">Témoignages</Link>
            <button onClick={handleLogout} className="text-red-500 hover:underline">Déconnexion</button>
          </>
        )}
      </nav>
    </header>
  );
}