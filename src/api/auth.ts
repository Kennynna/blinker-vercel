// src/api/auth.ts

interface TokenResponse {
  access_token: string;
}

let cachedToken: { token: string; expiry: number } | null = null;

/**
 * Получает access_token.
 * Если токен уже есть и не истёк, возвращает его.
 * Иначе делает запрос на логин и кэширует новый токен.
 */
export async function getAccessToken(): Promise<string> {
  // Если токен есть и он валиден (с небольшим запасом в 5 секунд), возвращаем его.
  if (cachedToken && cachedToken.expiry > Date.now()) {
    return cachedToken.token;
  }

  // Запрос для получения нового токена.
  const response = await fetch('https://api.blinker-dev.ru/api/v1/authentication/log-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login: 'example@ibm.com',
      password: '12345678',
    }),
  });

  if (!response.ok) {
    throw new Error('Не удалось получить access token');
  }

  const data: TokenResponse = await response.json();

  // Кэшируем токен на 60 минут с небольшим запасом (5 секунд)
  cachedToken = {
    token: data.access_token,
    expiry: Date.now() + 60 * 60 * 1000 - 5000,
  };

  return data.access_token;
}
