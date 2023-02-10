const getData = async () => {
  const response = await fetch('https://api.disneyapi.dev/characters');
  const data = await response.json();
  return data.data;
};
const getClicks = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nkjqDKDvMMwAFsU6RQcX/likes');
  const data = await response.json();
  return data;
};

export { getData, getClicks };