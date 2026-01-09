// src/components/common/ErrorBoundary.jsx
import React from 'react';
import AlertTriangleIcon from '../icons/AlertTriangleIcon';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md mx-auto space-y-6">
            <div className="flex justify-center">
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
                <AlertTriangleIcon size={48} className="text-red-500" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white">
              Oops! Something went wrong
            </h1>

            <p className="text-lg text-neutral-400">
              We encountered an unexpected error. Please try refreshing the page.
            </p>

            {import.meta.env.DEV && this.state.error && (
              <div className="mt-4 p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-left">
                <p className="text-sm font-mono text-red-400 break-words">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-neutral-200 hover:bg-white text-black rounded-sm font-bold font-mono transition-all"
            >
              Return to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
