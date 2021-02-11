const cors = require('cors');

const whitelist = ['http://localhost:3001']

var corsOptions = {
    origin : (origin, cb) => {
        if(whitelist.indexOf(origin)!=-1){
            cb(null,true);
        }
        else{
            cb(new Error("Not allowed by cors"),false);
        }
    }
};

var corsOpts = cors(corsOptions);

exports.corsOpts = corsOpts;