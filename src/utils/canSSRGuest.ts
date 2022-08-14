import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import { parseCookies } from 'nookies';

export function canSSRGuest<P>(fn: GetStaticProps<P>) {
  return async (
    ctx: GetStaticPropsContext,
  ): Promise<GetStaticPropsResult<P>> => {
    const cookies = parseCookies();

    if (cookies['@nextauth.token']) {
      return {
        redirect: {
          destination: '/list',
          permanent: false,
        },
      };
    }

    return await fn(ctx);
  };
}
