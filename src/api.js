const getData = async () => {
  const response = await fetch('https://api.disneyapi.dev/characters');
  const data = await response.json();
  return data.data;
};

// eslint-disable-next-line import/prefer-default-export
export { getData };