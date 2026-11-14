'use client';

import { useSearchParams } from 'next/navigation';
import { useResultScreen } from '../hooks/useResultScreen';
import LoadingScreen from '../components/LoadingScreen';
import TerminatePage from '../components/TerminatePage';

export default function TerminateRouteContent() {
  const sessionId = useSearchParams().get('sessionId') || '';
  const { loading, handleClose, surveyId, participantId } =
    useResultScreen('terminate', sessionId);

  if (loading) return <LoadingScreen />;

  return (
    <TerminatePage
      sessionId={sessionId}
      surveyId={surveyId}
      participantId={participantId}
      onClose={handleClose}
    />
  );
}