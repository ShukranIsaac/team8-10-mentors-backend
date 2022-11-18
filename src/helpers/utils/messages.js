const messages = (module.exports = {});
messages.successResponse = (headers, statusCode, data) => ({
    headers,
    statusCode,
    data: {
        status: 'SUCCESS',
        message: 'Your request was successful',
        data: data,
    },
})

messages.failureResponse = (headers, statusCode, data) => ({
    headers,
    statusCode,
    data: {
        status: 'FAILURE',
        message: 'Internal Server Error',
        data: data,
    },
})

messages.badRequest = (headers, statusCode, data) => ({
    headers,
    statusCode,
    data: {
        status: 'BAD_REQUEST',
        message: 'The request cannot be fulfilled',
        data: data,
    },
})

messages.isDuplicate = (headers, statusCode, data) => ({
    headers,
    statusCode,
    data: {
        status: 'VALIDATION_ERROR',
        message: 'Data duplication Found',
        data: data,
    },
})

messages.recordExists = (headers, statusCode, key, data) => ({
    headers,
    statusCode,
    data: {
        status: 'CONFLICT',
        message: `The system did not process the request. User with ${ key } already exists.`,
        data: data,
    },
})

messages.recordNotFound = (headers, statusCode, data) => ({
    headers,
    statusCode,
    data: {
        status: 'RECORD_NOT_FOUND',
        message: 'No record was found',
        data: data,
    },
})

messages.insufficientParameters = (headers, statusCode) => ({
    headers,
    statusCode,
    data: {
        status: 'BAD_REQUEST',
        message: 'Insufficient parameters',
        data: {},
    },
});

messages.dataBaseError = (headers, statusCode, error) => ({
    headers,
    statusCode,
    data: {
        status: 'FAILURE',
        message: 'Database related error',
        data: error,
    },
})

messages.inValidParam = (headers, statusCode, error) => ({
    headers,
    statusCode,
    data: {
        status: 'VALIDATION_ERROR',
        message: 'Invalid values in parameters',
        data: error,
    },
})

messages.unAuthorizedRequest = (headers, statusCode, error) => ({
    headers,
    statusCode,
    data: {
        status: 'UNAUTHORIZED',
        message: 'You are not authorized to make this request',
        data: error,
    },
})

messages.loginSuccess = (headers, statusCode, data) => ({
    headers,
    statusCode,
    data: {
        status: 'SUCCESS',
        message: 'Login Successfull',
        data: data,
    },
})

messages.passwordEmailWrong = (headers, statusCode) => ({
    headers,
    statusCode,
    data: {
        status: 'BAD_REQUEST',
        message: 'Username or password is incorrect',
        data: {},
    },
})

messages.loginFailed = (headers, statusCode, error) => ({
    headers,
    statusCode,
    data: {
        status: 'BAD_REQUEST',
        message: 'Login Failed',
        data: error,
    },
})

messages.failedSoftDelete = (headers, statusCode) => ({
    headers,
    statusCode,
    data: {
        status: 'FAILURE',
        message: 'Data could not be soft deleted. Internal server error',
        data: {},
    },
})

messages.changePasswordFailure = (headers, statusCode, data) => ({
    headers,
    statusCode,
    data: {
        status: 'FAILURE',
        message: `Password cannot be changed. Reasons: ${data}`,
        data: {},
    },
})

messages.changePasswordSuccess = (headers, statusCode, data) => ({
    headers,
    statusCode,
    data: {
        status: 'SUCCESS',
        message: data,
        data: {},
    },
})
