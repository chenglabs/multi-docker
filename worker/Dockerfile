FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN yarn install
COPY . .
RUN yarn run build

FROM node:alpine
WORKDIR "/app"
COPY ./package.json ./
COPY --from=builder /app/dist ./dist
RUN yarn install --production
COPY . .
CMD ["yarn", "run", "start"]

