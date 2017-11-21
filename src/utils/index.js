function definePort() {
    return process.argv[2] || 3000;
}

export {definePort}