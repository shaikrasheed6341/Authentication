
import { Router } from "express";
import { registration ,login} from "../controller/user.control.js"


const router = Router();

router.route('/registration').post(registration)
router.route('/login').post(login)



export default router;
