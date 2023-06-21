import { message } from "antd";

export const successMessage = (description) => {
  message.success(`${description}`);
};

export const errorMessage = (description) => {
  message.error(`${description}`);
};
export const infoMessage = (description) => {
  message.info(`${description}`);
};
