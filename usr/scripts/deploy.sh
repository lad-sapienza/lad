#!/bin/bash
# Deploy s:CMS to production Digilab server

set -e

# Resolve project root (two levels up from usr/scripts/) and add local bin to PATH
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
export PATH="$PROJECT_ROOT/node_modules/.bin:$PATH"

echo "🔍 Running type check..."
if ! astro check; then
  echo "❌ Type check failed. Aborting."
  exit 1
fi

echo "🏗️  Building..."
if ! astro build; then
  echo "❌ Build failed. Aborting."
  exit 1
fi

echo ""
echo "✅ Build succeeded."
read -p "📤 Deploy to production? (y/N): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "❌ Deploy cancelled."
  exit 0
fi

echo "🚀 Deploying..."
rsync -arvzu \
  --delete \
  --filter='P .ssh' \
  --filter='P .bash_history' \
  --filter='P .screenrc' \
  dist/ lad:

echo "✓ Deploy complete."
