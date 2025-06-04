import { useEffect, useState, useCallback } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

/**
 * Hook React pour générer un identifiant unique de visiteur via FingerprintJS.
 * @param {function(string):void} [onFingerprint] - Callback optionnel appelé avec le visitorId.
 * @returns {{ fingerprint: string|null, loading: boolean, error: Error|null }}
 */
const useFingerprint = (onFingerprint) => {
  const [fingerprint, setFingerprint] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadFingerprint = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      setFingerprint(result.visitorId);
      if (typeof onFingerprint === 'function') {
        onFingerprint(result.visitorId);
      }
    } catch (err) {
      setError(err);
      setFingerprint(null);
    } finally {
      setLoading(false);
    }
  }, [onFingerprint]);

  useEffect(() => {
    loadFingerprint();
  }, [loadFingerprint]);

  return { fingerprint, loading, error };
};

export default useFingerprint;
