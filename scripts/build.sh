#!/usr/bin/env sh

cd client
rm -rf build
echo '------------------'
echo Creating client build...
echo '------------------'
yarn build-css
yarn build-js
cd ..
echo $PWD
echo '------------------'
echo Creating server build...
echo '------------------'
yarn prod
echo '------------------'
echo Done.
echo '------------------'


