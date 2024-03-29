const mix = require("laravel-mix");
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts("resources/js/app.ts", "public/js")
    .vue({ version: 3 })
    .postCss("resources/css/app.css", "public/css", [
        require("tailwindcss"),
        //
    ])
    .webpackConfig({
        resolve: {
            alias: {
                "@": path.resolve("resources/js"),
            },
            extensions: [".js", ".vue", ".json", ".ts"],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    options: { appendTsSuffixTo: [/\.vue$/] },
                },
            ],
        },
    });
