#!/bin/sh

set -e
set -x

grunt build
cd dist
git commit -am 'Update'
git push origin master
git push heroku master
