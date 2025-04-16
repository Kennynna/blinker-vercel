import { buildServerURL } from './build-server-url';

export function getApiURL(): string {
  console.log('process.env.NEXT_PUBLIC_SERVER_API', process.env.NEXT_PUBLIC_SERVER_API);
  return buildServerURL(`${process.env.NEXT_PUBLIC_SERVER_API}/api/v1`);
}
