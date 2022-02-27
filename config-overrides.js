module.exports = function override(config, env) {
    config.resolve = {
        ...config.resolve,
        fallback: {
            crypto: require.resolve('crypto-browserify')
        }
    }
    return config
}