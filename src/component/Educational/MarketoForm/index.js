// realization: https://github.com/CharlieDieter/react-marketo-hook
import React from "react";

import useMarketo from "./useMarketo";

function MarketoForm(props) {
  useMarketo({
    baseUrl: "//info.radian.biz",
    munchkinId: "954-CCM-872",
    formId: props.formId,
    callback: () => {},
  });

  return <form id={`mktoForm_${props.formId}`} />;
}

export default MarketoForm;
