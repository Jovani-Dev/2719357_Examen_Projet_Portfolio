export default function Footer() {
    return (
      <footer className="text-center text-sm py-4 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-10">
        <p>
          © {new Date().getFullYear()} Adoté Jovani Akue-Goeh —
          <a
            href="https://github.com/jovani199new"
            target="_blank"
            className="text-blue-500 ml-1"
          >
            GitHub
          </a>
          {' '}|{' '}
          <a
            href="https://linkedin.com/in/..." // ← mets ton vrai lien LinkedIn ici
            target="_blank"
            className="text-blue-500"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    );
  }
  