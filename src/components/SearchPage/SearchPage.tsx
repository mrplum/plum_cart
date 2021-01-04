import React from "react";
import Main from "../Main";
import { useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import Button from "@material-ui/core/Button";

const SearchPage = ({
  status,
  toggleViewHandler,
}: {
  status: boolean;
  toggleViewHandler: () => void;
}) => {
  const search = useLocation().search.slice(6);
  const intl = useIntl();
  return (
    <div>
      <Main
        title={intl.formatMessage({ id: "results" }, { search: search })}
        status={status}
        toggleViewHandler={toggleViewHandler}
        search={search}
      />
    </div>
  );
};

export default SearchPage;
