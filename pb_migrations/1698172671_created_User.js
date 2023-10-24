/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fu4p46wl8f0aoz6",
    "created": "2023-10-24 18:37:51.195Z",
    "updated": "2023-10-24 18:37:51.195Z",
    "name": "User",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wix3oqzq",
        "name": "first_name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "jl9sykn3",
        "name": "last_name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "en54y1vv",
        "name": "email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fu4p46wl8f0aoz6");

  return dao.deleteCollection(collection);
})
