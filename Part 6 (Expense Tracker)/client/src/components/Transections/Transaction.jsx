import { useDispatch } from "react-redux";
import deleteImage from "../../assets/delete.svg";
import editImage from "../../assets/edit.svg";
import { editActive, removeTransaction } from "../../features/transaction/transactionSlice";

export default function Transaction({ transaction }) {
    const { amount, id, name, type } = transaction || {}

    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(editActive(transaction));
    };
    const handleDelete = () => {
        dispatch(removeTransaction(id));
    };

    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {amount}</p>
                <button className="link">
                    <img alt="Edit" className="icon" src={editImage} onClick={handleEdit} />
                </button>
                <button className="link">
                    <img alt="Delete" className="icon" src={deleteImage} onClick={() => handleDelete(id)} />
                </button>
            </div>
        </li>
    );
}