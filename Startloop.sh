#!/bin/bash

docker stop guessword || true
docker rm guessword || true

docker build -t guessword .
docker -d --name guessword run -p 80:80 guessword