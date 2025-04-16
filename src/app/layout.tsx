// @ts-nocheck
'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import type { Viewport } from 'next';

import '@/styles/global.css';

import Head from 'next/head';

import { config } from '@/config';
import { applyDefaultSettings } from '@/lib/settings/apply-default-settings';
import { getSettings as getPersistedSettings } from '@/lib/settings/get-settings';
import { AuthProvider } from '@/contexts/auth/auth';
import { UserProvider } from '@/contexts/auth/user-context';
import { QueryClientProvider } from '@/contexts/QueryClientProvider';
import { SettingsProvider } from '@/contexts/settings';
import { Analytics } from '@/components/core/analytics';
import { I18nProvider } from '@/components/core/i18n-provider';
import { SettingsButton } from '@/components/core/settings/settings-button';
import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';
import { Toaster } from '@/components/core/toaster';





export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: config.site.themeColor,
} satisfies Viewport;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [settings, setSettings] = useState<Partial<Settings> | null>(null); // Add state for settings
  const CORRECT_PASSWORD = 'cycfib-6hygpo-Foqtyx'; // Replace with your password or use env variable

  // Check authentication status on mount
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  console.log('is it working ?');
  

  // Fetch settings asynchronously on mount
  useEffect(() => {
    const fetchSettings = async () => {
      const persistedSettings = await getPersistedSettings(); // Await the Promise
      const finalSettings = applyDefaultSettings(persistedSettings);
      setSettings(finalSettings); // Set the resolved settings
    };
    fetchSettings();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
    } else {
      alert('Incorrect password');
      setPassword('');
    }
  };

  // Password prompt UI
  if (!isAuthenticated) {
    return (
      <html data-mui-color-scheme="light" lang="en">
        <body>
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md w-full max-w-sm">
              <h2 className="text-xl font-bold mb-4 text-center">Enter Password</h2>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </body>
      </html>
    );
  }

  // Render loading state while settings are being fetched
  if (!settings) {
    return (
      <html data-mui-color-scheme="light" lang="en">
        <body>
          <div>Loading...</div>
          {/* Optional: Add a loading indicator */}
        </body>
      </html>
    );
  }

  // Original layout when authenticated and settings are loaded
  return (
    <html data-mui-color-scheme={settings.colorScheme} lang="en">
      <body>
        <AuthProvider>
          <QueryClientProvider>
            <Analytics>
              <UserProvider>
                <SettingsProvider settings={settings}>
                  <I18nProvider language="en">
                    <ThemeProvider>
                      <Head>
                        <meta
                          name="viewport"
                          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                        />
                      </Head>
                      {children}
                      <SettingsButton />
                      <Toaster position="bottom-right" />
                    </ThemeProvider>
                  </I18nProvider>
                </SettingsProvider>
              </UserProvider>
            </Analytics>
          </QueryClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
