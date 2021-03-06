exports.sendOrder = function(origin, order) {
  const url = `${origin}/api/v1/orders`;

  const fetchData = {
    method: "POST",
    body: JSON.stringify(order),
  };

  return fetch(url, fetchData).then(response => response.json());
};

exports.voidLine = function(origin, order) {
  const url = `${origin}/api/v1/void_line`;

  const fetchData = {
    method: "POST",
    body: JSON.stringify(order),
  };

  return fetch(url, fetchData).then(response => response.json());
};

exports.printOrder = function(origin, order) {
  const url = `${origin}/api/v1/print_order`;

  const fetchData = {
    method: "POST",
    body: JSON.stringify(order),
  };

  return fetch(url, fetchData).then(response => response.json());
};

exports.cancelOrder = function(origin, order) {
  const url = `${origin}/api/v1/cancel_order`;

  const fetchData = {
    method: "POST",
    body: JSON.stringify(order),
  };

  return fetch(url, fetchData).then(response => response.json());
};

exports.changeOrderTable = function(origin, order) {
  const url = `${origin}/api/v1/change_table`;

  const fetchData = {
    method: "POST",
    body: JSON.stringify(order),
  };

  return fetch(url, fetchData).then(response => response.json());
};

exports.tailOrderLine = function(line) {
  return {
    itemName: line.item_name,
    itemCode: line.item,
    rate: line.price,
    qty: line.qty,
  };
};
