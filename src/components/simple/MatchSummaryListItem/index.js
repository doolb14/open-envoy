import { useCallback, useEffect, useState } from "react";
import OEText from "../../basic/OEText";
import * as Icon from "react-feather";
import "./style.css";

const MatchSummaryListItem = ({ item, onGetDetails }) => {
  const [is_expanded, setIsExpanded] = useState(false);
  const [details, setDetails] = useState(null);
  const [error_detail_names, setErrorDetailNames] = useState([]);

  useEffect(() => {
    let detail_names = [];
    if (details) {
      detail_names = details.slice(1).map((d_itm) => d_itm.name);
      detail_names = [...new Set(detail_names)];
      detail_names = detail_names.length <= 1 ? [] : detail_names;
    }
    setErrorDetailNames(detail_names);
  }, [details]);

  useEffect(() => {
    let sum_of_details;
    if (details) {
      sum_of_details = details
        .slice(1)
        .map((d_itm) => d_itm.amount)
        .reduce((a, b) => a + b, 0);
    }
    if (sum_of_details != details?.[0]?.amount) {
      console.error("Sum does not match up");
    }
  }, [details]);

  //   on click to expand item
  const expandDetails = useCallback(() => {
    if (!details) {
      const new_details = onGetDetails(item.id);
      setDetails(new_details);
    }
    setIsExpanded((current_val) => !current_val);
  }, []);
  const highlight_class = item.is_approved
    ? " highlight-green"
    : item.is_approved === false
    ? " highlight-red"
    : "";

  return (
    <div className={"main-container" + highlight_class}>
      <div
        className="item-container"
        onClick={item?.details_available ? expandDetails : null}
      >
        <span className="element">
          <span className="dropdown-icon">
            {item?.details_available ? (
              <Icon.ChevronRight
                size={14}
                style={{ transform: is_expanded ? `rotate(90deg)` : null }}
              />
            ) : (
              <Icon.CornerDownRight size={14} />
            )}
          </span>
          <OEText side_text={item?.info}>{item?.element}</OEText>
        </span>

        <span className="match-item">
          <OEText>{item?.match_item}</OEText>
        </span>

        <span className="amount">
          <OEText className="align-text-right">
            {item?.currency}
            {item?.amount}
          </OEText>
        </span>
        <span className="icon">
          {item?.details_available ? (
            item.is_approved ? (
              <Icon.CheckCircle size={18} color="green" />
            ) : (
              <Icon.AlertTriangle size={18} color="red" />
            )
          ) : null}
        </span>
      </div>

      {is_expanded && details ? (
        <div className={"details-main-container"}>
          {details.map((detail_item, idx) => {
            const has_error = error_detail_names.find(
              (edn) => edn == detail_item?.name
            );
            return (
              <div key={idx} className="detail-item-container">
                <span
                  className={`detail-name ${
                    has_error ? "font-highlight-red" : ""
                  }`}
                >
                  <OEText style={{ marginLeft: 12 }} variant="detail">
                    {detail_item?.name}
                  </OEText>
                </span>
                <span className="detail-description">
                  <OEText style={{ marginLeft: 12 }} variant="detail">
                    {detail_item?.description}
                  </OEText>
                </span>
                <span className="detail-amount">
                  <OEText
                    variant="detail"
                    className={`align-text-right ${
                      has_error ? "font-highlight-red" : ""
                    }`}
                  >
                    {detail_item?.currency}
                    {detail_item?.amount}
                  </OEText>
                </span>
                <span className="icon"></span>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default MatchSummaryListItem;
