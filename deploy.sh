#!/bin/sh

set -e
set -x

cd dist
git commit -am 'update'
git push origin master
git push heroku master
