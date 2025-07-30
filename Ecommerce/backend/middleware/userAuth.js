import jwt from 'jsonwebtoken'

export const userAuth = async (req, res, next) =>{
  try {
    const { token } = req.headers
    if(!token){
      return res.json({success: false, message: 'Not authorize login again'})
    }
    const token_decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.body.userId = token_decoded.id
    next()
  } catch (error) {
    console.log(error)
    res.json({success: false, message: error.message})
  }
}