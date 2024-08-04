import React, { useState,useEffect  } from "react";
import { withStyles } from "@mui/styles";
import { financialStyles } from "../../Styles/financialStyles";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { useStores } from "../../stores";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogTitle, Tabs, Tab } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import CloseIcon from '@mui/icons-material/Close';
import { Row, Col } from "react-bootstrap";
import { Table, TableContainer, TableCell, TableBody, TableRow, Paper, TableFooter, TablePagination,Grid  } from "@mui/material";


const PopUpTypeAdd = observer((props) => {
    const { classes } = props;
    const { stockStore, commonStore ,userStore } = useStores();
    const { inModalTypeAddProgress } = stockStore;
    const {inProgressGetmodalsList ,modelTypes,modalTypeEditId}=userStore;
    const [typeName, setTypeName] = useState('');
    const [modalCategory, setModalCategory] = useState(2);
    const [errors, setErrors] = useState({});
    const [currentTab, setCurrentTab] = useState(0); // 0 for Create, 1 for View

    useEffect(() => {
      if(modalTypeEditId!="" && modalTypeEditId!=null){

      }else{
        userStore.getModelTypes(modalCategory);
      }
    }, [modalCategory]);

    const handleChange = (event) => {
        setTypeName(event.target.value);
    };

    const handleClear = () => {
        setTypeName('');
        setModalCategory(2);
    };

    const modalCategories = [{"category":"Small","value":1},{"category":"Large","value":2}];

    const handleAddTypeModal = () => {
        const formData = {
            typeName,
            modalCategory
        };

        const newErrors = {};
        if (!formData.typeName) newErrors.typeName = "Modal Type is required";
        if (!formData.modalCategory) newErrors.modalCategory = "Modal Category is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            stockStore.addModalType(typeName, modalCategory).then((data) => {
                if (!inModalTypeAddProgress && data && data.status === "success") {
                    commonStore.handleOpenSnackBar("Module Type Created Successfully...!");
                    handleClear();
                    props.cancel();
                } else if (data && data.message) {
                    commonStore.handleOpenSnackBar(`Module Type ${data.message}..!`, "error");
                }
            });
        }
    };

    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    const handleModalTypeEdit=(value)=>{
      console.log("handleModalTypeEdit",value);
      setCurrentTab(0);
    }

    return (
        <Dialog
        disableEscapeKeyDown={true}
        classes={{ paper: classes.lgDialog }}
        open={props.open}
        BackdropProps={{ classes: { root: classes.backdrop } }}
        onClose={props.cancel}
      >
        <DialogTitle className={classes.dialogHeading}>
          <div className="rowFlex spaceBetween">
            <div>Create</div>
            <div><CloseIcon onClick={props.cancel} /></div>
          </div>
        </DialogTitle>
        <DialogContent>
          <div>
            <div className="rowFlex spaceEvenly">
              <FormControl>
                <hr />
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={modalCategory}
                  onChange={(e) => setModalCategory(e.target.value)}
                >
                  {modalCategories.map((category) => (
                    <FormControlLabel
                      key={category.value}
                      value={category.value.toString()} // Ensure value is string
                      control={<Radio />}
                      label={category.category}
                    />
                  ))}
                </RadioGroup>
                {errors.modalCategory && <p style={{ color: 'red' }}>{errors.modalCategory}</p>}
              </FormControl>
            </div>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={4}>
                <TextField
                  id="standard-basic"
                  label="Type Name"
                  variant="standard"
                  type="text"
                  value={typeName}
                  onChange={handleChange}
                  error={!!errors.typeName}
                  helperText={errors.typeName}
                  fullWidth
                />
              </Grid>
            </Grid>
            <hr />
            <div className="rowFlex spaceEvenly">
              <div><Button variant="contained" onClick={props.cancel}>Cancel</Button></div>
              <div><Button variant="contained" onClick={handleAddTypeModal}>{modalTypeEditId!="" && modalTypeEditId!=null ? "Update" : "Add"}</Button></div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
    );
});

export default withStyles(financialStyles, { withTheme: true })(
    withRouter(PopUpTypeAdd)
);
