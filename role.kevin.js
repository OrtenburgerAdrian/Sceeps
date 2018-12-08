/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.kevin');
 * mod.thing == 'a thing'; // true
 */

var roleUpgrader = require('role.upgrader');
var getenergy = require('creeps.get.energy');

//Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],undefined , {  memory: {working: 'false', role: 'kevin'}});

module.exports = {
    run: function (creep) {
        //console.log(Game.flags.Flag1.room) ;
        //creep.moveTo(Game.flags.Flag1);
        //if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {creep.moveTo(creep.room.controller);    }
        if (Game.flags.Flag1.room != creep.room) {
            creep.moveTo(Game.flags.Flag1);
        } else {



            // if creep is trying to complete a constructionSite but has no energy left
            if (creep.memory.working == true && creep.carry.energy == 0) {
                // switch state
                creep.memory.working = false;
            }
            // if creep is harvesting energy but is full
            else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
                // switch state
                creep.memory.working = true;
            }

            // if creep is supposed to complete a constructionSite
            if (creep.memory.working == true) {
                // find closest constructionSite
                var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
                // if one is found
                if (constructionSite != undefined) {
                    // try to build, if the constructionSite is not in range
                    if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                        // move towards the constructionSite
                        creep.moveTo(constructionSite);
                    }
                }
                // if no constructionSite is found
                else {
                    // go upgrading the controller
                    roleUpgrader.run(creep);
                }
            }
            // if creep is supposed to harvest energy from source
            else {
                var target = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES);
                if (target) {
                    if (target.amount > 5) {
                        if (creep.pos.inRangeTo(target, 5)) {

                            if (creep.pickup(target) == ERR_NOT_IN_RANGE) {
                                if (creep.moveTo(target) == 0) {
                                    console.log(creep.name + " moveTo " + target.pos + "     amount = " + target.amount)
                                }
                            }
                        }
                    }
                } else {
                    var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);


                    if (source != undefined) {
                        if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(source);
                        }
                    }

                }
            }


        }
    }
};