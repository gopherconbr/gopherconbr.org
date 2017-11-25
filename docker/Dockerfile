FROM golang:1.9

RUN curl https://getcaddy.com | bash -s personal http.git

RUN curl -SL https://github.com/gohugoio/hugo/releases/download/v0.31/hugo_0.31_Linux-32bit.tar.gz | tar zxvf - -C /usr/bin/

RUN which caddy
RUN which hugo

ADD . /site-source

WORKDIR /site-source
EXPOSE 2015
EXPOSE 80
EXPOSE 443

CMD ["caddy"]
