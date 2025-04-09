'use client';
import ProtectedRoute from '@/components/ProtectedRoute';
import Link from 'next/link';

const projects = [
  {
    title: 'Gestion des absences et retards',
    description: 'Application WPF pour les RH',
    path: '/projects/absences',
  },
  {
    title: 'SOSEDUC',
    description: 'Plateforme de tutorat React/Node',
    path: '/projects/soseduc',
  },
  {
    title: 'SGT (tickets)',
    description: 'Application WPF pour tickets',
    path: '/projects/sgt',
  },
];

export default function ProjectsPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
        <h1 className="text-3xl font-bold mb-8 text-center">Mes Projets</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link key={index} href={project.path}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="mt-2 text-sm">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
