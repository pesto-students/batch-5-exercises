function requestValidator(httpObj) {
    var errorKey;
    var httpMethodRegEx = /^(GET|POST|DELETE)$/;
    var httpUriRegEx = /^([a-zA-Z0-9\.]+|\*)$/;
    var httpVersionRegEx = /^HTTP\/(0.9|1.0|1.1|2.0)$/;
    var httpMessageRegEx = /[^<>\\&'"]/;
    if (!httpObj.method || !httpMethodRegEx.test(httpObj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    else if (!httpObj.uri || !httpUriRegEx.test(httpObj.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }
    else if (!httpObj.version || !httpVersionRegEx.test(httpObj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
    else if (!httpObj.message || !httpMessageRegEx.test(httpObj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }
    return httpObj;
}
export { requestValidator };
