// cath all middleware like if not /api/post and /api/test then
const notFound = (req, res, next) => {
  const error = new Error("not found");
  error.status = 404;
  next(error);
};

export default notFound