# surf-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### If you want to compile and deploy in other repository use vue.config.js

```
publicPath: process.env.NODE_ENV === 'production'
    ? '/your-repository/folder/'	/*change to your repository*/	
    : './',				/*default root repository for serve mode*/
```
