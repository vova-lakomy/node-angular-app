const definePort = function () {
    return process.argv[2] || 3000;
};

export { definePort };
