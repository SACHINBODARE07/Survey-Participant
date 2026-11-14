import { Suspense } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import CompleteRouteContent from './CompleteRouteContent';

export default function CompleteRoute() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <CompleteRouteContent />
    </Suspense>
  );
}