import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: Error, info: ErrorInfo) { console.error("Portfolio rendering error", error, info); }
  render() { return this.state.hasError ? <div className="error-screen">Something went wrong while loading the portfolio. Please refresh.</div> : this.props.children; }
}
