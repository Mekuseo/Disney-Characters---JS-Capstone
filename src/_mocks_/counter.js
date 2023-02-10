import fetch from 'cross-fetch';

export default async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byg3KtvqOhmd3Xt9Axu5/comments?item_id=item${id}`);
  const data = await response.json();
  return data;
};