'use strict';

var settings = {};

// Note: most of these configuration options can be overridden
// with specific environment variables. See the README for details

// HTTP server's (and WebSocket server's) settings
// NOTE: Generally, you'll want to set the ipaddress to '0.0.0.0' when in
// a production environment (search for INADDR_ANY for more info)
settings.ipaddress = '0.0.0.0';
settings.port = 8080;

// The secret salt used to generate session tokens.
// Set this to a falsy value (i.e. null)
// to have it be auto-generated on startup.
settings.sessionSecret = 'kbdparis';

// Database settings
settings.dbname = 'swiftcode';
settings.dbhost = 'localhost';
settings.dbport = 27017; // Default MongoDB port
settings.dbusername = 'kbdparis';
settings.dbpassword = 'kbdparis';

// Database connection string, for convenience (if this is not falsy, it
// will OVERRIDE the previous DB settings)
settings.dbconnectionstring = null;

module.exports = settings;
