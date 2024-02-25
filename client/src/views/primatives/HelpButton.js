import React from "react";
import Comments from "../../images/icons/comments";

function HelpButton() {
  return (
    <div className="help-button">
      <button>
        <Comments />
        <span className="supp-text">Need Help?</span>
      </button>
    </div>
  );
}

export default HelpButton;
