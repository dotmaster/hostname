var exec = require('child_process').exec;

function checkMachine (cb) {
  if(!cb) throw new Error('need a callback');
  exec('hostname', function(err, stdout, stderr){
      stdout=stdout.replace('\n',"");
      cb(err, stdout, stderr);
  });
};

var hostname = function(cb) {
    if (!(cb instanceof Function)) {
        throw new Error('Argument to address must be a callback function');
    }
    if(process.binding('natives').os) {
      return cb(null, require('os').hostname());
    }   
    var respond = function(err, stdout, stderr) {
        if (err) {
            cb(undefined, stdout.replace('\n',""));
        } else {
            cb(err, stdout, stderr);
        }
    }
    checkMachine(respond);     
};


exports.hostname = hostname;