import type { NextConfig } from 'next';
import { execFileSync } from 'node:child_process';
if (process.env.LAUNCH_MODE === 'true') execFileSync(process.execPath, ['scripts/check-launch.mjs'], { stdio: 'inherit' });
const config: NextConfig = { output: 'export', trailingSlash: true, images: { unoptimized: true }, poweredByHeader: false };
export default config;
