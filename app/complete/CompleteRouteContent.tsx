'use client';

import { useSearchParams } from 'next/navigation';
import { useResultScreen } from '../hooks/useResultScreen';
import LoadingScreen from '../components/LoadingScreen';
import CompletePage from '../components/CompletePage';

export default function CompleteRouteContent() {
  const sessionId = useSearchParams().get('sessionId') || '';
  const { loading, redirecting, handleRedirect, surveyId, participantId, completedAt } =
    useResultScreen('complete', sessionId);

  if (loading) return <LoadingScreen />;

  return (
    <CompletePage
      sessionId={sessionId}
      surveyId={surveyId}
      participantId={participantId}
      completedAt={completedAt}
      onRedirect={handleRedirect}
      loading={redirecting}
    />
  );
}