import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchVocabData = createAsyncThunk(
    'vocab/fetchVocabData',

    async (url) => {
        console.log(`${url}/api/vocab`)

        if(url == 'http://localhost:3000'){

        const response = await axios.get('https://test.javalearninglab.com/api/vocab', {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        }
        )

        return response.data
    }else{
         const response = await axios.get(`${url}/api/vocab`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        }
        )
        
        return response.data
    }


    }
)

const vocabSlice = createSlice({
    name: 'vocab',
    initialState: {
        vocab_data: [],
        current_category: 'all',
        isLoading: false,
        error: '',
    },
    reducers: {

        setCurrentCategory(state, action){


            state.current_category = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVocabData.pending, (state) => {
            state.vocab_data = [];
            state.isLoading = true;
        });
        builder.addCase(
            fetchVocabData.fulfilled, (state, { payload }) => {
                state.vocab_data = payload;
                state.isLoading = false;
            });
        builder.addCase(
            fetchVocabData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
})


export const { getCardData, setCurrentCategory} = vocabSlice.actions
export default vocabSlice.reducer