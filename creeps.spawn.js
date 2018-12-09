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
        var homeroom4 = "W12S51"
        var homeroom5 = "W11S52"
        
        //spawn1
        var minimumNumberOfHarvesters_homeroom1 = 0;
        var minimumNumberOfUpgraders_homeroom1 = 1;
        var minimumNumberOfBuilders_homeroom1 = 3;
        var minimumNumberOfRepairers_homeroom1 = 1;
        var minimumNumberOfWallRepairers_homeroom1 = 0;
        var minimumNumberOfFama_homeroom1 = 1;
        var minimumNumberOfHoler_homeroom1 = 1;
        
        //spawn2
        var minimumNumberOfHarvesters_homeroom2 = 2;
        var minimumNumberOfUpgraders_homeroom2 = 1;
        var minimumNumberOfBuilders_homeroom2 = 0;
        var minimumNumberOfRepairers_homeroom2 = 0;
        var minimumNumberOfWallRepairers_homeroom2 = 0;
        var minimumNumberOfFama_homeroom2 = 0;
        var minimumNumberOfHoler_homeroom2 = 0;
        
        //spawn3
        var minimumNumberOfHarvesters_homeroom3 = 4;
        var minimumNumberOfUpgraders_homeroom3 = 4;
        var minimumNumberOfBuilders_homeroom3 = 2;
        var minimumNumberOfRepairers_homeroom3 = 1;
        var minimumNumberOfWallRepairers_homeroom3 = 0;
        var minimumNumberOfFama_homeroom3 = 0;
        var minimumNumberOfHoler_homeroom3 = 0;
        
        //spawn4
        var minimumNumberOfHarvesters_homeroom4 = 2;
        var minimumNumberOfUpgraders_homeroom4 = 1;
        var minimumNumberOfBuilders_homeroom4 = 2;
        var minimumNumberOfRepairers_homeroom4 = 0;
        var minimumNumberOfWallRepairers_homeroom4 = 0;
        var minimumNumberOfFama_homeroom4 = 0;
        var minimumNumberOfHoler_homeroom4 = 0;
        
        //spawn5
        var minimumNumberOfHarvesters_homeroom5 = 0;
        var minimumNumberOfUpgraders_homeroom5 = 0;
        var minimumNumberOfBuilders_homeroom5 = 0;
        var minimumNumberOfRepairers_homeroom5 = 0;
        var minimumNumberOfWallRepairers_homeroom5 = 0;
        var minimumNumberOfFama_homeroom5 = 0;
        var minimumNumberOfHoler_homeroom5 = 0;
        
        var name = undefined;
        
        var numberOfHarvesters      = _.sum(Game.creeps, (c) => c.memory.role == 'harvester' && c.memory.workroom == homeroom1);
        var numberOfUpgraders       = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader' && c.memory.workroom == homeroom1);
        var numberOfBuilders        = _.sum(Game.creeps, (c) => c.memory.role == 'builder' && c.memory.workroom == homeroom1);
        var numberOfRepairers       = _.sum(Game.creeps, (c) => c.memory.role == 'repairers' && c.memory.workroom == homeroom1);
        var numberOfWallRepairers   = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer' && c.memory.workroom == homeroom1);
        var numberOfFama            = _.sum(Game.creeps, (c) => c.memory.role == 'fama' && c.memory.workroom == homeroom1);
        var numberOfHoler           = _.sum(Game.creeps, (c) => c.memory.role == 'holer' && c.memory.workroom == homeroom1);
        var energy                  = Game.spawns.Spawn1.room.energyCapacityAvailable;

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
        
        var numberOfHarvesters4 = _.sum(Game.creeps, (c) => c.memory.role == 'harvester' && c.memory.workroom == homeroom4);
        var numberOfUpgraders4 = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader' && c.memory.workroom == homeroom4);
        var numberOfBuilders4 = _.sum(Game.creeps, (c) => c.memory.role == 'builder' && c.memory.workroom == homeroom4);
        var numberOfRepairers4 = _.sum(Game.creeps, (c) => c.memory.role == 'repairers' && c.memory.workroom == homeroom4);
        var numberOfWallRepairers4 = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer' && c.memory.workroom == homeroom4);
        var numberOfFama4 = _.sum(Game.creeps, (c) => c.memory.role == 'fama' && c.memory.workroom == homeroom4);
        var numberOfHoler4 = _.sum(Game.creeps, (c) => c.memory.role == 'holer' && c.memory.workroom == homeroom4);
        var energy4 = Game.spawns.Spawn4.room.energyCapacityAvailable;
        
        var numberOfHarvesters5 = _.sum(Game.creeps, (c) => c.memory.role == 'harvester' && c.memory.workroom == homeroom5);
        var numberOfUpgraders5 = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader' && c.memory.workroom == homeroom5);
        var numberOfBuilders5 = _.sum(Game.creeps, (c) => c.memory.role == 'builder' && c.memory.workroom == homeroom5);
        var numberOfRepairers5 = _.sum(Game.creeps, (c) => c.memory.role == 'repairers' && c.memory.workroom == homeroom5);
        var numberOfWallRepairers5 = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer' && c.memory.workroom == homeroom5);
        var numberOfFama5 = _.sum(Game.creeps, (c) => c.memory.role == 'fama' && c.memory.workroom == homeroom5);
        var numberOfHoler5 = _.sum(Game.creeps, (c) => c.memory.role == 'holer' && c.memory.workroom == homeroom5);
        var energy5 = 300;//Game.spawns.Spawn4.room.energyCapacityAvailable;
        
        
        
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
        if (numberOfHarvesters4 < minimumNumberOfHarvesters_homeroom4) {
            name = Game.spawns.Spawn4.createCustomCreep(energy4, 'harvester', homeroom4);
            if (name == ERR_NOT_ENOUGH_ENERGY && numberOfHarvesters4 == 0) {
                name = Game.spawns.Spawn4.createCustomCreep(
                   Game.spawns.Spawn4.room.energyAvailable, 'harvester', homeroom4);
            }
        }
        else if (numberOfUpgraders4 < minimumNumberOfUpgraders_homeroom4) {
            name = Game.spawns.Spawn4.createCustomCreep(energy4, 'upgrader', homeroom4);
        }
        else if (numberOfRepairers4 < minimumNumberOfRepairers_homeroom4) {
            name =Game.spawns['Spawn4'].createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE],undefined , {working: false, role: 'repairers', workroom: "W12S51"});
        }
        else if (numberOfBuilders4 < minimumNumberOfBuilders_homeroom4) {
            name = Game.spawns.Spawn4.createCustomCreep(energy4, 'builder', homeroom4);
        }
        else if (numberOfWallRepairers4 < minimumNumberOfWallRepairers_homeroom4) {
            name = Game.spawns.Spawn4.createCustomCreep(energy4, 'wallRepairer', homeroom4);
        }
        else if (numberOfFama4 < minimumNumberOfFama_homeroom4) {
            name =Game.spawns['Spawn4'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],undefined , {working: false, role: 'fama', workroom: "W12S51"});
        }
        else if (numberOfHoler4 < minimumNumberOfHoler_homeroom4) {
            name =Game.spawns['Spawn4'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE],undefined , {working: false, role: 'holer', workroom: "W12S51"});
        }
