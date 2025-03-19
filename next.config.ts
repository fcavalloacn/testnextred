import type { NextConfig } from "next";

const nextConfig: NextConfig = {

	env: {
    NEXT_PUBLIC_VAR: process.env.NEXT_PUBLIC_VAR,
  }
  /* config options here */
};

export default nextConfig;
