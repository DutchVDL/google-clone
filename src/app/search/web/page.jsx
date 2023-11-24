import WebSearchResults from "@/components/WebSearchResults";
import React from "react";

const WebSearchPage = async ({ searchParams }) => {
  const startIndex = searchParams.start || "1";
  const response = await fetch(`
  https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}
  `);

  if (!response.ok) {
    throw new Error("something went wrong");
  }

  const data = await response.json();
  const result = data.items;
  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Oops! No results found.
          </h1>
          <p className="text-gray-600">
            It looks like there are no results matching your search. Please try
            again with different keywords.
          </p>
        </div>
      </div>
    );
  }

  return <div>{result && <WebSearchResults results={data} />}</div>;
};

export default WebSearchPage;
