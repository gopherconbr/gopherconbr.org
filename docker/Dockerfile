FROM golang:1.7-wheezy

RUN curl https://getcaddy.com | bash -s git

RUN curl -SL https://github.com/spf13/hugo/releases/download/v0.16/hugo_0.16_linux-64bit.tgz | tar zxvf - -C /usr/bin/

RUN which caddy
RUN which hugo

ADD . /site-source

WORKDIR /site-source
EXPOSE 2015
EXPOSE 80
EXPOSE 443

CMD ["caddy"]