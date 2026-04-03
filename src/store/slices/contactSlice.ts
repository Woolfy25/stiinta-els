// store/contactSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ContactState {
  loading: boolean;
  success: boolean | null;
  error: string | null;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SendEmailResponse {
  message: string;
}

interface SendEmailReject {
  message: string;
}

const initialState: ContactState = {
  loading: false,
  success: null,
  error: null,
};

export const sendContactEmail = createAsyncThunk<
  SendEmailResponse,
  ContactFormData,
  { rejectValue: SendEmailReject }
>("contact/sendEmail", async (formData, { rejectWithValue }) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = (await res.json()) as SendEmailResponse;

    if (!res.ok) return rejectWithValue(data as SendEmailReject);
    return data;
  } catch (error: unknown) {
    // Folosim type narrowing
    let message = "Eroare la trimitere";
    if (error instanceof Error) {
      message = error.message;
    }
    return rejectWithValue({ message });
  }
});
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.loading = false;
      state.success = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactEmail.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(sendContactEmail.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(sendContactEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message ?? "Eroare la trimitere";
      });
  },
});

export const { resetStatus } = contactSlice.actions;
export default contactSlice.reducer;
