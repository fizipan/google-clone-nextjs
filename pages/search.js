import HeaderSearch from '@/components/HeaderSearch';
import Result from '@/components/Result';
import { API_KEY, CONTEXT_KEY } from 'keys';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

const Search = ({ results }) => {
  console.log(results);
  const { query } = useRouter();
  return (
    <div>
      <Head>
        <title>{query.term} - Google Search</title>
      </Head>

      {/* Header Search */}
      <HeaderSearch />

      {/* Search Result */}
      <Result results={results} />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const useDumyData = false;

  const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
