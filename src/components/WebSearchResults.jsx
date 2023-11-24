import React from "react";
import Link from "next/link";
import Parser from "html-react-parser";
import Pagination from "./Pagination";
const WebSearchResults = ({ results }) => {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results(
        {results.searchInformation?.formattedSearchTime})
      </p>

      {results.items?.map((result) => (
        <div key={result.title} className="mb-8 max-w-xl">
          <div className="group flex flex-col">
            <Link className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className="group-hover:underline decoration-blue-800 text-xl text-blue-800 font-medium truncate"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>

          <p className="text-gray-600">{result.htmlSnippet}</p>
        </div>
      ))}
      <Pagination />
    </div>
  );
};

export default WebSearchResults;
