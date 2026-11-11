import {test} from "node:test"
import assert from "node:assert/strict"
import {soma} from "./soma.js"

test("soma 1 e 1", ()=>{
    assert.equal(soma(1,1), 2)
})

test("soma 0 e 0", ()=>{
    assert.equal(soma(0,0), 0)
})


const params = [
        {num1: 1, num2: 1, esperado: 2},
        {num1: 2, num2: 2, esperado: 4},
        {num1: 3, num2: 3, esperado: 6},
        {num1: 0, num2: 0, esperado: 0}
]
test("conjunto de testes", async(t)=>{
    for (const {num1, num2, esperado} of params) {
        await t.test(`soma de ${num1} e ${num2} é ${esperado}`, ()=>{
            const resultado = soma(num1, num2)
            assert.equal(resultado, esperado)
        })
    }
})