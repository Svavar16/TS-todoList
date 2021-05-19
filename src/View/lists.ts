// here we will place the views
const router = express.Router();

router.get("/", (req: any, res: any) => {
	res.status(200).send("Works!!");
});
