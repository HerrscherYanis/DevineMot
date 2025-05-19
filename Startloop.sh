#!/bin/bash
docker build -t guessword .
docker run -p 80:80 guessword