const { v4: uuidv4 } = require('uuid');

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {

  var operation = event.operation;

  switch (operation) {
    case 'create':
      event.payload.Item['id'] = uuidv4();
      dynamo.put(event.payload, callback);
      break;
    case 'read':
      dynamo.get(event.payload, callback);
      break;
    case 'update':
      dynamo.update(event.payload, callback);
      break;
    case 'delete':
      dynamo.delete(event.payload, callback);
      break;
    case 'list':
      dynamo.scan(event.payload, callback);
      break;
    case 'echo':
      callback(null, "Success");
      break;
    case 'ping':
      callback(null, "pong");
      break;
    default:
      callback(`Unknown operation: ${operation}`);
  }
};
