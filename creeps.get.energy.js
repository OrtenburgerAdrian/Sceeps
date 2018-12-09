/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('get.energy');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function (creep) {
 
        var target = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES);
        if (target && target.amount > 5 && creep.pos.inRangeTo(target, 5)) {
                                if (creep.pickup(target) == ERR_NOT_IN_RANGE) {
                        if (creep.moveTo(target) == 0) {
                            console.log(creep.name + " moveTo " + target.pos + "     amount = " + target.amount)
                        }
                    }
        } else {
            //var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE, {
                 filter: (s) =>s.id != "59f1a21d82100e1594f39742"});

            if (source != undefined) {
                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source);
                }
            }
            /* else if(speicher.amount == 0){
                 if(creep.withdraw(speicher, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                     creep.moveTo(speicher);
                 }
             }*/

        }

    }

};