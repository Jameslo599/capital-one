import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";

function useSignUp(data, param) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
    });
  const notifySuccess = () =>
    toast.success("Success! Logging in...", {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  const dismissAll = () => toast.dismiss();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dismissAll();
    setIsLoading(true);
    data.userName = data.userName.split(" ").join("");
    try {
      const response = await fetch(`${param}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const confirmation = await response.json();
      const status = await response.status;
      if (status === 200) {
        notifySuccess();
        return navigate(`/home/${confirmation}`);
      }
      if (typeof confirmation === "string") notifyError(confirmation);
      if (typeof confirmation !== "string") {
        for (const error of confirmation) {
          notifyError(`${error.msg}`);
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

export default useSignUp;
