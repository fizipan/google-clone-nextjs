const ResultItem = ({ result }) => {
  return (
    <div className="flex flex-col space-y-1 mb-8 w-full max-w-xl">
      <div className="group cursor-pointer">
        <a href={result.link} className="text-sm text-[#202124]">
          {result.formattedUrl}
        </a>
        <a href={result.link}>
          <h2 className="text-xl truncate font-medium group-hover:underline text-blue-800">{result.title}</h2>
        </a>
      </div>
      <p className="line-clamp-2">{result.snippet}</p>
    </div>
  );
};

export default ResultItem;
