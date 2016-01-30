cordova.define("de.tum.in.cordova.MqttPlugin", function(require, exports, module) { var exec = require('cordova/exec');
function MqttPlugin() { console.log("MqttPlugin.js: is created");
}
var i = 0;
var graph;
var res;
var forceX = 0;
var forceY= 0;
var forceZ= 0;
var forceZAlert= 0;


MqttPlugin.prototype.setMQTT = function(aString){ console.log("MqttPlugin.js: showToast");
    var t = aString.data + aString.topic;
    exec(
    function(result){ },
    function(result){ },
    "MqttPlugin",
    "update",
    [aString.url, aString.port,aString.clientid,aString.username, aString.password]);
};
MqttPlugin.prototype.publish = function(aString){ console.log("MqttPlugin.js: showToast");
    var t = aString.data + aString.topic;
    exec(
    function(result){ },
    function(result){ },
    "MqttPlugin",
    "publish",
    [aString.topic, aString.data]);
};
MqttPlugin.prototype.subscribe = function(aString){

    console.log("MqttPlugin.js: subscribe");
    exec(
            function(result){   i = i + 1,
                                res=result['result'].split(","),
                                forcex = res[0].split("="),
                                forcey = res[1].split("="),
                                forcez = res[2].split("="),
                                document.getElementById("forceX").innerHTML = "Force X: " + forcex[1] + " Nm",
                                document.getElementById("forceY").innerHTML = "Force Y: " + forcey[1] + " Nm",
                                document.getElementById("forceZ").innerHTML = "Force Z: " + forcez[1] + " Nm",
                                forcexformatted = forcex[1].split('\0').join(''),
                                forceyformatted = forcey[1].split('\0').join(''),
                                forcezformatted = forcez[1].split('\0').join(''),
                                forceX = parseInt(forcexformatted),
                                forceY = parseInt(forceyformatted),
                                forceZ = parseInt(forcezformatted),
                                thresholdAlert(forceX, forceY, forceZ),
                                graphUpdate(forceX, forceY, forceZ);

                        },

            function(result){ },
            "MqttPlugin",
            "subscribe",
            [aString.topic]);

};
MqttPlugin.prototype.heartbeat = function(aString){

    console.log("MqttPlugin.js: heartbeat");
    exec(
    function(result){ document.getElementById("pi_status").innerHTML = "Connection Successful",
                      document.getElementById("start").getElementsByClassName("button")[0].removeAttribute("disabled"),
                      document.getElementById("start").getElementsByClassName("button")[0].className="button button-clear button-balanced button-large ion-unlocked"
                    },

    function(result){ },
    "MqttPlugin",
    "heartbeat",
    [aString.topic]);
};

MqttPlugin.prototype.kill = function(aString){

    console.log("MqttPlugin.js: subscribe");
    exec(
    function(result){ },
    function(result){ },
    "MqttPlugin",
    "kill",
    [aString.topic]);
};

var MqttPlugin = new MqttPlugin();
module.exports = MqttPlugin;
});
