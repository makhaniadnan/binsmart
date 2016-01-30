cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.matd.coolplugin/www/CoolPlugin.js",
        "id": "com.matd.coolplugin.CoolPlugin",
        "clobbers": [
            "CoolPlugin"
        ]
    },
    {
        "file": "plugins/de.tum.in.cordova/www/MqttPlugin.js",
        "id": "de.tum.in.cordova.MqttPlugin",
        "clobbers": [
            "MqttPlugin"
        ]
    },
    {
        "file": "plugins/io.litehelpers.cordova.sqlite/www/SQLitePlugin.js",
        "id": "io.litehelpers.cordova.sqlite.SQLitePlugin",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "id": "cordova-plugin-dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.matd.coolplugin": "0.2.11",
    "de.tum.in.cordova": "0.2.11",
    "io.litehelpers.cordova.sqlite": "0.7.10",
    "cordova-plugin-dialogs": "1.1.1"
}
// BOTTOM OF METADATA
});