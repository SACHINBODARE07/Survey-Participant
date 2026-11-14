'use client';

import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

interface Props {
  sessionId?: string;
  surveyId?: string;
  participantId?: string;
  onClose?: () => void;
  loading?: boolean;
}

const TerminatePage: React.FC<Props> = ({ onClose, loading = false }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f4f7f6] dark:bg-gray-900 px-4 py-8">
      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 p-10 shadow-sm border border-gray-100 dark:border-gray-700 text-center space-y-6">
        <div className="flex items-center justify-center space-x-2">
          <div className="flex items-end space-x-1 h-6">
            <span className="w-1.5 h-4 bg-[#1e293b] rounded-full"></span>
            <span className="w-1.5 h-6 bg-[#475569] rounded-full"></span>
            <span className="w-1.5 h-3 bg-[#94a3b8] rounded-full"></span>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#1e293b] dark:text-white">
            Quadsupreme
          </span>
        </div>

        <div className="flex justify-center pt-2">
          <div className="w-20 h-20 rounded-full bg-[#ebf3fe] dark:bg-blue-950/40 flex items-center justify-center">
            <InformationCircleIcon className="w-10 h-10 text-[#2563eb] dark:text-blue-400 stroke-[2]" />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-bold tracking-wider text-[#2563eb] dark:text-blue-400 uppercase">
            Thank You For Your Time
          </p>
          <h2 className="text-3xl font-extrabold text-[#0f172a] dark:text-white">Survey Ended</h2>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
          Thank you for your time. Unfortunately, you are not eligible to continue with this survey.
        </p>

        <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
          <div
            onClick={onClose}
            className={`flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400 ${onClose ? 'cursor-pointer hover:opacity-80' : ''}`}
          >
            <svg
              className="w-4 h-4 text-blue-500 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>{loading ? 'Redirecting...' : 'You will be redirected shortly.'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminatePage;