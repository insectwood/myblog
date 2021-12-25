import express from "express";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
import config from "../../config/index";
const {JWT_SECRET} = config;

//Model
import User from '../../models/user';

const router = express.Router();

/*
    @router:    GET api/user
    @desc:      get user
    @access:    public
*/
router.get('/', async (req, res)=>{
    try{
        const user = await User.find()
        if(!user){
            throw Error("no user");
        }
        res.status(200).json(user);
    }catch (e) {
        console.log(e);
        res.status(400).json({msg: e.message});
    }
});

/*
    @router:    POST api/user
    @desc:      register user
    @access:    public
*/
router.post('/', (req, res)=>{
   console.log(req);
   const {name, email, password} = req.body

    //temporary validation
    if(!name || !email || !password) {
        return res.status(400).json({msg:"fulfill all field"})
    }

    //check if this user already exisits
    const user = User.findOne({email})
    if(!user){
        return res.status(400).json({msg:"already registed"})
    }
    const newUser = new User({
        name,
        email,
        password
    });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err){
                throw err;
            }
            newUser.password = hash;
            newUser.save()

            const token = jwt.sign(
                {id: newUser.id},
                JWT_SECRET,
                {expiresIn: 3600}
            );

            res.json({
                token,
                user: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email
                }
            });
        });
    });
});

export default router;