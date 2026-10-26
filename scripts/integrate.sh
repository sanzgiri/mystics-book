#!/usr/bin/env bash
# Merge all batch files, build, check links, commit and push. Usage: scripts/integrate.sh "message"
set -e
cd "$(dirname "$0")/.."
python3 scripts/merge-batches.py
npm run build 2>&1 | grep -E "ERROR|error|Style check|page\(s\) built" | tail -8
npm run links | tail -1
git add -A
git -c user.name="Claude" -c user.email="noreply@anthropic.com" commit -q -m "$1

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01B9rfP8PfVhLcbjZyDLeDix" || true
git push -q origin main 2>&1 | tail -1
git log --oneline -1
