import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import auth from "../../middleware/auth"
import config from "../../config/index"

const{JWT_SECRET} = config;

// Model
import User from "../../models/user"

const router = express.Router();

/*
    @route      POST    api/auth
    @desc       Auth    user
    @access     Public
 */
router.post('/', (req, res)=>{

   const {email, password} = req.body;

   //temprary validation
   if(!email || !password){
      return res.status(400).json({msg : "fulfill all field"});
   }

   User.findOne({email}).then((user) => {
      if(!user){
         return res.status(400).json({msg : "user is not existed"});
      }

      const compared = bcrypt.compare(password, user.password).then((compared) => {
         if(!compared){
            return res.status(400).json({msg : "password is not matched"})
         }
         const token = jwt.sign(
             {id:user.id},
             JWT_SECRET,
             {expiresIn: "1 days",
             });

         res.json({
            token,
            user: {
               id: user.id,
               name: user.name,
               email: user.email,
               role: user.role
            }
         });
      });
   });
});

// logout
router.post('/logout', (req, res) => {
   res.json("logout success")
});

router.get('/user', auth, async(req, res) => {
   try {
      const user = await User.findById(req.user.id).select("-password")
      if(!user) {
         throw Error("User is not founded");
      }
      res.json(user);
   }catch (e) {
      console.log(e);
      res.status(400).json({msg:e.message});
   }
});

export default router;