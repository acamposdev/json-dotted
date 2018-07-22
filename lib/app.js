function doterize(obj, k, n, p) {
    let keys = k || [];
    let normalized = n || {};
    let path = p || '';

    for(key in obj) {
        path += (path == '')? key : '.' + key;
        if (typeof obj[key] == 'object' && !(obj[key] instanceof Array)) {
            doterize(obj[key], keys, normalized, path);
        } else {
            keys.push(path);
            normalized[path] = obj[key];
        }

        path = path.substring(0, path.lastIndexOf('.'));
    }

    return {
        keys,
        normalized
    }
}

module.exports = doterize;