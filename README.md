# GopherCon Brasil

This is the website for the GopherCon Brasil conference

### Contributing

To view the site locally, install [Hugo](http://gohugo.io/) and run a local server with the following command:
```
hugo server -v -w -t=gopherconbr
hugo server -v -w -t=gopherconbr --config=config_en.toml

```

### Running with Docker

```
$ cd docker
$ docker build -t gopherconbr:latest .
$ docker run -d -p 80:80 -p 443:443 gopherconbr:latest
```

### Editions

[2016](https://github.com/gopherconbr/gopherconbr.org/tree/2016)
[2017](https://github.com/gopherconbr/gopherconbr.org/tree/2017)
