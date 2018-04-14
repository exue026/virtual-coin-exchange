import Agenda from 'agenda'

import CONFIG from '../config'
import coins from './coins'

const agenda = new Agenda({ db: { address: CONFIG.MONGO_URL } })

agenda.define('print hello world', (job, done) => {
  console.log('hello, world!')
  done()
})

agenda.on('ready', () => {
  agenda.every('10 seconds', 'print hello world')
  agenda.start()
})


