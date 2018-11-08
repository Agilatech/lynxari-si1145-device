const LynxariDevice = require(process.lynxari.device);
const device = require('@agilatech/si1145');

module.exports = class Si1145 extends LynxariDevice {
	constructor(config) {
	  const hardware = new device(config);
		super(hardware, config);  		
	}
}

