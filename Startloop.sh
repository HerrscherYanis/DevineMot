#!/bin/bash
docker build -t guessword .
docker run -d --name guessword -p 80:80 guessword