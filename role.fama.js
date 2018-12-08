/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.farma');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function (creep) {
        //            0-room        1-stadind-pos
        var home1 = ["W14S51","[room W14S51 pos 29,7]",]
        var home2 = ["W13S51"]
        if (creep.memory.workroom == home1[0]){
            if (creep.pos ==home1[1]){
                
                if(creep.carry.energy == creep.carryCapacity){
                    creep.transfer(creep.room.storage, RESOURCE_ENERGY);    
                }else{
                    var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                    if (source != undefined) {
                        creep.harvest(source);                       
                        }
                }
            }else{
                //hardcodet
                creep.moveTo(29,7);
            }
        }

        else if (creep.memory.workroom == home2[0]){
        }    
    }
};