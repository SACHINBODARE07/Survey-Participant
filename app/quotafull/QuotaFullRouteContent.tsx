'use client';

import { useSearchParams } from 'next/navigation';
import { useResultScreen } from '../hooks/useResultScreen';
import LoadingScreen from '../components/LoadingScreen';
import QuotaFullPage from '../components/QuotaFullPage';

export default function QuotaFullRouteContent() {
  const sessionId = useSearchParams().get('sessionId') || '';
  const { loading, redirecting, handleRedirect, surveyId, participantId } =
    useResultScreen('quotafull', sessionId);

  if (loading) return <LoadingScreen />;

  return (
    <QuotaFullPage
      sessionId={sessionId}
      surveyId={surveyId}
      participantId={participantId}
      onRedirect={handleRedirect}
      loading={redirecting}
    />
  );
}