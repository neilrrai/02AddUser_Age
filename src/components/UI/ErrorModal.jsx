import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

function ErrorModel(props) {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onError} />;
  };
  const ModalOverlay = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onError}>Okay</Button>
        </footer>
      </Card>
    );
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onError={props.onError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onError={props.onError}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default ErrorModel;
