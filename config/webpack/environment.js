const { environment } = require('@rails/webpacker')
const victory = require('victory')
const _ = require('underscore')
const Clarifai = require('clarifai')

module.exports = {
    environment,
    victory,
    _,
    Clarifai,
}
