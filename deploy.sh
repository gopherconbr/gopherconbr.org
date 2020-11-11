#!/bin/bash
hugo -t=gopherconbr
hugo -t=gopherconbr --config=config_en.toml
cd public
git add .
git commit -m "updating site"
git push origin master
cd ..