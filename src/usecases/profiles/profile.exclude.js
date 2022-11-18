
// Exclude keys from user
exports.excludeKeys = function excludeKeys(model, keys = []) {
    for (let key of keys) {
        delete model[key]
    }
    return model
}