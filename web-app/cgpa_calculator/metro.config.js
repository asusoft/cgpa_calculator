const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
    const {
        resolver: { sourceExts, assetExts },
    } = await getDefaultConfig();
    return {
        resolver: {
            assetExts: assetExts.filter((ext) => ext !== 'svg'),
            sourceExts: [...sourceExts, 'jsx', 'js', 'ts', 'tsx'], // Add additional extensions for web support
        },
    };
})();