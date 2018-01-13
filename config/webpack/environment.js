const { environment } = require('@rails/webpacker')
const victory = require('victory')
const _ = require('underscore')
const clarifai = require('clarifai')

module.exports = {
    environment,
    victory,
    _,
    clarifai,
}
