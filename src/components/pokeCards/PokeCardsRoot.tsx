import axios from 'axios';
import { Title } from '../Title';
import { useQuery } from '@tanstack/react-query';

export const PokeCardsRoot = () => {
  return (
    <>
      <Title titleText="Poké Cards" />
      <FetchDemoData />
    </>
  );
};

export const FetchDemoData = () => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios
        .get('https://api.github.com/repos/tannerlinsley/react-query')
        .then((res) => res.data),
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An Error occurred</p>;

  return (
    <div className="App">
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </div>
  );
};
