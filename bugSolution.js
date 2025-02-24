```javascript
//Corrected Aggregation Pipeline
db.collection.aggregate([
  {
    $match: { field: 'value' }
  },
  {
    $group: {
      _id: '$field',
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      field: '$field',
      count: 1
    }
  }
])
```