//-----------------------------------------------------------------------------------------------
        if (numberOfHarvesters5 < minimumNumberOfHarvesters_homeroom5) {
            name = Game.spawns.Spawn5.createCustomCreep(energy5, 'harvester', homeroom5);
            if (name == ERR_NOT_ENOUGH_ENERGY && numberOfHarvesters5 == 0) {
                name = Game.spawns.Spawn5.createCustomCreep(
                   Game.spawns.Spawn5.room.energyAvailable, 'harvester', homeroom5);
            }
        }
        else if (numberOfUpgraders5 < minimumNumberOfUpgraders_homeroom5) {
            name = Game.spawns.Spawn5.createCustomCreep(energy5, 'upgrader', homeroom5);
        }
        else if (numberOfRepairers5 < minimumNumberOfRepairers_homeroom5) {
            name =Game.spawns['Spawn5'].createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE],undefined , {working: false, role: 'repairers', workroom: "W11S52"});
        }
        else if (numberOfBuilders5 < minimumNumberOfBuilders_homeroom5) {
            name = Game.spawns.Spawn5.createCustomCreep(energy5, 'builder', homeroom5);
        }
        else if (numberOfWallRepairers5 < minimumNumberOfWallRepairers_homeroom5) {
            name = Game.spawns.Spawn5.createCustomCreep(energy5, 'wallRepairer', homeroom5);
        }
        else if (numberOfFama5 < minimumNumberOfFama_homeroom5) {
            name =Game.spawns['Spawn5'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],undefined , {working: false, role: 'fama', workroom: "W11S52"});
        }
        else if (numberOfHoler5 < minimumNumberOfHoler_homeroom5) {
            name =Game.spawns['Spawn5'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE],undefined , {working: false, role: 'holer', workroom: "W11S52"});
        }
//-----------------------------------------------------------------------------------------------
        if (name != undefined && name != -6 && name != -4) {
            console.log("Spawned new creep: " + name);
        }
    }
};