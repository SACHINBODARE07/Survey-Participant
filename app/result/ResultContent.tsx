'use client';

import { useSearchParams } from 'next/navigation';
import { useResultScreen, type ResultStatus } from '../hooks/useResultScreen';
import LoadingScreen from '../components/LoadingScreen';
import CompletePage from '../components/CompletePage';
import TerminatePage from '../components/TerminatePage';
import QuotaFullPage from '../components/QuotaFullPage';
import SecurityFailPage from '../components/SecurityFailPage';

export default function ResultContent() {
  const sp = useSearchParams();
  const status = (sp.get('status') as ResultStatus) || 'complete';
  const sessionId = sp.get('sessionId') || '';

  const {
    loading,
    redirecting,
    handleRedirect,
    handleClose,
    handleContactSupport,
    surveyId,
    participantId,
    completedAt,
    reference,
  } = useResultScreen(status, sessionId);

  if (loading) return <LoadingScreen />;

  switch (status) {
    case 'terminate':
      return (
        <TerminatePage
          sessionId={sessionId}
          surveyId={surveyId}
          participantId={participantId}
          onClose={handleClose}
        />
      );
    case 'quotafull':
      return (
        <QuotaFullPage
          sessionId={sessionId}
          surveyId={surveyId}
          participantId={participantId}
          onRedirect={handleRedirect}
          loading={redirecting}
        />
      );
    case 'securityfail':
      return (
        <SecurityFailPage
          sessionId={sessionId}
          surveyId={surveyId}
          participantId={participantId}
          reference={reference}
          onContactSupport={handleContactSupport}
        />
      );
    case 'complete':
    default:
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
}