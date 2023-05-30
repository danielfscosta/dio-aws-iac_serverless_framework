"use strict"
const { v4 } = require("uuid")
const AWS = require("aws-sdk")

const updateItem = async (event) => {
    
    
    const {itemStatus} = JSON.parse(event.body);
    const { id } = event.pahParameters

    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    
    await dynamoDB.update(
        {
            TableName: "ItemTableNew",
            Key: {id},
            UpdateExpression: 'set itemStatus = :itemStatus',
            ExpressionAttributeValues : {
                ':itemStatus': itemStatus
            },
            ReturnValues: "ALL_NEW"
        }
    ).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(
            {msg: "Item Atualizado"}
        )
    };

}

module.exports= {
    handler:updateItem,
};
