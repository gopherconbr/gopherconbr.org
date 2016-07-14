FROM golang:1.7-wheezy

RUN go get -u -v github.com/spf13/hugo
RUN go install github.com/spf13/hugo

RUN curl https://getcaddy.com | bash -s git

RUN which caddy

ADD . /site-source

WORKDIR /site-source
EXPOSE 2015

CMD ["caddy"]

