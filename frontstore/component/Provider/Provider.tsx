import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import Modal from "react-modal";
import { useWidth } from "../GlobalFunc";
import { Icon } from "../Icon";
import styles from "./Provider.module.scss";

const AuthContext = createContext<any>(undefined);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  //Define constant
  const [modal, setModal] = useState<boolean>(false);
  const [typeModal, setTypeModal] = useState<
    "signIn" | "signUp" | "changePW" | "resetPW" | ""
  >("");

  const handleOpenModal = (open: boolean) => {
    setModal(open);
  };

  const handleOffModal = () => {
    setModal(false);
  };

  const changeTypeModal = (
    value: "signIn" | "signUp" | "changePW" | "resetPW"
  ) => {
    return setTypeModal(value);
  };

  //Function to render
  const renderModal = () => {
    switch (typeModal) {
      case "signIn":
        return <></>;
      case "signUp":
        return <></>;
      case "changePW":
        return <></>;
      case "resetPW":
        return <></>;
    }
  };

  //Main render
  return (
    <AuthContext.Provider
      value={{ modal, handleOpenModal, changeTypeModal, handleOffModal }}
    >
      {children}
      <Modal
        isOpen={modal}
        onRequestClose={() => {
          handleOffModal();
        }}
        portalClassName={styles.body}
        style={
          useWidth() > 768
            ? {
                overlay: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(255, 255, 255, 0.75)",
                  zIndex: "3",
                },
                content: {
                  top: "50%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  marginRight: "-10%",
                  transform: "translate(-50%, -50%)",
                  maxWidth: "450px",
                  height: "Max-content",
                  maxHeight: "90%",
                  zIndex: "3",
                },
              }
            : {
                overlay: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(255, 255, 255, 0.75)",
                  zIndex: "3",
                },
                content: {
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  maxHeight: "95vh",
                  zIndex: "3",
                },
              }
        }
      >
        <div className={["row justify-end", styles.exitIcon].join(" ")}>
          <Icon
            onClick={() => {
              handleOffModal();
            }}
            icon={"faX"}
            style={{ cursor: "pointer" }}
          />
        </div>
        {renderModal()}
      </Modal>
    </AuthContext.Provider>
  );
};
