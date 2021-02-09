const requestPromise = require('request-promise-native');

const API = 'https://jsonplaceholder.typicode.com/posts/';

function makeAPICall(id) {
  return requestPromise({
    url: API + id,
    method: 'GET',
    json: true
  });
}

async function processUsers() {
  let id = 1;
  let result = [];
  while (id < 10) {
    let data = await makeAPICall(id);
    console.log('fetching data from ', id);
    result.push(data);
    id += 1;
  }
  return result;
}

async function doIt() {
  console.log('starting...');
  console.time('run')
  let result = await processUsers();
  console.timeEnd('run');
  console.log(result);
}

doIt();
