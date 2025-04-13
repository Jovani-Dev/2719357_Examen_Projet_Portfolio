'use client';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function SoseducProjectPage() {
  return (
    <ProtectedRoute>
      <div className="p-6 text-gray-800 dark:text-white max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">SOSEDUC – Application de soutien éducatif</h1>

        <p className="mb-4">
          Projet réalisé en équipe dans le cadre d’un sprint SCRUM. SOSEDUC est une plateforme web permettant à des étudiants de rechercher un tuteur selon la matière et leur niveau d’étude. Le projet intègre des fonctionnalités dynamiques et une structure MVC moderne.
        </p>

        <h2 className="text-xl font-semibold mb-2">Fonctionnalités principales</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Inscription utilisateur (étudiant/tuteur)</li>
          <li>Ajout/suppression de cours proposés</li>
          <li>Association des matières à des enseignants</li>
          <li>Recherche de tuteurs par filtre</li>
          <li>Interface réactive pour chaque rôle</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Technologies utilisées</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Frontend : React + Bootstrap</li>
          <li>Backend : Node.js + Express</li>
          <li>Base de données : MySQL</li>
          <li>Autres : JWT, REST API, Redux Toolkit</li>
        </ul>

        <p className="mb-4">
          Le projet SOSEDUC applique une architecture découpée en composants, des appels Axios, et gère les rôles utilisateurs dans un environnement sécurisé.</p>

        <p className="italic">Livrable conforme aux exigences de sprint 2 – cours Programmation Web avancé.</p>
      </div>
    </ProtectedRoute>
  );
}