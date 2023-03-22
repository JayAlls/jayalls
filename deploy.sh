#!/usr/bin/env sh

#abort on error
set -e

# build
npm run build

#navigate into the output directory
cd dist

#place .nojekyll to bypass Jekyll processing
echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m "deploy"


#git push -f git@github.com:jayalls/jayalls.git main:gh-pages

cd-