'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Footmark = new Module('footmark');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Footmark.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Footmark.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Footmark.menus.add({
    title: '我们的足迹',
    link: 'Footmark',
    roles: ['anonymous','authenticated'],
    index: 1,
    menu: 'main'
  });
  
  Footmark.aggregateAsset('css', 'footmark.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Footmark.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Footmark.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Footmark.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Footmark;
});
