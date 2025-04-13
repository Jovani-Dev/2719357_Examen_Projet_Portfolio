'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/redux/slices/authSlice';
import { RootState } from '@/redux/store';

export default function Header() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  const linkClass = (path: string) =>
    `transition-colors duration-200 hover:text-blue-400 ${
      pathname === path ? 'text-blue-400 font-semibold underline' : ''
    }`;

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <Link href="/home">
        <h1 className="text-xl font-bold">Jovani PORTFOLIO</h1>
      </Link>

      <nav className="flex gap-6 items-center">
        {isAuthenticated ? (
          <>
            <Link href="/home" className={linkClass('/home')}>Accueil</Link>
            <Link href="/projects" className={linkClass('/projects')}>Projets</Link>
            <Link href="/testimonials" className={linkClass('/testimonials')}>Témoignages</Link>
            <Link href="/contact" className={linkClass('/contact')}>Contact</Link>

            <a
              href="/CV-Jovani-AkueGoeh.pdf"
              download
              className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded"
            >
              Télécharger mon CV
            </a>

            <button onClick={handleLogout} className="text-red-400 hover:text-red-500">Déconnexion</button>
          </>
        ) : (
          <>
            <Link href="/login" className={linkClass('/login')}>Connexion</Link>
            <Link href="/register" className={linkClass('/register')}>Créer un compte</Link>
          </>
        )}
      </nav>
    </header>
  );
}

// 'use client';

// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '@/redux/slices/authSlice';
// import { RootState } from '@/redux/store';
// import { useRouter, usePathname  } from 'next/navigation';
// import Link from 'next/link';

// export default function Header() {

//     const dispatch = useDispatch();
//     const pathname = usePathname()
//   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
//   const [hasMounted, setHasMounted] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   if (!hasMounted) return null;

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   const linkClass = (path: string) =>
//     `hover:underline ${
//       pathname === path ? 'text-blue-400 font-semibold' : ''
//     }`;

//   return (
//     <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">Jovani Portfolio</h1>
//       <nav className="flex gap-4">
//         {isAuthenticated && (
//           <>
//             <Link href="/home">Accueil</Link>
//             <Link href="/projects">Projets</Link>
//             <Link href="/testimonials">Témoignages</Link>
//             <Link href="/contact">Contact</Link>
//             <a
//               href="/CV-Jovani-AkueGoeh.pdf"
//               download
//               className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
//             >
//               Télécharger mon CV
//             </a>
//             {/* <Link href="/login" className="text-red-500">Déconnexion</Link> */}
//             <button onClick={handleLogout} className="text-red-500">
//                 Déconnexion
//             </button>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// }
