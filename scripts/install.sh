#!/bin/bash

echo '------------------'
echo Installing server dependencies in $PWD
echo '------------------'
yarn
cd client
echo '------------------'
echo Installing client dependencies in $PWD
echo '------------------'
yarn
