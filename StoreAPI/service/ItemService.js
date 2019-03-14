'use strict';


/**
 * Add a new item to the store
 * 
 *
 * body Item Electronic item object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addItem = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a item
 * 
 *
 * itemId Long Item id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteItem = function(itemId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds items by Quantity
 * By quantity
 *
 * quant List Quant to filter by
 * returns List
 **/
exports.findItemsByQuant = function(quant) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "name",
  "id" : 0,
  "category" : {
    "name" : "name",
    "id" : 6
  },
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
    "id" : 1
  } ],
  "status" : "available"
}, {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "name",
  "id" : 0,
  "category" : {
    "name" : "name",
    "id" : 6
  },
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
    "id" : 1
  } ],
  "status" : "available"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds Items by status
 * Multiple status values can be provided with comma separated strings
 *
 * status List Status values that need to be considered for filter
 * returns List
 **/
exports.findItemsByStatus = function(status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "name",
  "id" : 0,
  "category" : {
    "name" : "name",
    "id" : 6
  },
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
    "id" : 1
  } ],
  "status" : "available"
}, {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "name",
  "id" : 0,
  "category" : {
    "name" : "name",
    "id" : 6
  },
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
    "id" : 1
  } ],
  "status" : "available"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find item by ID
 * Returns a single item
 *
 * itemId Long ID of item to return
 * returns Item
 **/
exports.getItemById = function(itemId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "name",
  "id" : 0,
  "category" : {
    "name" : "name",
    "id" : 6
  },
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
    "id" : 1
  } ],
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing item
 * 
 *
 * body Item Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updateItem = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates a item in the store with form data
 * 
 *
 * itemId Long ID of item that needs to be updated
 * name String Updated name of the item (optional)
 * status String Updated status of the item (optional)
 * no response value expected for this operation
 **/
exports.updateItemWithForm = function(itemId,name,status) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * uploads an image
 * 
 *
 * itemId Long ID of item to update
 * additionalMetadata String Additional data to pass to server (optional)
 * file File file to upload (optional)
 * returns ApiResponse
 **/
exports.uploadFile = function(itemId,additionalMetadata,file) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "type" : "type",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

