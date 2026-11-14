import { Suspense } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import TerminateRouteContent from './TerminateRouteContent';

export default function TerminateRoute() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <TerminateRouteContent />
    </Suspense>
  );
}