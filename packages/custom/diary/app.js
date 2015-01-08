'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Diary = new Module('diary');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Diary.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Diary.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Diary.menus.add({
    title: '我们的日记',
    link: 'Diary',
    roles: ['anonymous','authenticated'],
    index: 0,
    menu: 'main'
  });
  
  Diary.aggregateAsset('css', 'diary.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Diary.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Diary.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Diary.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Diary;
});
