var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var getenergy = require('creeps.get.energy');

module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
        // if creep is bringing energy to the spawn but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // if creep is supposed to transfer energy to the spawn
        if (creep.memory.working == true) {
    
                var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_SPAWN
                || s.structureType == STRUCTURE_EXTENSION
                || s.structureType == STRUCTURE_TOWER)
                && s.energy < s.energyCapacity
            });

            if (structure != undefined) {
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
                
            }else{
                   roleBuilder.run(creep);
                }
            
        }
        // if creep is supposed to harvest energy from source
        else {
            getenergy.run(creep);
        }
    }
};