

const path = require('path');

module.exports ={
	entry:'./src/index.js',
	output:{
		filename:'[name].js',
		path:path.resolve(__dirname,"./dist")
	},
	resolve:{
		extenstions:['.tsx','.ts','.js']
	},
	module:{

	},
	plugin:[
		
	]
}