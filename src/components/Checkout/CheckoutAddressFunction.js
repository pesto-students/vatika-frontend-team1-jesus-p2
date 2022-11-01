import { notification } from "antd";

export const addedAddress = (statusCode, form) => {
  if (statusCode === 201) {
    notification.error({
      message: "Address Already Saved",
      placement: "bottom",
      duration: 1.5,
    });
  } else {
    notification.success({
      message: "Address Saved Successfully",
      placement: "bottom",
      duration: 1.5,
    });
    form.resetFields();
  }
};


export const moreThenThreeAddress = () => {
    notification.error({
      message: "List Full , Delete Few Address !",
      placement: "bottom",
      duration: 1.5,
    });
  };


