import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

// A production build must not overwrite the running development server's chunks.
export default function nextConfig(phase) {
  return { distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next" };
}
