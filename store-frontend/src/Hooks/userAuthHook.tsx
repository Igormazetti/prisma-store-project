import { parseCookies } from 'nookies';

export const userAuthHook = (ctx: any) => {
  const { token: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return { props: {} };
};
