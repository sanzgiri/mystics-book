#!/usr/bin/env bash
# Merge batches, commit ONLY finished files, verify a clean build of the commit, then push.
# Usage: scripts/integrate.sh "message" <content files of finished units...>
set -e
cd "$(dirname "$0")/.."
MSG="$1"; shift
python3 scripts/merge-batches.py
git add src/data docs scripts src/pages src/components src/layouts src/styles public package.json package-lock.json astro.config.mjs "$@" 2>/dev/null || true
git -c user.name="Claude" -c user.email="noreply@anthropic.com" commit -q -m "$MSG

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01B9rfP8PfVhLcbjZyDLeDix" || { echo "nothing to commit"; exit 0; }
# verify the committed tree in isolation
WT=/tmp/claude-0/verify-wt
rm -rf "$WT"; git worktree prune; git worktree add -q --detach "$WT" HEAD
ln -s "$PWD/node_modules" "$WT/node_modules"
( cd "$WT" && node scripts/style-check.mjs | tail -1 && npx astro build >/tmp/claude-0/verify.log 2>&1 && node scripts/check-links.mjs | tail -1 ) && OK=1 || OK=0
git worktree remove --force "$WT"
if [ "$OK" = 1 ]; then git push -q origin main 2>&1 | tail -1; echo "PUSHED $(git log --oneline -1)"; else echo "VERIFY FAILED (not pushed); see /tmp/claude-0/verify.log"; tail -5 /tmp/claude-0/verify.log; fi
