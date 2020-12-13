#!/usr/bin/env bash
echo "┏━━━ 🕵️‍♀️ LINT: eslint src --ext js,jsx ━━━━━━━"
yarn lerna run lint --stream --concurrency 1