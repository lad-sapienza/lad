import React from "react";
import { HelmetProvider } from "react-helmet-async";

/**
 * Wrap the root element with HelmetProvider so react-helmet-async has a context.
 * This prevents runtime errors where Helmet tries to access an undefined context.
 */
export const wrapRootElement = ({ element }) => {
	const helmetContext = {};
	return <HelmetProvider context={helmetContext}>{element}</HelmetProvider>;
};
