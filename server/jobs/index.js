import Agenda from 'agenda'

import CONFIG from '../config'
import { addWeeklyCoinData } from './coins'

const agenda = new Agenda({ db: { address: CONFIG.MONGO_URL } })

agenda.define('update coin history', async(job, done) => {
  await addWeeklyCoinData()
  done()
})

agenda.on('ready', () => {
  //agenda.every('1 week', 'update coin history')
  //agenda.start()
})


