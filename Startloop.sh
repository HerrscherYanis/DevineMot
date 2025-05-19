#!/bin/bash
docker stop guessword || true
docker rm guessword || true

docker build -t guessword .
docker run -d --name guessword -p 80:80 guessword