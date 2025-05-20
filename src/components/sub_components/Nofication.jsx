import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (message) => toast(message);

const Notification = () => {
  return <ToastContainer />;
};

export default Notification;
