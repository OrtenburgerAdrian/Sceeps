/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.kevin');
 * mod.thing == 'a thing'; // true
 */

var roleHarvester = require('role.harvester');
var getenergy = require('creeps.get.energy');

//Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],undefined , {working: false, role: 'kevin'});

module.exports = {
    run: function (creep) {
        
        //console.log(Game.flags.Flag1.room) ;
        //creep.moveTo(Game.flags.Flag1);
        //if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {creep.moveTo(creep.room.controller);    }
        if (Game.flags.Flag1.room != creep.room) {
            creep.moveTo(Game.flags.Flag1);
        } else {
                  roleHarvester.run(creep);
                  if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {creep.moveTo(creep.room.controller);}
                }
        }
};