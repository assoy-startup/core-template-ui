export const homeStyles = (theme) => ({
  activeTab: {
    color: theme.palette.blue,
    backgroundColor: "rgba(0, 188, 213, 0.2)",
  },
  tab: {
    cursor: "pointer",
    fontSize: "10px",
    borderRadius: "8px",
    padding: "4px 4px",
  },
  card: {
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    padding: "1vh 1vw",
    marginTop: "1vh",
    borderRadius: "6px",
    border: "solid 1px #DEE1E6FF",
  },
  donutText: {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  donutCompletion: {
    top: "50%",
    fontSize: "8px",
  },
  donutPercentage: {
    top: "60%",
    fontSize: "12px",
  },
  donutStat: {
    top: "75%",
    fontSize: "12px",
  },
  overallContainer: {
    margin: "0 1vw",
    marginTop: "2vh",
    display: "flex",
    width: "100%",
  },
  heading: {
    color: theme.palette.blue,
    border: `solid 1px #9095A0FF`,
    borderRadius: "4px",
    fontWeight: "500",
    width: "fit-content",
    padding: "1.5vh 1vw",
  },
  noticeCard: {
    border: `solid 2px ${theme.palette.blue}`,
    padding: "1.5vh 1vw",
    borderRadius: "4px",
    marginTop: "1.5vh",
    cursor: "pointer",
    position: "relative",
  },
  downloadBtn: {
    position: "absolute",
    right: "10px",
    top: "10px",
  },
  overallSection: {
    marginRight: "1vw",
    width: "25%",
  },

  //Geographical

  //kpi
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gridRowGap: "0px",
    gridColumnGap: "150px",
    marginLeft: "270px",
    marginTop: "-80px",
  },
  card2: {
    display: "flex",
    marginBottom: "-80px",
    width: "400px",
    height: "290px",
    padding: "10px",
    marginTop: "100px",
    marginLeft: "-220px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    overflow: "auto",
    textAlign: "left",
    boxShadow: "0 2px 4px rgba(31, 30, 30, 0.356)",
  },
  headings: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr 1fr",
  },
  navTab: {
    display: "flex",
  },
  p: {
    fontSize: "14px",
  },
  contentChangingTab: {
    cursor: "pointer",
    display: "flex",
    justifySelf: "right",
    alignItems: "center",
    paddingLeft: "7px",
    paddingRight: "7px",
    borderRadius: "20px",
  },
  contentChangingTabActive: {
    border: "1px solid rgb(15, 173, 221)",
    color: "rgb(15, 173, 221)",
    backgroundColor: "rgb(218, 246, 255)",
    display: "flex",
    alignItems: "center",
    paddingLeft: "7px",
    paddingRight: "7px",
  },
  chartLegendContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "180px",
    marginTop: "-100px",
    fontSize: "12px",
  },
  chartLegendData: {
    display: "flex",
    alignItems: "center",
  },
  barChart: {
    marginLeft: "-30px",
  },
  yAxis: {
    fontSize: "10px",
  },
  xAxis: {
    fontSize: "10px",
    padding: "0px",
  },
});
