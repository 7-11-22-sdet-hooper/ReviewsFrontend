import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchVocabData = createAsyncThunk(
    'vocab/fetchVocabData',
    async () => {
        const response = await axios.get('https://test.javalearninglab.com/api/vocab', {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        }
        )


        return response.data

    }
)

const vocabSlice = createSlice({
    name: 'vocab',
    initialState: {
        vocab_data: [],
        isLoading: false,
        error: '',
    },
    reducers: {
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


export const { getCardData } = vocabSlice.actions
export default vocabSlice.reducer