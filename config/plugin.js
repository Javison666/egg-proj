'use strict';

// had enabled by egg
exports.static = true;

module.exports.passport={
    enable:true,
    package:'egg-passport'
}

module.exports.passportLocal={
    enable:true,
    package:'egg-passport-local'
}

module.exports.passportGithub={
    enable:true,
    package:'egg-passport-github'
}

