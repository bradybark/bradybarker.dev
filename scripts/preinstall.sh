#!/bin/bash

# Configure git to use HTTPS for GitHub (just in case, though less relevant for registry pkgs)
if [ -n "$GH_PAT" ]; then
  git config --global url."https://$GH_PAT@github.com/".insteadOf "ssh://git@github.com/"
  git config --global url."https://$GH_PAT@github.com/".insteadOf "git@github.com:"
  echo "Git configured for authenticated GitHub access (HTTPS and SSH rewrites)"

  # Configure npm to authenticate with GitHub Packages
  echo "@bradybark:registry=https://npm.pkg.github.com" > .npmrc
  echo "//npm.pkg.github.com/:_authToken=$GH_PAT" >> .npmrc
  echo "npm configured for GitHub Packages authentication"
fi
