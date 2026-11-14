'use client';

import { useSearchParams } from 'next/navigation';
import { useResultScreen } from '../hooks/useResultScreen';
import LoadingScreen from '../components/LoadingScreen';
import SecurityFailPage from '../components/SecurityFailPage';

export default function SecurityFailRouteContent() {
  const sessionId = useSearchParams().get('sessionId') || '';
  const { loading, handleContactSupport, surveyId, participantId, reference } =
    useResultScreen('securityfail', sessionId);

  if (loading) return <LoadingScreen />;

  return (
    <SecurityFailPage
      sessionId={sessionId}
      surveyId={surveyId}
      participantId={participantId}
      reference={reference}
      onContactSupport={handleContactSupport}
    />
  );
}