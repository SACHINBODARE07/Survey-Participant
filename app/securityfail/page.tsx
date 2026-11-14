import { Suspense } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import SecurityFailRouteContent from './SecurityFailRouteContent';

export default function SecurityFailRoute() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SecurityFailRouteContent />
    </Suspense>
  );
}