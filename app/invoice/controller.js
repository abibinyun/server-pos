const { subject } = require("@casl/ability");
const Invoice = require("../invoice/model");
const { policyFor } = require("../../utils");

const show = async (req, res, next) => {
  try {
    let policy = policyFor(req.user);
    let subjectInvoice = subject("Invoice", { ...invoice, user_id: invoice.user._id });
    if (!policy.can("read", subjectInvoice)) {
      return res.json({
        error: 1,
        message: `Anda tidak memiliki akses untuk melihat invoice ini.`,
      });
    }

    let { order_id } = req.params;
    let invoice = await Invoice.findOne({ order: order_id }).populate("order").populate("user");

    return res.json(invoice);
  } catch (error) {
    if (err && err.name === "ValidationError") {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
  }
};

module.exports = {
  show,
};
