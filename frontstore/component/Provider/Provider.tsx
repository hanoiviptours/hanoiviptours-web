import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";
import { useWidth } from "../GlobalFunc";
import { Icon } from "../Icon";
import styles from "./Provider.module.scss";
import ReactModal from "react-modal";
import Login from "../Authen/Login/Login";

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

  const handleOpenModal = () => {
    setModal(true);
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
  const renderModal = useCallback(() => {
    switch (typeModal) {
      case "signIn":
        return <Login />;
      case "signUp":
        return <></>;
      case "changePW":
        return <></>;
      case "resetPW":
        return <></>;
    }
  }, [typeModal]);

  const renderStyle = useCallback(() => {
    switch (typeModal) {
      case "signIn":
        return {
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "7px",
            transition: "opacity 2000ms ease-in-out",
            width: "640px",
            height: "450px",
          },
          overlay: { zIndex: 10 },
        };
      case "signUp":
        return {};
      case "changePW":
        return {};
      case "resetPW":
        return {};
    }
  }, [typeModal]);

  //Main render
  return (
    <AuthContext.Provider
      value={{ modal, handleOpenModal, changeTypeModal, handleOffModal }}
    >
      {children}
      <ReactModal
        isOpen={modal}
        style={renderStyle()}
        onRequestClose={() => {
          handleOffModal();
        }}
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
      </ReactModal>
    </AuthContext.Provider>
  );
};