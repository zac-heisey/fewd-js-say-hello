import test from 'ava'
import fs from 'fs'
import jsdom from 'jsdom'

test.cb('index.html', t => {
  const index = fs.readFileSync('./index.html', 'utf-8')
  jsdom.env(index, (error, window) => {
    const h1 = window.document.getElementsByTagName('h1')[0]
    t.is(h1.innerHTML, 'Say Hello')
    t.end()
    window.close()
  })
})

