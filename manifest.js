module.exports = {
    id: "org.community.HYYourIPTV",
    version: "2.0",
    name: "Your EPG IPTV",
    logo: "./logo.png",
    description: "This addon brings all the Live Streams, VOD streams and Series from your IPTV subscription to your Stremio using Xtream API.",
    types: ["movie", "series", "tv", "channel"],
    background: "./background.jpg",
    resources: ["movie", "series", "tv"],
    catalogs: [],
    idPrefixes: ["yiptv:"],
    behaviorHints: { configurable: true, configurationRequired: true },
};
