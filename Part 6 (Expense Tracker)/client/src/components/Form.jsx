import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransactions, editExistingTransaction } from "../features/transaction/transactionSlice";

export default function Form() {

    const { isLoading, isError } = useSelector(state => state.transaction);
    const { editing } = useSelector(state => state.transaction) || {};

    // dispatch
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [type, setType] = useState("income");
    const [amount, setAmount] = useState("");
    const [editMode, setEditMode] = useState(false);

    // add new data
    const addNewTransactionHandler = (e) => {
        e.preventDefault();
        dispatch(createTransactions({
            name,
            type,
            amount: Number(amount)
        }));
        resetForm();
    }
    // update existing data
    const handleTransactionUpdate = (e) => {
        e.preventDefault();
        dispatch(editExistingTransaction({
            id: editing?.id,
            data: {
                name,
                type,
                amount: Number(amount)
            }
        }));
        resetForm();
    }

    useEffect(() => {
        const { id, name, amount, type } = editing || {};
        if (id) {
            setEditMode(true);
            setName(name);
            setType(type);
            setAmount(amount);
        } else {
            setEditMode(false);
        }
    }, [editing])

    // reset form
    const resetForm = () => {
        setName("");
        setType("income");
        setAmount("");
    }

    // Cancel mode handle
    const cancelEditMode = () => {
        resetForm();
        setEditMode(false);
    };

    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form action="" onSubmit={editMode ? handleTransactionUpdate : addNewTransactionHandler}>

                <div className="form-group">
                    <label htmlFor="transaction_name">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="My Salary"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="form-group radio">
                    <label htmlFor="type">Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            name="type"
                            checked={type === "income"}
                            onChange={e => setType("income")}
                        />
                        <label htmlFor="type">Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            checked={type === "expense"}
                            onChange={e => setType("expense")}
                        />
                        <label htmlFor="type">Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="transaction_amount">Amount</label>
                    <input
                        type="number"
                        name="amount"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                </div>

                {!isLoading && isError && (
                    <p className='error'>There was an error occured</p>
                )}

                <button disabled={isLoading} className='btn' type='submit'>
                    {editMode ? "Update Transaction" : "Add Transaction"}
                </button>
            </form>

            {
                editMode &&
                (<button className="btn cancel_edit" onClick={cancelEditMode}>Cancel Edit</button>)
            }
        </div>
    );
}