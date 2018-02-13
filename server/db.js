const MongoClient = require('mongodb').MongoClient

const uri = 'mongodb://timstales:ideology1@ds233208.mlab.com:33208/timstales'

MongoClient.connect(uri, (err, client) => {
  if (err) alert('error:', err.message)

  const collection = client.db('timstales').collection('posts')
  collection.find({}).toArray((err, items) => {
    if (err) alert('error:', err.message)
    return items
  })
  client.close()
})
