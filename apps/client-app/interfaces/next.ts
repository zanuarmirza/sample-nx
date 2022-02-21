import {
  NextComponentType as BaseNextComponentType,
  NextPage as BaseNextPage,
  NextPageContext as BaseNextPageContext,
} from 'next';
import { AppProps as BaseAppProps } from 'next/app';

export type LayoutType = (page: React.ReactElement) => JSX.Element;

export type NextPageProps = {
  layout?: LayoutType;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextComponentType = NextPageProps & BaseNextComponentType<BaseNextPageContext, unknown, {}>;

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPage<P = {}, IP = P> = NextPageProps & BaseNextPage<P, IP>;

export type NextAppProps = BaseAppProps & {
  Component: NextComponentType;
  pageProps: Record<string, unknown>;
};
