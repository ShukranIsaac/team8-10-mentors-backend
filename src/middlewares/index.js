
exports.logs = () => {
    return {
        stream: (rfs, _path) => rfs.createStream('access.log', {
            interval: '1d', // rotate daily
            path: _path.join(__dirname, '../../logs')
        }),
    }
}