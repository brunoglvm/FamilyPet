FROM node:22

WORKDIR /app/backend

RUN apt-get update \
    && apt-get install -y --no-install-recommends netcat-openbsd \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]
