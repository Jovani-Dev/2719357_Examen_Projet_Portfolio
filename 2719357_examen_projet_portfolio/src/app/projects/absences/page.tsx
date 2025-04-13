'use client';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function AbsencesProjectPage() {
  return (
    <ProtectedRoute>
      <div className="p-6 text-gray-800 dark:text-white max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Gestion des absences et retards</h1>

        <p className="mb-4">
          Ce projet est une application de bureau développée avec <strong>C#</strong> et <strong>WPF</strong> dans le cadre d’un cours en développement logiciel. Il permet à une entreprise de gérer efficacement les absences, retards et congés de ses employés, avec une interface RH intuitive et fonctionnelle.
        </p>

        <h2 className="text-xl font-semibold mb-2">Fonctionnalités principales</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Enregistrement des absences avec type (maladie, congé, etc.)</li>
          <li>Suivi des retards avec heure de début et de fin + justification</li>
          <li>Formulaire de demande de congé validée par un manager</li>
          <li>Tableau de bord RH centralisé avec résumé visuel</li>
          <li>Génération automatique de rapports PDF hebdomadaires et mensuels</li>
          <li>Alertes automatiques par email en cas d’absence non justifiée</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Technologies utilisées</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Langage : C#</li>
          <li>Framework : WPF (Windows Presentation Foundation)</li>
          <li>ORM : Entity Framework Core</li>
          <li>Base de données : SQLite</li>
        </ul>

        <p className="mb-4">
          L’interface comprend des formulaires dynamiques, des tableaux de suivi, des filtres par période ou type d’absence et un calendrier codé couleur pour la vue globale.
        </p>

        <p className="italic">Ce projet a permis de mettre en œuvre des concepts avancés de développement C# avec gestion des états, liaison de données et architecture MVVM.</p>
      </div>
    </ProtectedRoute>
  );
}
