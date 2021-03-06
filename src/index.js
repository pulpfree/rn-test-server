// import mongoose from 'mongoose'

import config from './config/config'
import mongoose from './mongo/connect'
import Handler from './handler/handler'

let db

// exports.handler = (event, context, callback) => { // eslint-disable-line
exports.handler = async (event) => {
  if (!db) {
    const cfg = await config.load()
    db = await mongoose.connect(cfg)
  }

  console.log("Received event - arguments:", JSON.stringify(event, 3)); // eslint-disable-line

  // const res = await Handler(event)
  // console.log('res: ', res) // eslint-disable-line
  return Handler(event)
}
