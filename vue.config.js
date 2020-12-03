module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/surf-project/dist/'
    : './',
  runtimeCompiler: true,
}
