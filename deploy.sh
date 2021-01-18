#!/bin/bash
hugo -t=gopherconbr
hugo -t=gopherconbr --config=config_en.toml
git submodule add -b master git@github.com:gopherconbr/gopherconbr.github.io.git public
cd public
git add .
git commit -m "updating site"
git push origin master
cd ..