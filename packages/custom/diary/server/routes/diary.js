'use strict';

// The Package is past automatically as first parameter
module.exports = function(Diary, app, auth, database) {

  app.get('/diary/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/diary/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/diary/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/diary/example/render', function(req, res, next) {
    Diary.render('index', {
      package: 'diary'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
