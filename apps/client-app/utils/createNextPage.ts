import { NextPage, NextPageProps } from '@client-app/interfaces/next';

/**
 * Helper function to create next pages.
 */
export default function createNextPage<P extends NextPage>(page: P, opts: NextPageProps = {}) {
  return Object.assign(page, opts);
}
