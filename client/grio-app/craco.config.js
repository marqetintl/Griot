const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

const packages = [];
const PACKAGES_FOLDER = "../../../../packages/";

packages.push(path.join(__dirname, "../grio-admin/src/"));
packages.push(path.join(__dirname, "../grio-public/src/"));
// packages.push(path.join(__dirname, "../miq-shared/src/"));
packages.push(path.join(__dirname, PACKAGES_FOLDER, "miq-shared/src/form/"));
packages.push(path.join(__dirname, PACKAGES_FOLDER, "miq-shared/src/components/"));
packages.push(path.join(__dirname, PACKAGES_FOLDER, "miq-shared/src/contexts/"));
packages.push(path.join(__dirname, PACKAGES_FOLDER, "miq-shared/src/utils/"));

module.exports = {
    webpack: {
        alias: {},
        plugins: [],
        configure: (webpackConfig, args) => {
            const { isFound, match } = getLoader(webpackConfig, loaderByName("babel-loader"));
            if (isFound) {
                const include = Array.isArray(match.loader.include) ? match.loader.include : [match.loader.include];
                match.loader.include = include.concat(packages);
            }
            return webpackConfig;
        },
    },
};
