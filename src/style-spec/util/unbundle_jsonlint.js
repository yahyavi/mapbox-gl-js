
// Turn jsonlint-lines-primitives objects into primitive objects
function unbundle(value) {
    if (value instanceof Number || value instanceof String || value instanceof Boolean) {
        return value.valueOf();
    } else {
        return value;
    }
}

function unbundleDeep(value) {
    if (Array.isArray(value)) {
        return value.map(unbundleDeep);
    }
    return unbundle(value);
}

unbundle.deep = unbundleDeep;

export default unbundle;
