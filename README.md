# itunes-listening-node
iTunes "Listening now" API for Node.js

Made possible by [applescript](https://github.com/TooTallNate/node-applescript)

Example:
```javascript
const getListening = require('./')
const song = await getListening()

console.dir(song.artist)
console.dir(song.name)
console.dir(song.album)
```