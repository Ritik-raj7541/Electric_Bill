const asyncHandler = require("express-async-handler");
const Master = require("../models/master");
const Transaction = require("../models/transaction");
//it is a logic page

// 1. GET /api/master
const getMaster = asyncHandler(async (req, res) => {
  const masters = await Master.find();
  res.status(200).json(masters);
});

// 2. POST /api/master
const postMaster = asyncHandler(async (req, res) => {
//   console.log(req.body);
  const {
    Code,
    Name,
    Dept,
    PrevBalance,
    Location,
    LastReading,
    MeterCharge,
    UnitRate,
    LastDate,
    Allocation,
    LastPaymentDate,
  } = req.body;
  if (
    !Code ||
    !Name ||
    !Dept ||
    !PrevBalance ||
    !Location ||
    !LastReading ||
    !MeterCharge ||
    !UnitRate ||
    !LastDate ||
    !Allocation ||
    !LastPaymentDate
  ) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  } else {
    const newMaster = await Master.create({
      Code,
      Name,
      Dept,
      PrevBalance,
      Location,
      LastReading,
      MeterCharge,
      UnitRate,
      LastDate,
      Allocation,
      LastPaymentDate,
    });
    res.status(201).json(newMaster);
  }
  //now putting
});

// 3. GET /api/transaction
const getTransaction = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "transaction is working fine" });
});

// 4. POST /api/transaction
const postTransaction = asyncHandler(async (req, res) => {
//   console.log(req.body);
  const {
    Code,
    ToDate,
    CurrentReading,
    CurrentPayment,
    CurrentPaymentDate,
    CurrentCharges,
  } = req.body;
  if (!Code || !ToDate || !CurrentReading || !CurrentCharges) {
    res.status(400);
    throw new Error(" fields are mandatory !");
  } else {
    const newTransaction = await Transaction.create({
      Code,
      ToDate,
      CurrentReading,
      CurrentPayment,
      CurrentPaymentDate,
      CurrentCharges,
    });
    res.status(400).json(newTransaction);
  }
});

// 5. GET /api/print
const getPrint = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "print is working fine" });
});

// 6. POST /api/print
const postPrint = asyncHandler(async (req, res) => {});

module.exports = {
  getMaster,
  postMaster,
  getTransaction,
  postTransaction,
  getPrint,
  postPrint,
};
