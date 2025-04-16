'use client';

import React, { createContext, useEffect, useState } from 'react';

interface User {
  id: number;
  email: string;
  // ... другие данные пользователя
}

interface AuthContextValue {
  user: User | null;
  token: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  token: null,
  signIn: async () => {},
  signOut: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(function () {
    // Проверка наличия данных пользователя и токена в localStorage при загрузке
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    console.log('authentication');
  }, []);

  async function signIn(email: string, password: string) {
    try {
      // Запрос к API для аутентификации
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка входа');
      }

      const data = await response.json();
      // Пример ответа API:
      // {
      //   "token": "your_access_token",
      //   "user": {
      //     "id": 1,
      //     "email": "test@example.com"
      //   }
      // }

      // Сохранение данных пользователя и токена в localStorage
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);

      setUser(data.user);
      setToken(data.token);
    } catch (error) {
      console.error('Ошибка входа:', error);
      // Обработка ошибки, например, вывод сообщения
    }
  }

  function signOut() {
    // Удаление данных пользователя и токена из localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
