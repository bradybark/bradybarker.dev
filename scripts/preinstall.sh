#!/bin/sh
if [ -n "$GH_PAT" ]; then
  # Rewrite HTTPS URLs to include token
  git config --global url."https://${GH_PAT}@github.com/".insteadOf "https://github.com/"
  # Also rewrite SSH URLs to authenticated HTTPS (npm sometimes uses SSH)
  git config --global url."https://${GH_PAT}@github.com/".insteadOf "git@github.com:"
  git config --global url."https://${GH_PAT}@github.com/".insteadOf "ssh://git@github.com/"
  echo "Git configured for authenticated GitHub access (HTTPS and SSH rewrites)"
fi

# Force clear @bark/ui from node_modules to ensure latest version is fetched (bypass Vercel cache)
if [ -d "node_modules/@bark/ui" ]; then
  echo "Removing cached @bark/ui to force update..."
  rm -rf node_modules/@bark/ui
fi
