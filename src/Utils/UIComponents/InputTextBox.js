/*
 InputTextBox component
*/
import { withRouter } from "react-router-dom";
import React from "react";
import { inject, observer } from "mobx-react";
import { withStyles } from "@mui/styles";
import { buttonStyles } from "../Styles/commonStyles";
@inject("userStore", "commonStore")
@observer
class InputTextBox extends React.Component {
  render() {
    const { classes, placeholder, variant, width } = this.props;
    return (
      <TextField
        className={classes.c}
        id={index + "feedback"}
        placeholder={placeholder}
        multiline
        autoFocus={true}
        maxRows="5"
        margin="normal"
        variant="outlined"
        fullWidth
        value={
          this.props.dtStore.modelBluePrint.nodes[nodeIndex]
            ? this.props.dtStore.modelBluePrint.nodes[nodeIndex].values[0]
            : ""
        }
        onChange={(e) => this.onChange(e.target.value)}
        InputProps={{
          classes: {
            input: classes.input,
            root: classes.root,
            multiline: classes.multiline,
            notchedOutline: classes.multiline,
          },
        }}
      />
    );
  }
}
export default withStyles(buttonStyles, { withTheme: true })(
  withRouter(InputTextBox),
);
