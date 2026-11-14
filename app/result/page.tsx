import { Suspense } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import ResultContent from './ResultContent';

export default function ResultPage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ResultContent />
    </Suspense>
  );
}