import Agenda from 'agenda'

import CONFIG from '../config'

const agenda = new Agenda({ db: { address: CONFIG.MONGO_URL } })

agenda.define('test', async(job, done) => {

})

agenda.on('ready', () => {
  agenda.every('1 week', 'test')
  agenda.start()
})
