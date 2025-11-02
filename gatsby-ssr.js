import React from "react";
import { HelmetProvider } from "react-helmet-async";

/**
 * Wrap the root element during SSR with HelmetProvider so react-helmet-async
 * has a context for server rendering.
 */
export const wrapRootElement = ({ element }) => {
  const helmetContext = {};
  return <HelmetProvider context={helmetContext}>{element}</HelmetProvider>;
};
