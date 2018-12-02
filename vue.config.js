module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/vue-portfolio/' : '/',
    css: {
        loaderOptions: {
            // pass options to sass-loader
            sass: {
                // @/ is an alias to src/
                // so this assumes you have a file named `src/main.scss`
                data: `@import "@/assets/scss/_main.scss";`
            }
        }
    }
}
