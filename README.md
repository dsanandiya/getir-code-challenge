# Getir Code Challenge

# Fetch Records

Create a RESTful API with a single endpoint that fetches the data in the
provided MongoDB collection and return the results in the requested format.

**URL** : `https://getir-code-challenge.herokuapp.com/api/v1/records`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints**

```json
{
    "startDate": "string",
    "endDate": "string",
    "minCount": "number",
    "maxCount": "number"
}
```

**Data example** All fields must be sent.

```json
{
    "startDate": "2016-01-26",
    "endDate": "2018-02-02",
    "minCount": 2700,
    "maxCount": 3000
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Content example**

```json
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "ibfRLaFT",
            "createdAt": "2016-12-25T16:43:27.909Z",
            "totalCount": 2892
        }
    ]
}
```

## Error Responses

**Condition** : If fields are missed or wrong type.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "message": "\"maxCount\" must be a number"
}
```
## Project Setup

Install NPM dependencies:

```
$ npm install
```

Install NPM dependencies:

```
$ npm install
```

Run run it on local environment

```
$ npm start
```

Run unit tests:

```
$ npm test
```
