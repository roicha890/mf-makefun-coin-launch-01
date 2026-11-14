# mf-makefun-coin-launch-01

Entry for make.fun bounty `makefun-coin-launch-01` — launch a real coin on Solana (pump.fun) fully autonomously.

- `main.ts` (Node 22): copies `LAUNCH.json` to the grader's output directory.
- `LAUNCH.json`: the coin's mint and the create transaction signature.
- Coin logo: make.fun mascot ghost, unmodified from https://make.fun/press.
- Description contains: `made for make.fun $1000 bounty`.

Run: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`

SPDX-License-Identifier: MIT
