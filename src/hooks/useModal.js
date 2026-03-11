import { useDispatch } from "react-redux";
import { openModal, closeModal } from "../store/ModalSlice";

export const useModal = () => {
  const dispatch = useDispatch();

  const showModal = (config) => {
    dispatch(
      openModal({
        title: config.title || "",
        children: config.children || null,
        successBtnText: config.successBtnText || "Confirm",
        cancelBtnText: config.cancelBtnText || "Cancel",
        onConfirm: config.onConfirm,
        onCancel: config.onCancel,
        width: config.width || "max-w-sm", // e.g., 'max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-2xl'
        customClassName: config.customClassName || "",
      })
    );
  };

  const hideModal = () => {
    dispatch(closeModal());
  };

  return { showModal, hideModal };
};
