// the logout method is attched by passport, logout destroys the cookie
const users = [
  {name: 'Kingsley', age:34, id: '132'},
  {name: 'Bob', age:54, id: '855'},
  {name: 'Peter', age:26, id: '888'},
  {name: 'Anna', age:24, id: '789'},
  {name: 'Melisa', age:18, id: '7879'},
  {name: 'Leah', age:26, id: '1212'},
];

module.exports = (app) => {
  app.get('/api/users', (req, res) => {
    res.send(users);
  });
}
