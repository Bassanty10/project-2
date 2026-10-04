FROM node:18-alpine

WORKDIR /app

COPY logger.js .

CMD ["node", "logger.js"]