const { Compilation } = require("webpack");

module.exports = {
  plugins: [
    new (class {
      apply(compiler) {
        compiler.hooks.thisCompilation.tap("assetsMap", (compilation) => {
          compilation.hooks.processAssets.tap(
            {
              name: "assetsMap",
              stage: Compilation.PROCESS_ASSETS_STAGE_ANALYSE,
            },
            () => {
              console.log(compilation.getAssets());
            }
          );
        });
      }
    })(),
  ],
};
