# JSON-DOTTED

Utility for display JSON object in dotted format.

## Example

```javascript
const jsondotted = require('json-dotted');

const jsonObject = {
    agents: [],
    statistics: {
        by: {
            status: '',
            calls: {
                accepted: 0,
                rejected: 0
            }
        }
    },
    alerts: []
}

console.log(jsondotted(jsonObject).keys);

//Console output
[ 'agents',
  'statistics.by.status',
  'statistics.by.calls.accepted',
  'statistics.by.calls.rejected',
  'alerts' ]
```

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**