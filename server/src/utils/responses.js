const statusCodes = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  INTERNAL_SERVER_ERROR: 500,
  BAD_REQUEST: 400,
};

exports.successResponse = function (res, data) {
  return res.status(statusCodes.SUCCESS).json({
    message: data.message,
    data: data.data,
    success: true,
  });
};
exports.errorResponse = function (res, data) {
  return res.status(data.statusCode || statusCodes.INTERNAL_SERVER_ERROR).json({
    message: data.message,
    data: data.data,
    success: false,
  });
};

exports.statusCodes = statusCodes;
