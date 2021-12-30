class Calculator{
    constructor(preText, curText){
        this.preText = preText
        this.curText = curText
    }

    clear(){

    }

    delete(){

    }

    appendNumber(number){

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const acButton = document.querySelector('[data-ac]')
const delButton = document.querySelector('[data-del]')
const preText = document.querySelector('[data-pre]')
const curText = document.querySelector('[data-cur]')
