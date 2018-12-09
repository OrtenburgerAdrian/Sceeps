/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creeps.get.lazyenergy');
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
    if(creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
    creep.moveTo(creep.room.storage);
}
    }}
};