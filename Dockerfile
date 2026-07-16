# ============================================================
# STAGE 0: base — shared setup for both dev and build stages
# ============================================================
FROM node:20-alpine AS base
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile


# ============================================================
# STAGE 1: dev — for local development with live reload
# ============================================================
FROM base AS dev
# We do NOT copy source code here — it'll be bind-mounted at `docker run`
# time instead, so edits on your host appear instantly in the container.
EXPOSE 5173
CMD ["yarn", "dev", "--host", "0.0.0.0"]


# ============================================================
# STAGE 2: build — compiles static production assets
# ============================================================
FROM base AS build
ARG VITE_EMAILJS_SERVICE_ID
ARG VITE_EMAILJS_TEMPLATE_ID
ARG VITE_EMAILJS_PUBLIC_KEY
ARG VITE_ALTCHA_API_CHALLENGE
ARG VITE_ALTCHA_API_VERIFY
ARG VITE_ALTCHA_KEY_ID
COPY . .
RUN yarn build


# ============================================================
# STAGE 3: serve — production nginx image (what Coolify deploys)
# ============================================================
FROM nginx:alpine AS serve
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]