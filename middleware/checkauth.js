const jwt = require('jsonwebtoken');

let checkauth = (authreq,authres,next)=>
{

	try
	{
	let token = authreq.headers.authorization.split(' ')[1]
	console.log(`In header: ${token}`)
	jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
		if(decoded){
			console.log(decoded)
			next()
		}
		else{
			console.log("Token Invalid")
			authres.json({status:"Invalid Token"})
		}
		})
	}
	catch(err){
			console.log('Auth Error')
			authres.json({status: err['message']})	

		}	

}

module.exports = checkauth