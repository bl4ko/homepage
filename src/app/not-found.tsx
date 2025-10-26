import NextLink from "next/link";
import { JSX } from "react";

export default function NotFound(): JSX.Element {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold">404 - Page not found</h1>
      <p className="my-6">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <hr className="my-6" />
      <div className="my-6 text-center">
        <NextLink href="/" passHref>
          <button className="bg-aqua hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-sm focus:outline-hidden focus:shadow-outline">
            Return to homepage
          </button>
        </NextLink>
      </div>
    </div>
  );
}
