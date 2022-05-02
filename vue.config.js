module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
    configureWebpack: {
        optimization: {
            splitChunks: false,
        },
        output: {
            filename: "build.js",
        },
    },
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === "production") {
            config
                .plugin("extract-css")
                .tap(([options, ...args]) => [
                    Object.assign({}, options, { filename: "build.css" }),
                    ...args,
                ]);
        }
    },
};
