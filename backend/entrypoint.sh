#!/usr/bin/env bash
set -euo pipefail

echo "Waiting for db..."
attempt=1

while ! nc -z db 5432 >/dev/null 2>&1; do
  if [ "$attempt" -ge 60 ]; then
    echo "DB not reachable."
    exit 1
  fi
  attempt=$((attempt + 1))
  sleep 1
done

npx prisma db push
npx prisma generate
exec npm run dev
