require('prototype.spawn')();
/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawn.creeps');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function () {
        // setup some minimum numbers for different roles
        var homeroom1 = "W14S51"
        var homeroom2 = "W13S51"
        var homeroom3 = "W15S51"

        var minimumNumberOfHarvesters_homeroom1 = 0;
        var minimumNumberOfUpgraders_homeroom1 = 1;
        var minimumNumberOfBuilders_homeroom1 = 3;
        var minimumNumberOfRepairers_homeroom1 = 1;
        var minimumNumberOfWallRepairers_homeroom1 = 0;
        var minimumNumberOfFama_homeroom1 = 1;
        var minimumNumberOfHoler_homeroom1 = 1;

        var minimumNumberOfHarvesters_homeroom2 = 2;
        var minimumNumberOfUpgraders_homeroom2 = 1;
        var minimumNumberOfBuilders_homeroom2 = 0;
        var minimumNumberOfRepairers_homeroom2 = 0;
        var minimumNumberOfWallRepairers_homeroom2 = 0;
        var minimumNumberOfFama_homeroom2 = 0;
        var minimumNumberOfHoler_homeroom2 = 0;
        
        var minimumNumberOfHarvesters_homeroom3 = 4;
        var minimumNumberOfUpgraders_homeroom3 = 4;
        var minimumNumberOfBuilders_homeroom3 = 2;
        var minimumNumberOfRepairers_homeroom3 = 0;
        var minimumNumberOfWallRepairers_homeroom3 = 0;
        var minimumNumberOfFama_homeroom3 = 0;
        var minimumNumberOfHoler_homeroom3 = 0;
        
        var name = undefined;
        
        var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester' && c.memory.workroom == homeroom1);
        var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader' && c.memory.workroom == homeroom1);
        var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder' && c.memory.workroom == homeroom1);
        var numberOfRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'repairers' && c.memory.workroom == homeroom1);
        var numberOfWallRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer' && c.memory.workroom == homeroom1);
        var numberOfFama = _.sum(Game.creeps, (c) => c.memory.role == 'fama' && c.memory.workroom == homeroom1);
        var numberOfHoler = _.sum(Game.creeps, (c) => c.memory.role == 'holer' && c.memory.workroom == homeroom1);
        var energy = Game.spawns.Spawn1.room.energyCapacityAvailable;

        var numberOfHarvesters2 = _.sum(Game.creeps, (c) => c.memory.role == 'harvester' && c.memory.workroom == homeroom2);
        var numberOfUpgraders2 = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader' && c.memory.workroom == homeroom2);
        var numberOfBuilders2 = _.sum(Game.creeps, (c) => c.memory.role == 'builder' && c.memory.workroom == homeroom2);
        var numberOfRepairers2 = _.sum(Game.creeps, (c) => c.memory.role == 'repairers' && c.memory.workroom == homeroom2);
        var numberOfWallRepairers2 = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer' && c.memory.workroom == homeroom2);
        var numberOfFama2 = _.sum(Game.creeps, (c) => c.memory.role == 'fama' && c.memory.workroom == homeroom2);
        var numberOfHoler2 = _.sum(Game.creeps, (c) => c.memory.role == 'holer' && c.memory.workroom == homeroom2);
        var energy2 = Game.spawns.Spawn2.room.energyCapacityAvailable;
        
        var numberOfHarvesters3 = _.sum(Game.creeps, (c) => c.memory.role == 'harvester' && c.memory.workroom == homeroom3);
        var numberOfUpgraders3 = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader' && c.memory.workroom == homeroom3);
        var numberOfBuilders3 = _.sum(Game.creeps, (c) => c.memory.role == 'builder' && c.memory.workroom == homeroom3);
        var numberOfRepairers3 = _.sum(Game.creeps, (c) => c.memory.role == 'repairers' && c.memory.workroom == homeroom3);
        var numberOfWallRepairers3 = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer' && c.memory.workroom == homeroom3);
        var numberOfFama3 = _.sum(Game.creeps, (c) => c.memory.role == 'fama' && c.memory.workroom == homeroom3);
        var numberOfHoler3 = _.sum(Game.creeps, (c) => c.memory.role == 'holer' && c.memory.workroom == homeroom3);
        var energy3 = Game.spawns.Spawn3.room.energyCapacityAvailable;
        
        
        
