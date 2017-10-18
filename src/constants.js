module.exports = {
  path: 'blog',
  // host: 'http://192.168.7.58:80/'
  host: window.location.hostname == 'localhost'?'http://ywjgame.com/' : 'http://' + window.location.host + '/'
}

