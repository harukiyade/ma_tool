FROM node:22-alpine3.18 as base

WORKDIR /frontend
################################################################################
# Create a stage for installing production dependecies.
FROM base as deps

RUN apk add --no-cache libc6-compat
WORKDIR /frontend

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

COPY . .

################################################################################
# Create a stage for building the application.
FROM deps as build

RUN npm run build

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.
FROM base as final

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=build /frontend/public ./public
COPY --from=build --chown=nextjs:nodejs /frontend/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /frontend/.next/static ./.next/static

USER nextjs

EXPOSE 3000

# TODO: 環境変数は.envファイルを使用して管理したい
ENV NODE_ENV production

ENV PORT 3000
CMD HOSTNAME="0.0.0.0" node server.js