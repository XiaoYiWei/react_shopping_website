import { users } from './../data/users';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function getUser(email, pwd) {
  return new Promise((resolve, reject) => {
    console.log('getUser api simulating');
    resolve();
  })
    .then(() => sleep(2000))
    .then(() => {
      return users;
    });
}

export { getUser };
