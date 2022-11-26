const express =require("express");
const StudentRouter = require("./routes/student.router.js");
const math = require("./routes/math.router.js");


const app = express();
const router =express.Router();
app.use(express.json());
app.use('/api',router);
router.use('/',StudentRouter);
router.use('/operations',math);


app.set('port', process.env.PORT || 3000);

app.listen(app.get("port"), () => {
	console.log(`Server started on ${app.get("port")}`);
});
