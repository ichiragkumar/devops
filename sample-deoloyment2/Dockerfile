# --- Stage 1: Dependencies ---
FROM node:alpine AS deps

WORKDIR /app

COPY package*.json ./
RUN npm install

# --- Stage 2: Final ---
FROM node:alpine

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
