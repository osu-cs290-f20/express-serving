function logger(req, res, next) {
  console.log("== New request received at", Date.now());
  console.log("  -- method:", req.method);
  console.log("  -- url:", req.url);
  next();
}

module.exports = logger;
