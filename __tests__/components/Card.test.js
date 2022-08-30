
import { render, screen } from '@testing-library/react'
import "react-redux";

import Card from '../../components/Card'
import  '@testing-library/jest-dom'
import { wrapper } from '../../store';
import { fetchVocabData } from '../../slices/vocabSlice';



const data = [{
    "word": "inheritance",
    "definition": "One of the four pillars of OOP, this solves the problem of redundant code by allowing more specific versions of a class to use an existing implementation of fields/methods.",
    "category": {
    "id": 7,
    "name": "OOP"
    },
    "id": 1
    },
    {
    "word": "polymorphism",
    "definition": "One of the four pillars of OOP, this removes the need for messy, long if/else blocks by letting child classes define their own variations on parent behavior as needed.",
    "category": {
    "id": 7,
    "name": "OOP"
    },
    "id": 2
    },]

    describe('Card', () =>{
        
        it('renders list of cards', () =>{
            render(wrapper.withRedux(<Card />))
            
            

            const testCard = screen.queryByTestId ('Java6')

            expect(testCard).toBeInTheDocument()

        })
    })