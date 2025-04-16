/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ['@mui/system', '@mui/material', '@mui/icons-material'],
  eslint: {
    ignoreDuringBuilds: true, // Отключает ESLint во время сборки
  },
  typescript: {
    ignoreBuildErrors: true, // Игнорирует ошибки TypeScript при сборке
  },
};

export default config;
