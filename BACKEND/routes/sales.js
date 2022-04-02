const router = require("express").Router();
const Sales = require("../models/sales");

//route for creating database insertion
router.route("/create").post(async (req, res) => {
  const { month, vName, rNumber, vNumber } = req.body;

  const week = Number(req.body.week);
  const numberOfkm = Number(req.body.numberOfkm);
  const payment = Number(req.body.payment);
  const numberOfday = Number(req.body.numberOfday);
  const revenue = Number(req.body.revenue);

  const newSales = new Sales({
    month,
    vName,
    rNumber,
    vNumber,
    week,
    numberOfkm,
    payment,
    numberOfday,
    revenue,
  });

  const isAvailable = await Sales.findOne({ vNumber: vNumber });

  if (isAvailable) {
    return res
      .status(401)
      .json({ error: "Already Exist this Vehicle! Plz add new 😀" });
  }

  await newSales
    .save()
    .then((data) => res.status(200).json({ success: data }))
    .catch(() => res.status(500).json({ success: false, error: error }));
});

//route for fetching all the data
router.route("/").get(async (req, res) => {
  await Sales.find()
    .then((sale) => res.json(sale))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting a relavant document using id
router.route("/get/:id").get(async (req, res) => {
  const { id } = req.params;

  await Sales.findById(id)
    .then((sales) => res.json(sales))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant document using id
router.route("/delete/:id").delete(async (req, res) => {
  const { id } = req.params;

  await Sales.findByIdAndRemove(id) //find by the document by id and delete
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for updating a relavant document using id
router.route("/update/:id").put(async (req, res) => {
  //backend route for updating relavant data and passing back
  const { id } = req.params;
  const {
    vName,
    rNumber,
    vNumber,
    numberOfkm,
    payment,
    numberOfday,
    revenue,
    month,
    week,
  } = req.body;

  //find the document by and update the relavant data
  await Sales.findByIdAndUpdate(id, {
    vName,
    rNumber,
    vNumber,
    numberOfkm,
    payment,
    numberOfday,
    revenue,
    month,
    week,
  })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});

module.exports = router;
