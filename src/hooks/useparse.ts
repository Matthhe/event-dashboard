import { useState } from 'react';
import type { IParseResult } from '../types';
import { triggerPasre as apiTriggerParse } from '../api/parseApi';

const useParse = () => {
  const [isParsing, setIsParsing] = useState(false);
  const [lastResult, setLastResult] = useState<IParseResult | null>(null);

  const triggerParse = async () => {
    setIsParsing(true);
    try {
      const result = await apiTriggerParse();
      setLastResult(result);
      return result;
    } catch (error) {
      throw error;
    } finally {
      setIsParsing(false);
    }
  };

  return { triggerParse, isParsing, lastResult };
};

export default useParse;