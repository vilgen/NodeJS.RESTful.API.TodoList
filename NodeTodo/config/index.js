var configValues = require('./config');

module.exports = {

    getDbConnectionString: function(){
        return 'mongodb+srv://' + configValues.uname + ':' +
                configValues.pwd + '@cluster0-p8e8f.mongodb.net/test?retryWrites=true';
    }
}