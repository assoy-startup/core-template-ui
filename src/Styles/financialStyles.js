import { background, borderRadius, boxShadow, flexDirection, height, justifyContent, padding, width, zIndex } from "@xstyled/styled-components";

export const financialStyles = (theme) => ({
  
  stickyTop: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    zIndex: 110,
    padding: '10px 0',
  },
  tableContainer: {
    height: 'auto',
    overflowY: 'auto',
  },
  header: {
    backgroundColor: 'white',
    zIndex: 110,
    paddingBottom: '10px',
    marginBottom: '20px',
  },
    stickyHeader: {
        backgroundColor:'primary',
        position: 'sticky',
        top: 0,
        zIndex: 1,
    },
    cardDashboard: {
        borderRadius: "1vh",
        boxShadow: "rgba(0,0,0,0.20) 0px 3px 6px",
        padding: "1vh 1vw",
        marginTop: "3vh",
        border: "solid 0.5px grey",
        height: "18vh",
        width: "30vw", 
        // [theme.breakpoints.up('sm')]: {
        //   width: "48vw", // width for small devices and up
        // },
        // [theme.breakpoints.up('md')]: {
        //   width: "10vw", // width for medium devices and up
        // },
        // [theme.breakpoints.up('lg')]: {
        //   width: "20vw", // width for large devices and up
        // },
        // [theme.breakpoints.up('xl')]: {
        //   width: "20vw", // width for extra-large devices and up
        // },
      },
card:{
    borderRadius:`1vh ! important`,
    boxShadow:"rgba(0,0,0,0.20) 0px 3px 6px",
    padding:"1vh 1vw",
    marginTop:"3vh",
    border:"solid 0.5px #dee2e6",
  
},
lgDialog:{
    width:"80%",
    height:"42%",
    boxShadow:"0 0 87px 0 rgba(71,71,71,0.2)",
    border:"solid 1px rgba(0,0,0,0.1)",
    borderRadius:"10px"
},
lgStockDialog:{
    width:"80%",
    height:"24vh",
    boxShadow:"0 0 87px 0 rgba(71,71,71,0.2)",
    border:"solid 1px rgba(0,0,0,0.1)",
    borderRadius:"10px"
},
lgDialogOrdersView:{
    width:"100%",
    height:"80%",
    boxShadow:"0 0 87px 0 rgba(71,71,71,0.2)",
    border:"solid 1px rgba(0,0,0,0.1)",
    borderRadius:"10px"
  
},
smDialogOrdersView:{
    width:"20%",
    height:"30%",
    boxShadow:"0 0 87px 0 rgba(71,71,71,0.2)",
    border:"solid 1px rgba(0,0,0,0.1)",
    borderRadius:"10px"
},
tableContainer:{
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
},
table:{
  width: "45%",
},
branchCell:{
  background:`white`
},
tbl_row_color:{
  background:`#f7f7f7`
},
tableFooterCell:{
  padding:'0 ! important',
  zIndex:'1'
}
})