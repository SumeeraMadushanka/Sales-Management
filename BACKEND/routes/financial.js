const router = require("express").Router();
const Financial = require("../models/financial");

//route for creating database insertion
router.route("/create").post(async (req, res) => {
  const { month, description } = req.body;

  const revenue = Number(req.body.revenue);
  const expenditure = Number(req.body.expenditure);
  const financialValue = Number(req.body.financialValue);
  const profitOrLoss = Number(req.body.profitOrLoss);

  const newFinancial = new Financial({
    month,
    description,
    expenditure,
    financialValue,
    profitOrLoss,
    revenue,
  });

  await newFinancial
    .save()
    .then((data) => res.status(200).json({ success: data }))
    .catch(() => res.status(500).json({ success: false, error: error }));
});

//route for fetching all the data
router.route("/").get(async (req, res) => {
  await Financial.find()
    .then((financial) => res.json(financial))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting a relavant document using id
router.route("/get/:id").get(async (req, res) => {
  const { id } = req.params;

  await Financial.findById(id)
    .then((financials) => res.json(financials))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant document using id
router.route("/delete/:id").delete(async (req, res) => {
  const { id } = req.params;

  await Financial.findByIdAndRemove(id) //find by the document by id and delete
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for updating a relavant document using id
router.route("/update/:id").put(async (req, res) => {
  //backend route for updating relavant data and passing back
  const { id } = req.params;
  const {
    month,
    revenue,
    expenditure,
    description,
    financialValue,
    profitOrLoss,
  } = req.body;

  //find the document by and update the relavant data
  await Financial.findByIdAndUpdate(id, {
    month,
    revenue,
    expenditure,
    description,
    financialValue,
    profitOrLoss,
  })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});

module.exports = router;
