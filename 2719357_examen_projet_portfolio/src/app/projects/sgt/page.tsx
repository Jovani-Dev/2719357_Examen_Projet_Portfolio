'use client';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function SGTProjectPage() {
  return (
    <ProtectedRoute>
      <div className="p-6 text-gray-800 dark:text-white max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">SGT – Système de gestion des tickets</h1>

        <p className="mb-4">
          Ce projet WPF a été réalisé dans un contexte de simulation de gestion d’incidents IT. Il permet de gérer les demandes de support technique à travers des formulaires dynamiques et un tableau d’état des interventions.
        </p>

        <h2 className="text-xl font-semibold mb-2">Fonctionnalités principales</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Création de tickets (catégorie, urgence, description)</li>
          <li>Affectation d’un technicien</li>
          <li>Suivi de l’état du ticket (nouveau, en cours, résolu)</li>
          <li>Liste filtrable et triable par statut ou utilisateur</li>
          <li>Archivage automatique des tickets clôturés</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Technologies utilisées</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Langage : C#</li>
          <li>Technologie : WPF</li>
          <li>ORM : Entity Framework Core</li>
          <li>Architecture : MVVM</li>
        </ul>

        <p className="mb-4">
          Le projet a mis en œuvre la gestion d’événements, la liaison de données, et une interface multi-rôle (demandeur / technicien). Il comprend aussi un tableau de bord récapitulatif et des actions contextuelles.
        </p>

        <p className="italic">Ce système démontre la capacité à concevoir des interfaces métier robustes avec WPF et une gestion claire des états applicatifs.</p>
      </div>
    </ProtectedRoute>
  );
}