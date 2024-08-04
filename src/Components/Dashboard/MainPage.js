import React, { useState, useEffect } from "react";
import { withStyles } from "@mui/styles";
import { financialStyles } from "../../Styles/financialStyles";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PopUpModal from "../GenericComponents/PopUpModal";
import PopUpView from "../GenericComponents/PopUpView";
import { useStores } from "../../stores";

const MainPage = observer((props) => {
  const { classes } = props;
  const { userStore } = useStores();
  const { dashboardData, getDashboardData } = userStore;
  const [isFilterModal, setIsFilterModal] = useState(false);
  const [isViewModal, setViewModal] = useState(false);
  const [isViewModalName, setViewModalName] = useState('');

  useEffect(() => {
    getDashboardData();
  }, [getDashboardData]);

  const handleCloseModal = () => {
    setIsFilterModal(false);
  };

  const handleViewCloseModal = () => {
    setViewModal(false);
  };

  return (
    <>
      <hr />
      <div>
        <div className={classes.cardContainer}>
          {dashboardData && dashboardData.length > 0 ? (
            dashboardData.map((item, index) => (
              <div key={index} className={classes.cardDashboard}>
                <div style={{ marginTop: "2vh" }}>
                  <div className="xxlFont bold">{item.title}</div>
                </div>
                <div style={{ marginTop: "3vh", marginLeft: "1vw" }}>
                  <div className="colFlex">
                    <SaveIcon fontSize="large" style={{ color: "green" }} />
                  </div>
                  <div>
                    <div className="bold xxlFont" style={{ marginTop: "1vh" }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No Data Found...</div>
          )}
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "40px",
          right: "30px",
        }}
      >
        <FilterAltIcon
          style={{ color: "#0080FF", fontSize: "24px" }}
          onClick={() => setIsFilterModal(true)}
        />
        {isFilterModal && (
          <PopUpModal
            open={isFilterModal}
            data={{ isFilterModal: isFilterModal }}
            cancel={handleCloseModal}
          />
        )}
      </div>
      {isViewModal && (
        <PopUpView
          open={isViewModal}
          data={{ ViewModalName: isViewModalName }}
          cancel={handleViewCloseModal}
        />
      )}
    </>
  );
});

const styles = {
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem', // Adjust the gap between cards
  },
  cardDashboard: {
    flex: '1 1 calc(33.333% - 1rem)', // Adjust the width of each card
    boxSizing: 'border-box',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '1rem',
  },
};

export default withStyles(styles, { withTheme: true })(withRouter(MainPage));
