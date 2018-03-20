#!/bin/bash

cd client
rm -rf build
echo '------------------'
echo Creating client build...
echo '------------------'
yarn build
cd ..
echo $PWD
echo '------------------'
echo Creating server build...
echo '------------------'
yarn prod
echo '------------------'
echo Done. Please commit your builds to source control
echo '------------------'


