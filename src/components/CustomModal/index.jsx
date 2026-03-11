import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/ModalSlice";

const CustomModal = () => {
    const dispatch = useDispatch();
    const { isOpen, title, children, successBtnText, cancelBtnText, onConfirm, onCancel, width, customClassName } = useSelector(state => state.Modal);
    if (!isOpen) return null;
    const handleConfirm = () => {
        if (onConfirm && typeof onConfirm === 'function') {
            onConfirm();
        }
        dispatch(closeModal());
    };

    const handleCancel = () => {
        if (onCancel && typeof onCancel === 'function') {
            onCancel();
        }
        dispatch(closeModal());
    };

    return (
        <div className="fixed inset-0 bg-[#000000a8] flex items-center justify-center z-50">
            <div className={`bg-white rounded-lg p-6  ${width} ${customClassName}`}>
                {title && <h3 className="text-lg font-bold mb-3 ">{title}</h3>}
                <div className="border-b-1 border-[#00000014] mb-2"></div>
                {children && <div className={`mb-6 max-h-[500px] overflow-y-auto`}>{children}</div>}
                <div className="flex gap-4">
                    <button
                        onClick={handleCancel}
                        className="border-1 flex-1 text-[#005B30] px-4 py-2 rounded"
                    >
                        {cancelBtnText}
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="flex-1 bg-[#005B30] text-white px-4 py-2 rounded"
                    >
                        {successBtnText}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CustomModal