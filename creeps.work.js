var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleWallRepairer = require('role.wallRepairer');
var kevin = require('role.kevin')

module.exports = {
    run: function () {

        // for every creep name in Game.creeps
        for (let name in Game.creeps) {
            // get the creep object
            var creep = Game.creeps[name];

            // if creep is harvester, call harvester script
            if (creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
            }
            // if creep is upgrader, call upgrader script
            else if (creep.memory.role == 'upgrader') {
                roleUpgrader.run(creep);
            }
            // if creep is builder, call builder script
            else if (creep.memory.role == 'builder') {
                roleBuilder.run(creep);
            }
            // if creep is repairer, call repairer script
            else if (creep.memory.role == 'repairer') {
                roleRepairer.run(creep);
            }
            // if creep is wallRepairer, call wallRepairer script
            else if (creep.memory.role == 'wallRepairer') {
                roleWallRepairer.run(creep);
            } else /*if(creep.memory.role == 'kevin')*/ {
                kevin.run(creep);
            }
        }

    }
};