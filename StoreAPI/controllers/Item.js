'use strict';

var utils = require('../utils/writer.js');
var Item = require('../service/ItemService');

module.exports.addItem = function addItem (req, res, next) {
  var body = req.swagger.params['body'].value;
  Item.addItem(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteItem = function deleteItem (req, res, next) {
  var itemId = req.swagger.params['itemId'].value;
  var api_key = req.swagger.params['api_key'].value;
  Item.deleteItem(itemId,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findItemsByQuant = function findItemsByQuant (req, res, next) {
  var quant = req.swagger.params['quant'].value;
  Item.findItemsByQuant(quant)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findItemsByStatus = function findItemsByStatus (req, res, next) {
  var status = req.swagger.params['status'].value;
  Item.findItemsByStatus(status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getItemById = function getItemById (req, res, next) {
  var itemId = req.swagger.params['itemId'].value;
  Item.getItemById(itemId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateItem = function updateItem (req, res, next) {
  var body = req.swagger.params['body'].value;
  Item.updateItem(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateItemWithForm = function updateItemWithForm (req, res, next) {
  var itemId = req.swagger.params['itemId'].value;
  var name = req.swagger.params['name'].value;
  var status = req.swagger.params['status'].value;
  Item.updateItemWithForm(itemId,name,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.uploadFile = function uploadFile (req, res, next) {
  var itemId = req.swagger.params['itemId'].value;
  var additionalMetadata = req.swagger.params['additionalMetadata'].value;
  var file = req.swagger.params['file'].value;
  Item.uploadFile(itemId,additionalMetadata,file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
