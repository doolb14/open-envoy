import OEText from "../../basic/OEText";
import MatchSummaryListItem from "../../simple/MatchSummaryListItem";
import "./style.css";
import * as Icon from "react-feather";

const Header = () => (
  <div className="match-header">
    <span className="element">
      <OEText className="align-text-left" variant="header">
        Elements
      </OEText>
    </span>
    <span className="match-item">
      <OEText className="align-text-left" variant="header">
        Match items
      </OEText>
    </span>
    <span className="amount">
      <OEText className="align-text-right" variant="header">
        Amount
      </OEText>
    </span>
    <span className="icon">
      <Icon.CheckCircle size={16} />
    </span>
  </div>
);

const MatchSummary = ({ data, onGetDetails }) => {
  return (
    <div className="match-container">
      <div className="heading-container">
        <Icon.Terminal size={16} style={{ marginRight: 8 }} />
        <OEText variant="title">Match summary</OEText>
      </div>
      <Header />
      {data.map((item) => (
        <>
          <MatchSummaryListItem
            key={item?.id}
            item={item}
            onGetDetails={onGetDetails}
          />
          <div className="break-line" />
        </>
      ))}
    </div>
  );
};

export default MatchSummary;
