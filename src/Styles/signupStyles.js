export const signupStyles = (theme) => ({
  headingSignup: {
    alignSelf: "center",
  },
  header: {
    backgroundColor: theme.palette.darkBlue,
    border: "solid 1px lightgray",
    fontWeight: "600",
    padding: "0 5%",
    color: "white",
    height: "8%",
  },
  profileImage: {
    height: "75px !important",
    width: "75px !important",
  },
  imagePlaceholder: {
    position: "relative",
    cursor: "pointer",
  },
  editIcon: {
    position: "absolute",
    top: "15%",
    right: "10%",
  },
  inputLabel: {
    color: theme.palette.darkGray,
    fontWeight: "600",
  },
  formContainer: {
    padding: "5% 0% !important",
    height: "100%",
    paddingTop: "0 !important",
  },
  formInput: {
    marginBottom: "2vh",
  },
  input: {
    border: "none",
    backgroundColor: "#f3f4f6",
  },
  endAdornment: {
    top: "calc(25% - 14px) !important",
  },
  selectInput: {
    border: "none",
    backgroundColor: "#f3f4f6 !important",
    width: "100%",
    padding: "15px !important",
    paddingRight: "25px !important",
    borderRadius: "5px",
  },
  autoCompleteInput: {
    border: "none",
    backgroundColor: "#f3f4f6 !important",
    width: "100%",
    padding: "10px 15px !important",
    paddingRight: "25px !important",
    borderRadius: "5px",
  },
  select: {
    width: "100%",
    padding: "0 !important",
  },
  menuItem: {
    minHeight: "30px !important",
  },
  buttonSign: {
    width: "100%",
    height: "50px",
    padding: "10px",
    border: "none",
    backgroundColor: "#0094dd",
    color: "white",
    borderRadius: "3px",
    fontWeight: "300",
    cursor: "pointer",
    marginTop: "15px",
    marginBottom: "30px",
  },
});
