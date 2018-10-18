'use strict';

// had enabled by egg
module.exports.static = true

module.exports.passport = {
    enable: true,
    package: 'egg-passport'
}

module.exports.passportLocal = {
    enable: true,
    package: 'egg-passport-local'
}

module.exports.passportGithub = {
    enable: true,
    package: 'egg-passport-github'
}

module.exports.mysql = {
    enable: true,
    package: 'egg-mysql'
}
