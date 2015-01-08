'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Diary Schema
 */
var DiarySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  createdTime:{
    type: Date,
    default: Date.now
  },
  weather:{
    type: Number,
    required: true,
    default: 0
  }
});

/**
 * Validations
 */
DiarySchema.path('title').validate(function(title) {
  return !!title;
}, 'Title cannot be blank');

DiarySchema.path('content').validate(function(content) {
  return !!content;
}, 'Content cannot be blank');

/**
 * Statics
 */
DiarySchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Diary', DiarySchema);
