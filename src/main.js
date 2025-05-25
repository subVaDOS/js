import axios from 'axios';
function getNews() {
  const baseUrl = `https://newsapi.org/v2`;
  const endPoint = `/top-headlines`;
  const url = baseUrl + endPoint;

  const params = {
    pageSize: 10,
    category: `technology`,
  };
  const headers = {
    'X-Api-Key': `4a9af9f026484c329ef6cc05ceeb88d9`,
  };

  return axios.get(url, { params, headers }).then(res => res.data);
}
function initPage() {
  getNews().then(data => {
    console.log(data);
  });
}
initPage();
