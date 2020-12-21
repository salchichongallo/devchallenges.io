import React from "react";
import styled from "styled-components";

const DevProfileLink = React.forwardRef((props, ref) => (
  <a
    href="https://devchallenges.io/profile/PPGDlVc9JMi4fOFL2ubF"
    target="_blank"
    rel="noopener"
    ref={ref}
    {...props}
  >
    Jimmy Murillo @ DevChallenges.io
  </a>
));

export default styled(DevProfileLink)``;
