function tokenDecoder(token) {
    const tokenString = JSON.stringify(token);
    const base64Url = tokenString.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let buff = new Buffer.from(base64, 'base64');
    const payloadinit = buff.toString('ascii');
    return payloadinit
}

module.exports = TokenHandler;