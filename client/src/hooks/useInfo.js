import { useState } from "react";
import { toast, Bounce } from "react-toastify";

function useInfo(data, param, callback) {
  const [isLoading, setIsLoading] = useState(false);
  const notifyError = (message) =>
    toast.error(message, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      toastId: "residentialError",
    });
  const notifySuccess = () =>
    toast.success("Updated!", {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      toastId: "residentialSuccess",
    });
  const dismissAll = () => toast.dismiss();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dismissAll();
    setIsLoading(true);

    try {
      const response = await fetch(`${param}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const confirmation = await response.json();
      const status = await response.status;
      console.log(status);
      if (status === 200) {
        notifySuccess();
        callback();
      } else {
        if (confirmation.msg) {
          for (const error of confirmation) {
            notifyError(`${error.msg}`);
          }
        } else {
          notifyError(confirmation);
        }
      }
    } catch (e) {
      notifyError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleSubmit };
}

export default useInfo;
