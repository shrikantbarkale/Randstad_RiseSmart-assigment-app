import { createSlice } from "@reduxjs/toolkit";

const albums = createSlice({
    name:'albums',
    initialState:{
        items:[],
        selectAlbumId:null,
    },
    reducers: {
        setAlbums :(state,action) => {
            state.items = action.payload;
        },
        selectAlbumId :(state,action) => {
            state.selectAlbumId = action.payload.id;
        },
    }
});

export const {setAlbums,selectAlbumId} = albums.actions;

export default albums.reducer;
