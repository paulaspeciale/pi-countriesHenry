import React from 'react'
import {configure,mount} from 'enzyme'
import CreateRecipe from  '../../src/components/CreateRecipe/CreateRecipe'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom'
import store from '../store/index'

configure({adapter: new Adapter()})

describe('Create Recipe', () => {
    let wrapper
    beforeEach(()=>{
        wrapper = mount(<Provider store={store}><CreateRecipe/></Provider>)
    })
    it('deberia tener un <h4> con ', () => {
        expect(wrapper.find('h1').text()).toEqual('CreateRecipe')
    })
    it('deberia tener un form',()=>{
        expect(CreateRecipe.find("form").length).toBe(1);
    })
    it('deberia tener un input con id titulo', ()=>{
        expect(wrapper.find('input[id="title"]')).toHaveLength(1)
    })
    it('deberia tener un input con id summary', ()=>{
        expect(wrapper.find('input[id="summary"]')).toHaveLength(1)
    })
    it('deberia tener un input con id healthScore', ()=>{
        expect(wrapper.find('input[id="healthScore"]')).toHaveLength(1)
    })
    it('deberia tener un input con id instructions', ()=>{
        expect(wrapper.find('input[id="instructions"]')).toHaveLength(1)
    })

    it('deberia tener un select para las dietas', ()=>{
        expect(wrapper.find('select')).toHaveLength(1)
    })
   
    it('deberia tener un input de para enviar con type submit', ()=>{
        expect(wrapper.find('button[id="submit"]')).toHaveLength(1)
    })
})