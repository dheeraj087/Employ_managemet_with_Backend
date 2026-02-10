import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  employData: [],
  getEmployData: {},
  updateEmploy: {},
  updateLoder: false,
  updateError: null,
  getLoder: false,
  getError: null,
  loading: false,
  isForm: false,
  mode: {},
  error: null,
};
export const data = createAsyncThunk("employ/data", async (data2, thunkAPI) => {
  try {
    if (!data2) {
      return new Error(
        "cripaya data me apni ugali kare nhi to ham bd me ugali nahi kare ge "
      );
    }
    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data2),
    });
    if (!response.ok) {
      return thunkAPI.rejectWithValue(await response.json());
    }
    return await response.json();
  } catch (error) {
    console.log(error);

    return thunkAPI.rejectWithValue(error);
  }
});
export const getData = createAsyncThunk(
  "employ/Get/data",
  async (data, thunkAPI) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/employ/v1/getEmploy",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      if (!response.ok) {
        return thunkAPI.rejectWithValue(
          "ejhgfsjkwedgfhk.dashffjk.sdhfsjkeii.dfbbskwdgufysjkew,g"
        );
      }
      return await response.json();
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateEmployData = createAsyncThunk(
  "uptateEmploy",

  async (updatedata, thunkAPI) => {
    console.log(updatedata);

    try {
      const responce = await fetch(
        `http://localhost:5000/api/employ/v1/updateEmploy/${updatedata.userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(updatedata.updateDate),
        }
      );
      if (!responce.ok) {
        return thunkAPI.rejectWithValue(await responce.json());
      }
      return await responce.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const setEmployData = createAsyncThunk(
  "set/Employ",
  async (data, thunkAPI) => {
    try {
      const responce = await fetch(
        "http://localhost:5000/api/employ/v1/createEmploy",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!responce.ok) {
        return thunkAPI.rejectWithValue(await responce.json());
      }
      return await responce.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const employSlice = createSlice({
  name: "employ",
  initialState,
  reducers: {
    isForm: (state, action) => {
      state.isForm = action.payload.isForm;
      state.mode = action.payload.mode;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(data.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(data.fulfilled, (state, action) => {
        state.employData = action.payload;
        state.loading = false;
      })
      .addCase(data.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(updateEmployData.pending, (state, action) => {
        state.updateLoder = true;
        state.updateError = null;
      })
      .addCase(updateEmployData.fulfilled, (state, action) => {
        state.updateLoder = false;
        state.updateEmploy = action.payload;
        state.updateError = null;
      })
      .addCase(updateEmployData.rejected, (state, action) => {
        state.updateLoder = false;
        state.updateError = action.payload;
      });

    builder
      .addCase(getData.pending, (state, action) => {
        state.getLoder = true;
        state.getError = null;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.getLoder = false;
        state.employData = action.payload;
        state.getError = null;
      })
      .addCase(getData.rejected, (state, action) => {
        state.getLoder = false;
        state.getError = action.payload;
      });
    builder
      .addCase(setEmployData.pending, (state, action) => {
        state.getLoder = true;
        state.getError = null;
      })
      .addCase(setEmployData.fulfilled, (state, action) => {
        state.getLoder = false;
        state.employData = action.payload;
        state.getError = null;
      })
      .addCase(setEmployData.rejected, (state, action) => {
        state.getLoder = false;
        state.getError = action.payload;
      });
  },
});
export const { isForm } = employSlice.actions;
export const employReduser = employSlice.reducer;
