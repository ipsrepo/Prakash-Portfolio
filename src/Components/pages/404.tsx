import React from "react";
import { ForbiddenIcon } from "../../icons";

const Page404 = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <ForbiddenIcon className="w-12 h-12 mt-8 text-purple-200" aria-hidden="true" />
      <h1 className="text-xxl py-4 font-semibold text-gray-700 dark:text-gray-200">404</h1>
      <p className="text-gray-700 dark:text-gray-300">
        This page is under construction. Stay tuned for updates, or check back later.{""}
        <a className="text-primary font-semibold underline" href="https://prakasht.netlify.app/">
          go Home
        </a>
        .
      </p>
    </div>
  );
};
export default Page404;
