'use strict';

// The Package is past automatically as first parameter
module.exports = function(Footmark, app, auth, database) {

  app.get('/footmark/example/test', function(req, res, next) {
    var storyjs_jsonp_data = {
            "timeline":
            {
                "headline":"The Main Timeline Headline Goes here",
                "type":"default",
                "text":"<p>Intro body text goes here, some HTML is ok</p>",
                "asset": {
                    "media":"http://bbra.cn/Uploadfiles/imgs/20110303/fengjin/015.jpg",
                    "credit":"Credit Name Goes Here",
                    "caption":"Caption text goes here"
                },
                "date": [
                    {
                        "startDate":"2011,12,10",
                        "endDate":"2011,12,11",
                        "headline":"Headline Goes Here",
                        "text":"<p>Body text goes here, some HTML is OK</p>",
                        "tag":"This is Optional",
                        "classname":"optionaluniqueclassnamecanbeaddedhere",
                        "asset": {
                            "media":"http://bbra.cn/Uploadfiles/imgs/20110303/fengjin/015.jpg",
                            "thumbnail":"http://img12.3lian.com/gaoqing02/06/48/b/39.jpg",
                            "credit":"Credit Name Goes Here",
                            "caption":"Caption text goes here"
                        }
                    },
                    {
                        "startDate":"2011,12,11",
                        "endDate":"2011,12,12",
                        "headline":"Headline Goes Here",
                        "text":"<p>Body text goes here, some HTML is OK</p>",
                        "tag":"This is Optional",
                        "classname":"optionaluniqueclassnamecanbeaddedhere",
                        "asset": {
                            "media":"http://bbra.cn/Uploadfiles/imgs/20110303/fengjin/015.jpg",
                            "thumbnail":"http://img12.3lian.com/gaoqing02/06/48/b/39.jpg",
                            "credit":"Credit Name Goes Here",
                            "caption":"Caption text goes here"
                        }
                    },
                    {
                        "startDate":"2011,12,12",
                        "endDate":"2011,12,13",
                        "headline":"Headline Goes Here",
                        "text":"<p>Body text goes here, some HTML is OK</p>",
                        "tag":"This is Optional",
                        "classname":"optionaluniqueclassnamecanbeaddedhere",
                        "asset": {
                            "media":"http://bbra.cn/Uploadfiles/imgs/20110303/fengjin/015.jpg",
                            "thumbnail":"http://img12.3lian.com/gaoqing02/06/48/b/39.jpg",
                            "credit":"Credit Name Goes Here",
                            "caption":"Caption text goes here"
                        }
                    },
                    {
                        "startDate":"2011,12,13",
                        "endDate":"2011,12,14",
                        "headline":"Headline Goes Here",
                        "text":"<p>Body text goes here, some HTML is OK</p>",
                        "tag":"This is Optional",
                        "classname":"optionaluniqueclassnamecanbeaddedhere",
                        "asset": {
                            "media":"http://bbra.cn/Uploadfiles/imgs/20110303/fengjin/015.jpg",
                            "thumbnail":"http://img12.3lian.com/gaoqing02/06/48/b/39.jpg",
                            "credit":"Credit Name Goes Here",
                            "caption":"Caption text goes here"
                        }
                    },
                    {
                        "startDate":"2011,12,15",
                        "endDate":"2011,12,16",
                        "headline":"Headline Goes Here",
                        "text":"<p>Body text goes here, some HTML is OK</p>",
                        "tag":"This is Optional",
                        "classname":"optionaluniqueclassnamecanbeaddedhere",
                        "asset": {
                            "media":"http://bbra.cn/Uploadfiles/imgs/20110303/fengjin/015.jpg",
                            "thumbnail":"http://img12.3lian.com/gaoqing02/06/48/b/39.jpg",
                            "credit":"Credit Name Goes Here",
                            "caption":"Caption text goes here"
                        }
                    },
                    {
                        "startDate":"2011,12,16",
                        "endDate":"2011,12,17",
                        "headline":"Headline Goes Here",
                        "text":"<p>Body text goes here, some HTML is OK</p>",
                        "tag":"This is Optional",
                        "classname":"optionaluniqueclassnamecanbeaddedhere",
                        "asset": {
                            "media":"http://bbra.cn/Uploadfiles/imgs/20110303/fengjin/015.jpg",
                            "thumbnail":"http://img12.3lian.com/gaoqing02/06/48/b/39.jpg",
                            "credit":"Credit Name Goes Here",
                            "caption":"Caption text goes here"
                        }
                    },
                    {
                        "startDate":"2011,12,17",
                        "endDate":"2011,12,18",
                        "headline":"Headline Goes Here",
                        "text":"<p>Body text goes here, some HTML is OK</p>",
                        "tag":"This is Optional",
                        "classname":"optionaluniqueclassnamecanbeaddedhere",
                        "asset": {
                            "media":"http://bbra.cn/Uploadfiles/imgs/20110303/fengjin/015.jpg",
                            "thumbnail":"http://img12.3lian.com/gaoqing02/06/48/b/39.jpg",
                            "credit":"Credit Name Goes Here",
                            "caption":"Caption text goes here"
                        }
                    }
                ],
                "era": [
                    {
                        "startDate":"2011,12,10",
                        "endDate":"2011,12,11",
                        "headline":"Headline Goes Here",
                        "tag":"This is Optional"
                    },
                    {
                        "startDate":"2011,12,11",
                        "endDate":"2011,12,12",
                        "headline":"Headline Goes Here",
                        "tag":"This is Optional"
                    },
                    {
                        "startDate":"2011,12,12",
                        "endDate":"2011,12,13",
                        "headline":"Headline Goes Here",
                        "tag":"This is Optional"
                    },
                    {
                        "startDate":"2011,12,13",
                        "endDate":"2011,12,14",
                        "headline":"Headline Goes Here",
                        "tag":"This is Optional"
                    },
                    {
                        "startDate":"2011,12,14",
                        "endDate":"2011,12,15",
                        "headline":"Headline Goes Here",
                        "tag":"This is Optional"
                    },
                    {
                        "startDate":"2011,12,15",
                        "endDate":"2011,12,16",
                        "headline":"Headline Goes Here",
                        "tag":"This is Optional"
                    },
                    {
                        "startDate":"2011,12,16",
                        "endDate":"2011,12,17",
                        "headline":"Headline Goes Here",
                        "tag":"This is Optional"
                    },
                    {
                        "startDate":"2011,12,17",
                        "endDate":"2011,12,18",
                        "headline":"Headline Goes Here",
                        "tag":"This is Optional"
                    }

                ]

            }
      };
    res.json(storyjs_jsonp_data);
  });

  app.get('/footmark/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/footmark/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/footmark/example/render', function(req, res, next) {
    Footmark.render('index', {
      package: 'footmark'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
