import ResultItem from './ResultItem';

const Result = ({ results }) => {
  return (
    <div className="mt-3 mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-sm text-gray-600 mb-4">
        About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => {
        return <ResultItem key={result.link} result={result} />;
      })}
    </div>
  );
};

export default Result;
