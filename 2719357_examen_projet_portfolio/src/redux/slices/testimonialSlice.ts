import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Testimonial {
  id: number;
  auteur: string;
  message: string;
}

interface State {
  list: Testimonial[];
}

const initialState: State = {
  list: [],
};

const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    addTestimonial: (state, action: PayloadAction<Testimonial>) => {
      state.list.push(action.payload);
    },
    editTestimonial: (state, action: PayloadAction<Testimonial>) => {
      const index = state.list.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    removeTestimonial: (state, action: PayloadAction<number>) => {
        state.list = state.list.filter(t => t.id !== action.payload);
    },
  },
});

export const { addTestimonial, editTestimonial, removeTestimonial  } = testimonialSlice.actions;
export default testimonialSlice.reducer;
