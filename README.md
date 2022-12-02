# aws_simple_nodejs_lambda

## create

```
{
    "operation": "create",
    "payload": {
        "TableName": "Users",
        "Item": {
            "first_name": "Mont",
            "last_name": "Violet"
        }
    }
}
```

## list
```
{
    "operation": "list",
    "payload": {
        "TableName": "Users"
    }
}
```

## get by id

```
{
    "operation": "read",
    "payload": {
        "TableName": "Users",
        "Key": {
            "id": "0f134444-e542-4f96-b89f-8ce19fa20efd"
        }
    }
}
```

## update

```
{
    "operation": "update",
    "payload": {
        "TableName": "Users",
        "Key": {
            "id": "0f134444-e542-4f96-b89f-8ce19fa20efd"
        },
        "UpdateExpression": "set first_name = :t, last_name = :s",
        "ExpressionAttributeValues": {
            ":t" : "Fleuve",
            ":s" : "Violet"
        }
    }
}
```

## delete

```
{
    "operation": "delete",
    "payload": {
        "TableName": "Users",
        "Key": {
            "id": "0f134444-e542-4f96-b89f-8ce19fa20efd"
        }
    }
}
```
