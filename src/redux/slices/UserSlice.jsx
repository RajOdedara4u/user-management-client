import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Initial State
const initialState = {
  isLoading: false,
  data: null,
  isError: false,
  token: localStorage.getItem("token") || null,
  isLoggedIn: !!localStorage.getItem("token"),
  email: "",
  name: "",
  pincode: "",
  address: "",
};

// AsyncThunk for Login
export const login = createAsyncThunk(
  "login",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://um-task-server.onrender.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const res_data = await response.json();
      if (response.ok) {
        toast.success(res_data.message);
        return {
          token: res_data.token,
          email: res_data.email,
          name: res_data.name,
          address: res_data.address,
          pincode: res_data.pincode,
        }; // Return token to be handled in reducers
      } else {
        toast.error(res_data.message);
        return rejectWithValue(res_data.message);
      }
    } catch (error) {
      toast.error("Server Error");
      return rejectWithValue("Server  Error...");
    }
  }
);

// AsyncThunk for Register
export const register = createAsyncThunk(
  "register",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://um-task-server.onrender.com/api/users/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const res_data = await response.json();
      if (response.ok) {
        toast.success("Registration Successful!");
        return {
          token: res_data.token,
          email: res_data.email,
          name: res_data.name,
          pincode: res_data.pincode,
          address: res_data.address,
        }; // Return token to be handled in reducers
      } else {
        toast.error(res_data.message);
        return rejectWithValue(res_data.message);
      }
    } catch (error) {
      toast.error("Server Error. Please try again later.");
      return rejectWithValue("Server Error");
    }
  }
);

// Thunk to update user data
export const updateUser = createAsyncThunk(
  "update",
  async (newdata, { rejectWithValue }) => {
    try {
      // Merge existing data with updated fields
      const mergedData = {
        email: newdata.email,
        name: newdata.name,
        address: newdata.address,
        pincode: newdata.pincode,
      };
      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://um-task-server.onrender.com/api/users/updateuser",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token for authentication
          },
          body: JSON.stringify(mergedData),
        }
      );
      const resData = await response.json();
      if (response.ok) {
        toast.success("User updated successfully!");
        return resData; //
      } else {
        toast.error(resData.message || "Error updating user");
        return rejectWithValue(resData.message || "Error updating user");
      }
    } catch (error) {
      toast.error(error.message || "Server Error");
      return rejectWithValue(error.message || "Server Error");
    }
  }
);

// Slice
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("cartItems");
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    // -----------------------------------------------------Login
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        const data = action.payload;
        state.isLoading = false;
        state.token = data.token;
        state.email = data.email;
        state.name = data.name;
        state.address = data.address;
        state.pincode = data.pincode;
        state.isLoggedIn = true;
        localStorage.setItem("token", data.token); // Store token in localStorage
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });

    // ----------------------------------------------------- Register
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        const data = action.payload;
        state.isLoading = false;
        state.token = data.token;
        state.email = data.email;
        state.name = data.name;
        state.address = data.address;
        state.pincode = data.pincode;
        state.isLoggedIn = true;
        localStorage.setItem("token", data.token); // Store token in localStorage
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });

    // ----------------------------------------------------- Update
    builder
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.email = action.payload.user.email;
        state.name = action.payload.user.name;
        state.address = action.payload.user.address;
        state.pincode = action.payload.user.pincode;
        state.data = action.payload;

        localStorage.removeItem("token"); // Remove the old token
        localStorage.setItem("token", action.payload.token); // Store the new token
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { logout } = UserSlice.actions;
export default UserSlice.reducer;
