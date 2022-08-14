import { parseCookies } from 'nookies';

export function canSSRAuth() {
  return async () => {
    const cookies = parseCookies();

    const token = cookies['@nextauth.token'];

    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    return;
  };
}
