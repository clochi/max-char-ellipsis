# Max char ellipsis

Cut and replace characters when it exceeds.

```shell
$ npm install max-char-ellipsis
```

```javascript
const { maxCharEllipsis } = require('max-char-ellipsis');

const text = 'This is a long text in my file that I have to cut.';
const length = 20;

console.log(maxCharEllipsis(text, length));
// This is a long text...
```