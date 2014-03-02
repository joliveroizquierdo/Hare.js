var config = {
  db: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'hare',
    port: 3306
  },
  
  site: {
    url: 'http://localhost:3000',
    title: 'CodeJobs',
    language: 'en'
  },
  
  application: {
    controllers: {
      default: 'home'
    },
    
    languages: [ 'en', 'es', 'fr', 'it', 'pt', 'ge', 'ch', 'jp' ]
  },
  
  server: {
    environment: 'local',
    debug: true
  }
};

module.exports = config;

/**
 *  Prototyping functions
 */
Array.prototype.inArray = function(element) { 
  for (var j in this) { 
    if (this[j] == arguments[0]) { 
      return true;
    } 
  }

  return false;     
}