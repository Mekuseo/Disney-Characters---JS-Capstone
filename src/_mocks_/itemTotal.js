import fetch from 'cross-fetch';

export default async () => {
  const response = await fetch('https://api.disneyapi.dev/characters');
  const data = await response.json();
  return data.data;
};