//-----------------------------------------------------------------------------
        if (numberOfHarvesters < minimumNumberOfHarvesters_homeroom1) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'harvester', homeroom1);
            if (name == ERR_NOT_ENOUGH_ENERGY && numberOfHarvesters == 0) {
                name = Game.spawns.Spawn1.createCustomCreep(
                    Game.spawns.Spawn1.room.energyAvailable, 'harvester', homeroom1);
            }
        }
        else if (numberOfUpgraders < minimumNumberOfUpgraders_homeroom1) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'upgrader', homeroom1);
        }
        else if (numberOfRepairers < minimumNumberOfRepairers_homeroom1) {
            name =Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE],undefined , {working: false, role: 'repairers', workroom: "W14S51"});
        }
        else if (numberOfBuilders < minimumNumberOfBuilders_homeroom1) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'builder', homeroom1);
        }
        else if (numberOfWallRepairers < minimumNumberOfWallRepairers_homeroom1) {
            name = Game.spawns.Spawn1.createCustomCreep(energy1, 'wallRepairer', homeroom1);
        }
        else if (numberOfFama < minimumNumberOfFama_homeroom1) {
            name =Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],undefined , {working: false, role: 'fama', workroom: "W14S51"});
        }
        else if (numberOfHoler < minimumNumberOfHoler_homeroom1) {
            name =Game.spawns['Spawn1'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE],undefined , {working: false, role: 'holer', workroom: "W14S51"});
        }


//----------------------------------------------------------------------------------------------

if (numberOfHarvesters2 < minimumNumberOfHarvesters_homeroom2) {
            name = Game.spawns.Spawn2.createCustomCreep(energy2, 'harvester', homeroom2);
            if (name == ERR_NOT_ENOUGH_ENERGY && numberOfHarvesters2 == 0) {
                name = Game.spawns.Spawn2.createCustomCreep(
                   Game.spawns.Spawn2.room.energyAvailable, 'harvester', homeroom2);
            }
        }
        else if (numberOfUpgraders2 < minimumNumberOfUpgraders_homeroom2) {
            name = Game.spawns.Spawn2.createCustomCreep(energy2, 'upgrader', homeroom2);
        }
        else if (numberOfRepairers2 < minimumNumberOfRepairers_homeroom2) {
            name =Game.spawns['Spawn2'].createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE],undefined , {working: false, role: 'repairers', workroom: "W13S51"});
        }
        else if (numberOfBuilders2 < minimumNumberOfBuilders_homeroom2) {
            name = Game.spawns.Spawn2.createCustomCreep(energy2, 'builder', homeroom2);
        }
        else if (numberOfWallRepairers2 < minimumNumberOfWallRepairers_homeroom2) {
            name = Game.spawns.Spawn2.createCustomCreep(energy2, 'wallRepairer', homeroom2);
        }
        else if (numberOfFama2 < minimumNumberOfFama_homeroom2) {
            name =Game.spawns['Spawn2'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],undefined , {working: false, role: 'fama', workroom: "W13S51"});
        }
        else if (numberOfHoler2 < minimumNumberOfHoler_homeroom2) {
            name =Game.spawns['Spawn2'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE],undefined , {working: false, role: 'holer', workroom: "W13S51"});
        }
        
//----------------------------------------------------------------------------------------------

if (numberOfHarvesters3 < minimumNumberOfHarvesters_homeroom3) {
            name = Game.spawns.Spawn3.createCustomCreep(energy3, 'harvester', homeroom3);
            if (name == ERR_NOT_ENOUGH_ENERGY && numberOfHarvesters == 0) {
                name = Game.spawns.Spawn3.createCustomCreep(
                    Game.spawns.Spawn3.room.energyAvailable, 'harvester', homeroom3);
            }
        }
        else if (numberOfUpgraders3 < minimumNumberOfUpgraders_homeroom3) {
            name = Game.spawns.Spawn3.createCustomCreep(energy3, 'upgrader', homeroom3);
        }
        else if (numberOfRepairers3 < minimumNumberOfRepairers_homeroom3) {
            name =Game.spawns['Spawn3'].createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE],undefined , {working: false, role: 'repairers', workroom: "W15S51"});
        }
        else if (numberOfBuilders3 < minimumNumberOfBuilders_homeroom3) {
            name = Game.spawns.Spawn3.createCustomCreep(energy3, 'builder', homeroom3);
        }
        else if (numberOfWallRepairers3 < minimumNumberOfWallRepairers_homeroom3) {
            name = Game.spawns.Spawn3.createCustomCreep(energy3, 'wallRepairer', homeroom3);
        }
        else if (numberOfFama3 < minimumNumberOfFama_homeroom3) {
            name =Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],undefined , {working: false, role: 'fama', workroom: "W15S51"});
        }
        else if (numberOfHoler3 < minimumNumberOfHoler_homeroom3) {
            name =Game.spawns['Spawn3'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE],undefined , {working: false, role: 'holer', workroom: "W15S51"});
        }

//----------------------------------------------------------------------------------------------
        if (name != undefined && name != -6 && name != -4) {
            console.log("Spawned new creep: " + name);
        }
    }
};