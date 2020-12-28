import React from "react";
import Main from "../Main";
import { useLocation } from "react-router-dom";
import { useIntl } from "react-intl";

const SearchPage = ({
  status,
  toggleViewHandle,
}: {
  status: boolean;
  toggleViewHandle: () => void;
}) => {
  const search = useLocation().search.slice(6);
  const intl = useIntl();
  return (
    <div>
      <Main
        title={intl.formatMessage({ id: "results" }, { search: search })}
        status={status}
        toggleViewHandle={toggleViewHandle}
        search={search}
      />
    </div>
  );
};

export default SearchPage;
