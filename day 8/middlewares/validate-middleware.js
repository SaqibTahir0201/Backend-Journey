const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    console.log("Validation error:", err);

    // Handle both old and new Zod versions
    const issues = err.errors || err.issues;

    if (Array.isArray(issues) && issues.length > 0) {
      const message = issues[0].message; // get first error message
      return res.status(400).json({ msg: message });
    }

    // Fallback for unexpected errors
    return res.status(400).json({ msg: "Invalid input data" });
  }
};

module.exports = validate;
