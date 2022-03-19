async function init () {
    const node = document.querySelector("#type-text")
   
    while (true) {
      
      await node.type('Olá!')
      await sleep(1000)
      await node.delete('Olá!')

      await sleep(1000)
      await node.type('Seja bem vinda!')
      await sleep(500)
      await node.delete('a!')
      await sleep(500)
      await node.type('o!')
      await sleep(500)
      await node.delete('Seja bem vindo!')

    }
  } 
  
  const sleep = time => new Promise(resolve => setTimeout(resolve, time))
  
  class TypeAsync extends HTMLSpanElement {
    get typeInterval () {
      const randomMs = 100 * Math.random()
      return randomMs < 50 ? 10 : randomMs
    }
    
    async type (text) {
      for (let character of text) {
        this.innerText += character
        await sleep(this.typeInterval)
      }
    }
    
    async delete (text) {
      for (let character of text) {
        this.innerText = this.innerText.slice(0, this.innerText.length -1)
        await sleep(this.typeInterval)
      }
    }
  }
  
  customElements.define('type-async', TypeAsync, { extends: 'span' })
  
  
  init()
  