import { Suspense } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import QuotaFullRouteContent from './QuotaFullRouteContent';

export default function QuotaFullRoute() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <QuotaFullRouteContent />
    </Suspense>
  );
}