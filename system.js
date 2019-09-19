const System = require('systemic');
const { join } = require('path');

module.exports = () =>
	new System({ name: 'skill-matrix-api' })
		.bootstrap(join(__dirname, 'components'));

