import React, { useState, useCallback, useEffect } from "react";
import { observer } from "mobx-react";
import { styled } from "@mui/material/styles";
import { withRouter } from "react-router-dom";
import { withStyles } from "@mui/styles";
import { uploadStyles } from "../Styles/uploadStyles";
import { useStores } from "../stores";
import SvgIcon from "../Utils/SvgIcon";
import Images from "../Utils/Images";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Moment from "moment";
import Tooltip from "@mui/material/Tooltip";
import MiniLoader from "react-loader-spinner";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import update from "immutability-helper";
import Skeleton from "@mui/material/Skeleton";
import { dashboardStyles } from "../Styles/dashboardStyles";
import { TableFooter } from "@mui/material";
import Pagination from "../Components/GenericComponents/Pagination";
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const bucketData = [1, 2, 3];
const TableSkeleton = observer((props) => {
  //Initialising state variables
  const { classes, headers, from, equalWidth } = props;
  const [rowFocus, setrowFocus] = useState(0);

  //Mobx store
  const { documentListStore, commonStore } = useStores();

  const renderPagination1 = () => {
    return (
      <div className="sFont rowFlex">
        <div className="colFlex flexCenter">
          <Skeleton variant="rect" width={100} height={13} />
        </div>
      </div>
    );
  };

  const renderTableData = (row, header) => {
    switch (header) {
      case "branch":
        return (
          <Skeleton variant="rect">
            <div className="rowFlex">
              <div>
                <div className="tooltip-container">
                  <div
                    className={` branchcode-text blackFont bold xlFont `}
                  ></div>
                  {/* Add the tooltip */}
                  <span className="tooltip-text"></span>
                </div>
                <div className="xlFont"></div>
              </div>
            </div>
          </Skeleton>
        );
      case "download":
        return (
          <Skeleton variant="rect">
            <SvgIcon src={Images.attachment} />
          </Skeleton>
        );
      case "action":
        return (
          <Skeleton variant="rect">
            <div className={classes.processBtn}>Process</div>
          </Skeleton>
        );
      case "name":
        return (
          <Skeleton variant="rect">
            <div className={classes.rowLink}>{"BATCH_82482"}</div>
          </Skeleton>
        );
      case "timeElapsed":
        return (
          <Skeleton variant="rect">
            <div className={classes.rowLink}>{"BATCH_82482"}</div>
          </Skeleton>
        );
      default:
        return <Skeleton variant="rect"></Skeleton>;
    }
  };

  const renderUploadButton = () => {
    return (
      <Skeleton variant="rect">
        <div className="colFlex flexCenter">
          <div className={`rowFlex ${classes.uploadButton}`}>
            <SvgIcon src={Images.upload} />
            &nbsp;&nbsp;
            <div className="colFlex flexCenter">Upload Documents</div>
          </div>
        </div>
      </Skeleton>
    );
  };

  const renderPagination = () => {
    return (
      <div className={`sFont rowFlex flexCenter ${classes.tableFooter}`}>
        <Skeleton variant="rect" width={100}>
          <Pagination
            // onPageChange={(page) => goToPage(page)}
            totalCount={0}
            currentPage={1}
            pageSize={10}
          />
        </Skeleton>
      </div>
    );
  };

  return (
    <TableContainer
      elevation={0}
      component={Paper}
      style={{ height: "100%", borderBottom: "none" }}
    >
      <Table
        aria-label="simple table"
        stickyHeader
        style={{
          borderBottom: props.totalCount > 10 ? "none" : "solid 1px lightGray",
        }}
      >
        {
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={row}>
                {headers.map((header) => (
                  <TableCell
                    classes={{ root: classes.branchCell }}
                    align="left"
                    style={{ width: "80%" }}
                  >
                    {renderTableData(row, header)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        }
        <TableFooter>
          <TableCell classes={{ footer: classes.tableFooterCell }} colSpan={4}>
            {" "}
            {renderPagination()}
          </TableCell>
        </TableFooter>
      </Table>
    </TableContainer>
  );
});

export default withStyles(dashboardStyles, { withTheme: true })(
  withRouter(TableSkeleton),
);
