# MEAN stack To-Do App

  TodoApp implemented using angular mongo and node.
  
## Run the App

```sh
$ sudo service mongod start
$ npm install
$ cd client
$ npm start
```

## Angular and Node tied together using proxy-conf.json

```sh
{
    "/api/*" : {
        "target" : "http://localhost:3000",
        "secure" : false,
        "logLevel" : "debug",
        "changeOrigin" : true
    }
}
```
