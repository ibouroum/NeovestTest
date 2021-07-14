import React, {  useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
const SnackbarComponent = (props) => {
  const { open, message, status } = props;
  const [state, setState] = React.useState({
    isOpen: open,
    vertical: "top",
    horizontal: "center",
  });
  const { isOpen, vertical, horizontal } = state;
  useEffect(() => {
    setState({ ...state, isOpen: open });
  }, [open]);

  const handleClose = () => {
    setState({ ...state, isOpen: false });
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={isOpen}
        onClose={handleClose}
        autoHideDuration="5000"
      >
        <MuiAlert onClose={handleClose} severity={status}>
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};
export default SnackbarComponent;
