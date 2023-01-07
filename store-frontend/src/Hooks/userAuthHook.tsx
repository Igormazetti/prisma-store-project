import { createContext, useState, useEffect, ReactNode, FC } from 'react';
import { useRouter } from 'next/router';
import { selectTokenState } from 'redux/store/tokenSlice';
import { useSelector } from 'react-redux';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

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
