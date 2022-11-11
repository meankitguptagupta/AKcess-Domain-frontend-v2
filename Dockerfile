FROM ubuntu:20.04

ENV TZ=Asia/Kolkata

RUN apt-get update  \
    && apt-get upgrade -y   \
    && ln -fs /usr/share/zoneinfo/${TZ} /etc/localtime \
    && apt-get install curl build-essential git -y  \
    && curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh   \
    && bash /tmp/nodesource_setup.sh    \
    && apt install nodejs -y    \
    && npm i create-react-app -g

WORKDIR /home/code

EXPOSE 3000

COPY . .