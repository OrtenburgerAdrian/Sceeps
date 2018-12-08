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


        var minimumNumberOfHarvesters_homeroom1 = 5;
        var minimumNumberOfUpgraders_homeroom1 = 1;
        var minimumNumberOfBuilders_homeroom1 = 0;
        var minimumNumberOfRepairers_homeroom1 = 1;
        var minimumNumberOfWallRepairers_homeroom1 = 0;
        var minimumNumberOfFama_homeroom1 = 0;

        var minimumNumberOfHarvesters_homeroom2 = 2;
        var minimumNumberOfUpgraders_homeroom2 = 1;
        var minimumNumberOfBuilders_homeroom2 = 0;
        var minimumNumberOfRepairers_homeroom2 = 0;
        var minimumNumberOfWallRepairers_homeroom2 = 0;
        var minimumNumberOfFama_homeroom2 = 0;

        // count the number of creeps alive for each role
        // _.sum will count the number of properties in Game.creeps filtered by the
        //  arrow function, which checks for the creep being a harvester
        var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester' && c.memory.workroom == homeroom1);
        var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader' && c.memory.workroom == homeroom1);
        var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder' && c.memory.workroom == homeroom1);
        var numberOfRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'repairer' && c.memory.workroom == homeroom1);
        var numberOfWallRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer' && c.memory.workroom == homeroom1);
        var numberOfFama = _.sum(Game.creeps, (c) => c.memory.role == 'fama' && c.memory.workroom == homeroom1);

        var energy = Game.spawns.Spawn1.room.energyCapacityAvailable;
        var name = undefined;

        var numberOfHarvesters2 = _.sum(Game.creeps, (c) => c.memory.role == 'harvester' && c.memory.workroom == homeroom2);
        var numberOfUpgraders2 = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader' && c.memory.workroom == homeroom2);
        var numberOfBuilders2 = _.sum(Game.creeps, (c) => c.memory.role == 'builder' && c.memory.workroom == homeroom2);
        var numberOfRepairers2 = _.sum(Game.creeps, (c) => c.memory.role == 'repairer' && c.memory.workroom == homeroom2);
        var numberOfWallRepairers2 = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer' && c.memory.workroom == homeroom2);
        var numberOfFama2 = _.sum(Game.creeps, (c) => c.memory.role == 'fama' && c.memory.workroom == homeroom2);
        var energy2 = Game.spawns.Spawn2.room.energyCapacityAvailable;


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
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'repairer', homeroom1);
        }
        else if (numberOfBuilders < minimumNumberOfBuilders_homeroom1) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'builder', homeroom1);
        }
        else if (numberOfWallRepairers < minimumNumberOfWallRepairers_homeroom1) {
            Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE],undefined , {working: 'false', role: 'repairers', workroom: "W14S51"});
        }else if (numberOfFama < minimumNumberOfFama_homeroom1) {
            name = Game.spawns.Spawn1.createCustomCreep(energy, 'fama', homeroom1);
            Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],undefined , {working: 'false', role: 'fama', workroom: "W14S51"});
        }



        if (numberOfHarvesters2 < minimumNumberOfHarvesters_homeroom2) {
            name = Game.spawns.Spawn2.createCustomCreep(energy2, 'harvester', homeroom2);
            if (name == ERR_NOT_ENOUGH_ENERGY && numberOfHarvesters == 0) {
                name = Game.spawns.Spawn2.createCustomCreep(
                    Game.spawns.Spawn2.room.energyAvailable, 'harvester', homeroom2);
            }
        }
        else if (numberOfUpgraders2 < minimumNumberOfUpgraders_homeroom2) {
            name = Game.spawns.Spawn2.createCustomCreep(energy2, 'upgrader', homeroom2);
        }
        else if (numberOfRepairers2 < minimumNumberOfRepairers_homeroom2) {
            name = Game.spawns.Spawn2.createCustomCreep(energy2, 'repairer', homeroom2);
        }
        else if (numberOfBuilders2 < minimumNumberOfBuilders_homeroom2) {
            name = Game.spawns.Spawn2.createCustomCreep(energy2, 'builder', homeroom2);
        }
        else if (numberOfWallRepairers2 < minimumNumberOfWallRepairers_homeroom2) {
            name = Game.spawns.Spawn2.createCustomCreep(energy2, 'wallRepairer', homeroom2);
        }


        if (name != undefined && name != -6 && name != -4) {
            console.log("Spawned new creep: " + name);
        }
    }
};