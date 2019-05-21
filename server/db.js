const MongoClient = require('mongodb').MongoClient

const uri = 'mongodb://timstales:ideology1@ds233208.mlab.com:33208/timstales'

MongoClient.connect(uri, {useNewUrlParser: true})
  .then(client => {
    const db = client.db('timstales')
    return db.collection('posts')
      .find({}).toArray()
      .then(output => output)
      .then((output) => {
        client.close()
        return output
      })
  })
  // getMongoPosts: (id) => {
  //   MongoClient.connect(uri, (err, client) => {
  //   if (err) alert('error:', err.message)
  //   const collection = client.db('timstales').collection('posts')
  //   collection.find({}).toArray((err, posts) => {
  //     if (err) {
  //       alert('error:', err.message)
  //     } else {
  //       return posts
  //     }
  //     client.close()
  //   })
  // })
module.exports = {
  getMongoPosts: () => {
    return MongoClient.connect(uri)
      .then(client => {
        const db = client.db('timstales')
        return db.collection('posts')
          .find({}).toArray()
          .then(output => output)
          .then((output) => {
            client.close()
            return output
          })
          .catch(err => console.error("error:", err))
      })
  },
  getMongoPost: (id) => {
    return MongoClient.connect(uri)
      .then((err, client) => {
      if (err) alert('error:', err.message)
      const collection = client.db('timstales').collection('posts')
      collection.find({'id': id}).toArray((err, post) => {
        if (err) alert('error:', err.message)
        return post
      })
      client.close()
    })
  },
  getMongoImages: (id) => {
    return MongoClient.connect(uri)
      .then((err, client) => {
      if (err) alert('error:', err.message)
      const collection = client.db('timstales').collection('images')
      collection.find({}).toArray((err, images) => {
        if (err) alert('error:', err.message)
        return images
      })
      client.close()
    })
  },
  getMongoimage: (id) => {
    return MongoClient.connect(uri)
      .then((err, client) => {
      if (err) alert('error:', err.message)
      const collection = client.db('timstales').collection('images')
      collection.find({id: id}).toArray((err, image) => {
        if (err) window.alert('error:', err.message)
        return image
      })
      client.close()
    })
  },
  getMongoTags: (id) => {
    return MongoClient.connect(uri)
      .then((err, client) => {
      if (err) alert('error:', err.message)
      const collection = client.db('timstales').collection('tags')
      collection.find({}).toArray((err, tags) => {
        if (err) window.alert('error:', err.message)
        return tags
      })
      client.close()
    })
  },
  getMongoTag: (id) => {
    return MongoClient.connect(uri)
      .then((err, client) => {
      if (err) alert('error:', err.message)
      const collection = client.db('timstales').collection('tags')
      collection.find({id: id}).toArray((err, tag) => {
        if (err) window.alert('error:', err.message)
        return tag
      })
      client.close()
    })
  }
}
