const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

MongoClient.connect('mongodb://localhost:27017/timstales', (err, db) => {
  if (err) console.error(err)
  console.log(db)
  var collection = db.collection('posts')
  collection.find({}).toArray((err, items) => {
    if (err) console.error(err)
    console.log(items)
    db.close()
  })
})

// ;(async function findPost (id) {
//   let client

//   try {
//     client = await MongoClient.connect(url)
//     console.log('connection correctly to server')
//     const db = client.db(dbName)

//     const col = db.collection('posts')

//     let doc = await col.find({_id: id}).toArray()[0]
//     console.log(doc)

//     return doc
//   }
//   catch (err) {
//     console.log(err.stack)
//   }
//   client.close()
// })()
