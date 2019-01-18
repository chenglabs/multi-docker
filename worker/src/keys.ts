const keys = {
  redisHost: process.env.REDIS_HOST || "",
  redisPort: +(process.env.REDIS_PORT || "0")
};

export { keys as default };
