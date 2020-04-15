const path = require('path');
const yargs =require("yargs");

const argv = yargs.alias('env','enviroment').argv


module.exports ={
	entry:'./src/index.ts',
	output:{
		filename:'[name].js',
		path:path.resolve(__dirname,"./dist")
	},
	mode:argv.env,
	resolve:{
		extensions:['.tsx','.ts','.js']
	},
	devServer:{
		contentBase:'./dist',
		hot:true,
		prot:3000
	},
	module:{
		rules:[
			{
				test:/\.ts?$|\.tsx?$/,
				loaders:["babel-loader","ts-loader"]
			}
		]
	},
	plugins:[

	]
}