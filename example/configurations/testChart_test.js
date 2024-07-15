import chart from 'rawcharts/testchart'
import data from '../datasets/Music.csv'

export default {
  chart,
  data,
  dataTypes: {
    Category: {
      type: 'string',
      dateFormat: 'YYYY',
    },
    'Units': 'number',
    'Revenues': 'number',
    Rating: 'number',
    Title: 'string',
    Genre: 'string',
  },
  mapping: {
    x: { value: ['Units'] },
    y: { value: ['Revenues'] },
    color: { value: ['Category'] },
  },
  visualOptions: {
    width: 800,
    height: 600,
    marginTop: 20,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10,
    background: 'lightgrey'
  },
}