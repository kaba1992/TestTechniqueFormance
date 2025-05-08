import { useState, useEffect } from 'react';


const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fonction pour refetcher les données si nécessaire
  const refetch = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message || 'Une erreur est survenue');
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  // Exécuter le fetch au montage du composant ou quand l'URL/options changent
  useEffect(() => {
    refetch();
  }, [url]); // Si tu veux refetch quand les options changent aussi, ajoute options dans le tableau de dépendances

  return { data, loading, error, refetch };
};

export default useFetch;