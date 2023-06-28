const db = require("../connection/connect");

const login = async (req, res) => {
  console.log(req.body);
  let query = `select * from auth where username='${req.body.username}' and password='${req.body.password}'`;
  db.query(query, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ response: err });
    } else {
      res.json({ response: data });
    }
  });
};

const addOrder = async (req, res) => {
  console.log(req.body);
  let obj = req.body;
  let query = `insert into order_list(username,order_date,company,owner,item,quantity,weight,req_for_shipment,tracking_id,shipment_size,box_count,specification,checklist_quantity) value('${obj.username}','${obj.order_date}','${obj.company}','${obj.owner}','${obj.item}',${obj.quantity},${obj.weight},'${obj.req_for_shipment}','${obj.tracking_id}','${obj.shipment_size.length} x ${obj.shipment_size.breadth} x ${obj.shipment_size.height}',${obj.box_count},'${obj.specification}','${obj.checklist_quantity}')`;
  db.query(query, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ response: err });
    } else {
      res.json({ response: data });
    }
  });
};

const getOrderDetails = async (req, res) => {
  let query = `select username,sum(quantity),sum(weight),sum(box_count) from order_list group by username`;
  db.query(query, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ response: err });
    } else {
      res.json({ response: data });
    }
  });
};
module.exports = { login, addOrder, getOrderDetails };
