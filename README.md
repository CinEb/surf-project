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

### vue.config.js if you want to compile and deploy in other repository
publicPath: process.env.NODE_ENV === 'production'
    ? '/your-repository/folder/'  	### change in quotes your project repository
    : './',				### default root project repo for serve mode 
