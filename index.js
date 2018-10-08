const applescript = require('applescript')

module.exports = () => new Promise((resolve, reject) => {
  applescript.execString(`tell application "iTunes" to get {artist, name, album} of current track`, (err, res) => {
    if (err) reject(err)
    const [ artist, name, album ] = res
    resolve({ artist, name, album })
  })
})
