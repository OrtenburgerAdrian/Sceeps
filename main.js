var spawncreeps = require('creeps.spawn');
var creepswork = require('creeps.work');
var towerwork = require('tower.work');
var cleanup = require('game.cleanup');

module.exports.loop = function () {
    //console.log(Game.time);
    spawncreeps.run();
    creepswork.run();
    towerwork.run();
    cleanup.run();

};

