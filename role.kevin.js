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
        
        if(creep.ticksToLive < 400 && creep.carry.energy == 0 ){
            console.log("uhheee i am down" + creep)
           creep.suicide();
        }
        
        if (Game.flags.Flag1.room != creep.room  && creep.carry.energy == 0) {
            creep.moveTo(Game.flags.Flag1);
        } else if(Game.flags.Flag1.room == creep.room && creep.carry.energy == 0){
            if(creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.storage);
            }
        }else if(Game.flags.Flag2.room != creep.room && creep.carry.energy == creep.carryCapacity){
            creep.moveTo(Game.flags.Flag2);
        }else if(Game.flags.Flag2.room == creep.room && creep.carry.energy == creep.carryCapacity){
                //console.log('hallo ich bin kevin');
                    if (creep.transfer(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) 
                    creep.moveTo(creep.room.storage);
                
        }
        else {
                  roleHarvester.run(creep);
                  if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {creep.moveTo(creep.room.controller);}
                }
        }
};