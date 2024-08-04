import React from "react";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@mui/styles";
import { documentStyles } from "../Styles/documentStyles";
import SvgIcon from "./SvgIcon";
import Images from "./Images";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { useStores } from "../stores";
import Loader from "./Loader";
import { roleAccess } from "./utils";
const bounceInAnim = keyframes`${fadeIn}`;
const AnimatedDiv = styled.div`
  animation: 1s ${bounceInAnim};
`;

const NoResults = observer((props) => {
  const { classes, from, type, message, variant } = props;
  const { markListingStore, apiStore, userStore, supervisorStore } =
    useStores();

  const goToDocs = (type) => {
    switch (type) {
      case "review":
        markListingStore.setQcStatus(type);
        props.history.push(`/home/document-api/page/1/review`);
        break;
      case "completed":
        markListingStore.setQcStatus(type);
        props.history.push(`/home/document-api/page/1/completed`);
        break;
      case "creview":
        markListingStore.setQcStatus(type);
        props.history.push(`/home/document-api/page/1/creview`);
        break;
      case "OCR_SUCCESS":
        markListingStore.setOcrStatusFilter("OCR_COMPLETE");
        break;
      case "OCR_FAILED":
        markListingStore.setOcrStatusFilter("OCR_FAILED");
        break;
      case "FEEDBACK":
        markListingStore.setFeedbackFilter("false");
        break;
      case "REJECTED":
        markListingStore.setNonIdentificationFilter(true);
        break;
      case "PASSED":
        markListingStore.setIdentificationFilter(true);
        break;
    }
    markListingStore.getGlobalDocumentList(1);
  };

  const goToUploads = () => {
    props.history.push({
      pathname: `/home/upload-api/page/1/all`,
      state: { openUpload: true },
    });
  };

  if (variant === "noUploads") {
    return (
      <AnimatedDiv className={classes.noResults}>
        <div className="rowFlex flexCenter" style={{ cursor: "default" }}>
          {<SvgIcon src={Images.noResults} style={"cursor: default;"} />}
        </div>
        <div className="lFont" style={{ marginTop: "1VH" }}>
          {roleAccess.admin.findIndex(
            (x) => (userStore.user && userStore.user.role) === x,
          ) > -1 ? (
            <span>Hey! Seems like you have not uploaded any files yet.</span>
          ) : roleAccess.supervisor.findIndex(
              (x) => (userStore.user && userStore.user.role) === x,
            ) > -1 ? (
            <span>Hey! Seems like no files have been uploaded yet.</span>
          ) : (
            <span>
              Hey! Seems like you have not been assigned any files yet.
            </span>
          )}
          <br />
          <br />
          {roleAccess.admin.findIndex(
            (x) => (userStore.user && userStore.user.role) === x,
          ) > -1 ? (
            <span onClick={goToUploads} className="pointer underline">
              Click here to get started
            </span>
          ) : roleAccess.supervisor.findIndex(
              (x) => (userStore.user && userStore.user.role) === x,
            ) > -1 ? (
            <span>Connect with your Admin for more details</span>
          ) : (
            <span>Connect with your Supervisor for more details.</span>
          )}
        </div>
        <br />
      </AnimatedDiv>
    );
  }
  if (props.failed) {
    return (
      <AnimatedDiv className={classes.noResults}>
        <div className="rowFlex flexCenter" style={{ cursor: "default" }}>
          {<SvgIcon src={Images.noResults} style={"cursor: default;"} />}
        </div>
        <div className="lFont" style={{ marginTop: "1VH" }}>
          No results found
        </div>
      </AnimatedDiv>
    );
  }

  if (variant === "batches") {
    if (
      props.reviewFilter === "review" ||
      props.reviewFilter === " " ||
      props.reviewFilter === "all"
    ) {
      if (from === "search") {
        return (
          <div className="rowFlex flexCenter">
            <div>
              We did not find any Batches that match your search criteria
            </div>
          </div>
        );
      } else if (
        props.reviewFilter === "review" ||
        props.reviewFilter === "completed"
      ) {
        return (
          <AnimatedDiv className={classes.noResults}>
            <div className="rowFlex flexCenter" style={{ cursor: "default" }}>
              {<SvgIcon src={Images.noResults} style={"cursor: default;"} />}
            </div>
            <div className="lFont" style={{ marginTop: "1VH" }}>
              No results found
            </div>
          </AnimatedDiv>
        );
      } else {
        return (
          <AnimatedDiv className={classes.noResults}>
            <div className="rowFlex flexCenter" style={{ cursor: "default" }}>
              {<SvgIcon src={Images.noResults} style={"cursor: default;"} />}
            </div>
            <div className="lFont" style={{ marginTop: "1VH" }}>
              {roleAccess.admin.findIndex(
                (x) => (userStore.user && userStore.user.role) === x,
              ) > -1 ? (
                <span>
                  Hey! Seems like you have not uploaded any files yet.
                </span>
              ) : roleAccess.supervisor.findIndex(
                  (x) => (userStore.user && userStore.user.role) === x,
                ) > -1 ? (
                <span>Hey! Seems like no files have been uploaded yet.</span>
              ) : (
                <span>
                  Hey! Seems like you have not been assigned any files yet.
                </span>
              )}
              <br />
              <br />
              {roleAccess.admin.findIndex(
                (x) => (userStore.user && userStore.user.role) === x,
              ) > -1 ? (
                <span onClick={goToUploads} className="pointer underline">
                  Click here to get started
                </span>
              ) : roleAccess.supervisor.findIndex(
                  (x) => (userStore.user && userStore.user.role) === x,
                ) > -1 ? (
                <span>Connect with your Admin for more details</span>
              ) : (
                <span>Connect with your Supervisor for more details.</span>
              )}
            </div>
            <br />
          </AnimatedDiv>
        );
      }
    }
    return (
      <AnimatedDiv className={classes.noResults}>
        <div className="rowFlex flexCenter" style={{ cursor: "default" }}>
          {<SvgIcon src={Images.noResults} style={"cursor: default;"} />}
        </div>
        <div className="lFont" style={{ marginTop: "1VH" }}>
          No results found!
        </div>
        <br />
      </AnimatedDiv>
    );
  }

  if (variant === "document") {
    const { feedbackFilesPresent, processing, qcType } = props;
    const {
      identificationFilter,
      qcStatus,
      nonIdentificationFilter,
      feedbackFilter,
      ocrStatusFilter,
    } = markListingStore;
    let icon = "noResults";
    let text =
      from === "search"
        ? "We did not find any Documents that match your search criteria"
        : "No Results Found";
    if (processing)
      text = (
        <div className="rowFlex flexCenter">
          <div>Please wait for OCR processing to complete</div>
        </div>
      );
    else if (
      qcType === "supervisor" &&
      (supervisorStore.qcStatus === "completed" ||
        supervisorStore.qcStatus === "creview")
    )
      text = (
        <div className="rowFlex flexCenter">
          <div>No results found.</div>
        </div>
      );
    else if (qcType === "supervisor" && supervisorStore.qcStatus === "review")
      text = (
        <div className="colFlex flexCenter">
          Hey! There are no files pending for your review at the moment.
        </div>
      );
    else if (props.getBatchDetails("filesUploadedCount") == 0)
      text = (
        <div className="rowFlex flexCenter">
          <div>
            Oops! Looks like all files for this batch have been deleted.
          </div>
        </div>
      );
    else if (ocrStatusFilter === "OCR_FAILED")
      text = (
        <div className="rowFlex flexCenter">
          <div>
            Looks good! All your files were recognized successfully. Go to
            &nbsp;
          </div>
          <div
            className="underline pointer"
            onClick={() => goToDocs("OCR_SUCCESS")}
          >
            {" "}
            OCR Success
          </div>
        </div>
      );
    /* else if (qcStatus === 'review' && props.getBatchDetails('classificationFilesReviewed') < 1 && props.getBatchDetails('reviewFilesCompleted') < 1)
            text = <div className='rowFlex flexCenter'>
                <div>Oops! No files here. Go to&nbsp;</div>
                <div className='underline pointer' onClick={() => goToDocs('OCR_FAILED')}> OCR Failure</div>
            </div>*/ else if (
      qcStatus === "creview" &&
      props.getBatchDetails("reviewFilesPending") >= 1
    )
      text = (
        <div className="rowFlex flexCenter">
          <div>Oops! No files here. Go to&nbsp;</div>
          <div className="underline pointer" onClick={() => goToDocs("review")}>
            {" "}
            Review Pending
          </div>
        </div>
      );
    else if (
      qcStatus === "creview" &&
      props.getBatchDetails("reviewFilesCompleted") >= 1 &&
      props.getBatchDetails("reviewFilesPending") < 1
    )
      text = (
        <div className="rowFlex flexCenter">
          <div>
            Looks like you have reviewed classification for all files. Go
            to&nbsp;
          </div>
          <div
            className="underline pointer"
            onClick={() => goToDocs("completed")}
          >
            {" "}
            Review Completed
          </div>
        </div>
      );
    else if (
      qcStatus === "creview" &&
      props.getBatchDetails("reviewFilesPending") >= 1 &&
      props.getBatchDetails("reviewFilesCompleted") < 1
    )
      text = (
        <div className="rowFlex flexCenter">
          <div>Oops! No files here. Go to&nbsp;</div>
          <div className="underline pointer" onClick={() => goToDocs("review")}>
            {" "}
            Review Pending
          </div>
        </div>
      );
    else if (
      qcStatus === "creview" &&
      props.getBatchDetails("reviewFilesPending") >= 1 &&
      props.getBatchDetails("reviewFilesCompleted") >= 1
    )
      text = (
        <div className="rowFlex flexCenter">
          <div>Oops! No files here. Go to&nbsp;</div>
          <div className="underline pointer" onClick={() => goToDocs("review")}>
            {" "}
            Review Pending
          </div>
          &nbsp;or&nbsp;
          <div
            className="underline pointer"
            onClick={() => goToDocs("completed")}
          >
            {" "}
            Review Completed
          </div>
        </div>
      );
    /*  else if (qcStatus === 'creview' && props.getBatchDetails('reviewFilesCompleted') < 1 && props.getBatchDetails('reviewFilesPending') < 1)
            text = <div className='rowFlex flexCenter'>
                <div>Oops! No files here. Go to&nbsp;</div>
                <div className='underline pointer' onClick={() => goToDocs('OCR_FAILED')}> OCR Failure</div>
            </div>*/ else if (
      qcStatus === "review" &&
      props.getBatchDetails("classificationFilesReviewed") >= 1
    )
      text = (
        <div className="rowFlex flexCenter">
          <div>
            Looks like you have reviewed classification for all files. Go
            to&nbsp;
          </div>
          <div
            className="underline pointer"
            onClick={() => goToDocs("creview")}
          >
            {" "}
            Classification Reviewed
          </div>
        </div>
      );
    else if (
      qcStatus === "review" &&
      props.getBatchDetails("reviewFilesCompleted") >= 1
    )
      text = (
        <div className="rowFlex flexCenter">
          <div>
            Looks good! All your files were reviewed successfully. Go to&nbsp;
          </div>
          <div
            className="underline pointer"
            onClick={() => goToDocs("completed")}
          >
            {" "}
            Review Completed
          </div>
        </div>
      );
    else if (
      qcStatus === "review" &&
      props.getBatchDetails("reviewFilesCompleted") > 0
    )
      text = (
        <div className="rowFlex flexCenter">
          <div>
            Looks good! All your files were reviewed successfully. Go to &nbsp;
          </div>
          <div
            className="underline pointer"
            onClick={() => goToDocs("completed")}
          >
            {" "}
            Review Completed
          </div>
        </div>
      );
    else if (
      qcStatus === "completed" &&
      props.getBatchDetails("reviewFilesPending") > 0
    )
      text = (
        <div className="rowFlex flexCenter">
          <div>
            Looks like none of your files have been reviewed yet. Go to &nbsp;
          </div>
          <div className="underline pointer" onClick={() => goToDocs("review")}>
            {" "}
            Review Pending
          </div>
        </div>
      );
    else if (
      qcStatus === "completed" &&
      props.getBatchDetails("reviewFilesPending") == 0 &&
      props.getBatchDetails("classificationFilesReviewed") > 0
    )
      text = (
        <div className="rowFlex flexCenter">
          <div>
            Looks like none of your files have been reviewed yet. Go to &nbsp;
          </div>
          <div
            className="underline pointer"
            onClick={() => goToDocs("creview")}
          >
            {" "}
            Classification Reviewed
          </div>
        </div>
      );
    /*  else if (qcStatus === 'completed' && props.getBatchDetails('reviewFilesPending') == 0 && props.getBatchDetails('classificationFilesReviewed') === 0)
            text = <div className='rowFlex flexCenter'>
                <div>Oops! No files here. Go to&nbsp;</div>
                <div className='underline pointer' onClick={() => goToDocs('OCR_FAILED')} >OCR Failure</div>
            </div>*/ else if (
      qcStatus === "review" &&
      ocrStatusFilter === "OCR_FAILED"
    )
      text = (
        <div className="rowFlex flexCenter">
          <div>
            Looks good! All your files were recognized successfully. Go to
            &nbsp;
          </div>
          <div
            className="underline pointer"
            onClick={() => goToDocs("OCR_SUCCESS")}
          >
            {" "}
            OCR Success
          </div>
        </div>
      );
    else if (
      identificationFilter === " " &&
      nonIdentificationFilter === " " &&
      ocrStatusFilter === "OCR_FAILED"
    )
      text = (
        <div className="rowFlex flexCenter">
          <div>
            Looks good! All your files were recognized successfully. Go to
            &nbsp;
          </div>
          <div
            className="underline pointer"
            onClick={() => goToDocs("OCR_SUCCESS")}
          >
            {" "}
            OCR Success
          </div>
        </div>
      );
    else if (
      identificationFilter === " " &&
      nonIdentificationFilter === " " &&
      ocrStatusFilter === "OCR_FAILED"
    )
      text = (
        <div className="rowFlex flexCenter">
          <div>
            Looks good! All your files were recognized successfully. Go to
            &nbsp;
          </div>
          <div
            className="underline pointer"
            onClick={() => goToDocs("OCR_SUCCESS")}
          >
            {" "}
            OCR Success
          </div>
        </div>
      );
    /*   else if (identificationFilter === ' ' && nonIdentificationFilter === ' ' && ocrStatusFilter === 'OCR_COMPLETE') {
            text = <div className='rowFlex flexCenter'>
                <div>Oops! No files here. Go to&nbsp;</div>
                <div className='underline pointer' onClick={() => goToDocs('OCR_FAILED')} >OCR Failure</div>
            </div>
        }*/ else if (
      nonIdentificationFilter === true &&
      feedbackFilter === "true" &&
      feedbackFilesPresent
    )
      text = (
        <div className="rowFlex flexCenter">
          <div>
            Hmm! Seems none of the Feedback Files has been resolved so far. Go
            to&nbsp;
          </div>
          <div
            className="underline pointer"
            onClick={() => goToDocs("FEEDBACK")}
          >
            {" "}
            Feedback Files
          </div>
        </div>
      );
    else if (identificationFilter === true)
      text = (
        <div className="rowFlex flexCenter">
          <div>
            {" "}
            Looks like none of the files passed the Configuration rules. Go
            to&nbsp;
          </div>
          <div
            className="underline pointer"
            onClick={() => goToDocs("REJECTED")}
          >
            {" "}
            Rejected Files
          </div>
        </div>
      );
    else if (
      nonIdentificationFilter === true &&
      feedbackFilter === "false" &&
      feedbackFilesPresent
    )
      text = (
        <div className="rowFlex flexCenter">
          <div>Terrific! All files in this batch Passed. Go to&nbsp;</div>
          <div className="underline pointer" onClick={() => goToDocs("PASSED")}>
            {" "}
            Passed Files
          </div>
        </div>
      );
    else if (
      nonIdentificationFilter === true &&
      feedbackFilter === "true" &&
      !props.rejectedFiles
    )
      text = (
        <div className="rowFlex flexCenter">
          <div>
            Super! All files in this batch Passed, so All's Good. Go to&nbsp;
          </div>
          <div className="underline pointer" onClick={() => goToDocs("PASSED")}>
            Passed Files.{" "}
          </div>
        </div>
      );
    /*  else if (nonIdentificationFilter === true && feedbackFilter === 'true' && feedbackFilesPresent)
              text = <div>
                  <div>Hmm! Seems none of the Feedback Files has been resolved so far. </div>
                  <br />
                  <div className='underline pointer'>Go to Feedback Files</div>
              </div>*/
    return (
      <AnimatedDiv className={classes.noResults}>
        <div className="rowFlex flexCenter">
          {processing ? <Loader /> : <SvgIcon src={Images.noResults} />}
        </div>
        <div className="lFont" style={{ marginTop: "1VH" }}>
          {text}
        </div>
        <br />
      </AnimatedDiv>
    );
  }

  if (variant === "api") {
    return (
      <AnimatedDiv className={classes.noResults}>
        <div className="rowFlex flexCenter">
          {" "}
          <SvgIcon src={Images.noResults} />
        </div>
        <div className="lFont">
          <div>
            <div>
              You have not created a batch for Training yet. Let's quickly
              create one!{" "}
            </div>
            <br />
            <div
              className="underline pointer"
              onClick={() => props.history.push("/home/api/logs/page/1")}
            >
              Go to API Logs
            </div>
          </div>
        </div>
        <br />
      </AnimatedDiv>
    );
  }

  return (
    <AnimatedDiv className={classes.noResults}>
      {message ? null : (
        <div className="rowFlex flexCenter">
          {" "}
          <SvgIcon src={Images.noResults} />
        </div>
      )}
      <br />
      <div className="lFont">{message ? message : "No Results Found"}</div>
      <br />
      {from === "search" ? (
        <div className="sFont" style={{ fontWeight: "400" }}>
          {`We did not find any ${type}`}
          <br /> that match this search criteria
        </div>
      ) : null}
    </AnimatedDiv>
  );
});

export default withStyles(documentStyles, { withTheme: true })(
  withRouter(NoResults),
);
