/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y4wxu95ologshsc",
    "created": "2023-10-23 21:24:34.027Z",
    "updated": "2023-10-23 21:24:34.027Z",
    "name": "Expense_Sheet",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kc5sb6et",
        "name": "withdraw_total",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "soyphaiu",
        "name": "deposit_total",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("y4wxu95ologshsc");

  return dao.deleteCollection(collection);
})
