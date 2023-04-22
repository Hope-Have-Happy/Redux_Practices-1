import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTransaction, deleteTransaction, editTransaction, getTransactions } from "./transactionAPI";


// initialize the state 
const initialState = {
    transactions: [],
    isLoading: false,
    isError: false,
    error: "",
    editing: {},
};


// async thunks

/* get all transactions */
export const fetchTransactions = createAsyncThunk(
    "transaction/fetchTransactions",
    async () => {
        const transactions = await getTransactions();
        return transactions;
    }
);


/* create new transaction */
export const createTransactions = createAsyncThunk(
    "transaction/createTransaction",
    async (data) => {
        const transaction = await addTransaction(data);
        return transaction;
    }
);

/* edit existing transaction */
export const editExistingTransaction = createAsyncThunk(
    "transaction/editExistingTransaction",
    async ({ id, data }) => {
        const transaction = await editTransaction(id, data);
        return transaction;
    }
);

/* delete existing transaction */
export const removeTransaction = createAsyncThunk(
    "transaction/removeTransaction",
    async (id) => {
        const transaction = await deleteTransaction(id);
        return transaction;
    }
);


// create slice
const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
        editActive: (state, action) => {
            state.editing = action.payload;
        },
        editInActive: (state) => {
            state.editing = {};
        },
    },
    extraReducers: (builder) => {
        builder

            /* get all transactions case start */
            .addCase(fetchTransactions.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
                state.transactions = [];
            })
            /* get all transactions case end */

            /* ============================================================================ */

            /* create new transaction case start */
            .addCase(createTransactions.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(createTransactions.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.transactions.push(action.payload);
            })
            .addCase(createTransactions.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })
            /* create new transaction case end */

            /* ============================================================================ */

            /* edit existing transaction case start */
            .addCase(editExistingTransaction.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(editExistingTransaction.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;

                const indexToUpdate = state.transactions.findIndex(
                    (transaction) => transaction.id === action.payload.id
                );

                state.transactions[indexToUpdate] = action.payload;
            })
            .addCase(editExistingTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })
            /* edit existing transaction case end */

            /* ============================================================================ */

            /* delete existing transaction case start */
            .addCase(removeTransaction.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(removeTransaction.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;

                state.transactions = state.transactions.filter(
                    (transaction) => transaction.id !== action.meta.arg
                );
            })
            .addCase(removeTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            });
        /* delete existing transaction case end */
    },
});

export default transactionSlice.reducer;
export const { editActive, editInActive } = transactionSlice.actions;