import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  width: 100%;
  color: ${(props) => props.theme.text};
  z-index: 5;

  a {
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 6rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: red;
      }
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
`;

const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2, // 2
      delay: 5,
      ease: "easeInOut",
    },
  },
};
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 5,
      delay: 5,
      ease: "easeInOut",
    },
  },
};
const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="102"
          height="73.903"
          viewBox="0 0 102 73.903"
          enableBackground="new 0 0 24 24"
        >
          <g></g>
          <g data-name="Group 12" fill="none">
            <motion.path
              data-name="Path 51"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M62.372 40.184c-.027-.022-.052-.046-.079-.067l-.591-.479-1.251-1.009a11.706 11.706 0 0 0-1.378-1.074c-.118-.069-.242-.131-.365-.2a4.474 4.474 0 0 0-.513-1.411 55.244 55.244 0 0 0-3.679-5.4 103.249 103.249 0 0 0-8.679-10.276c-.813-.849-1.925.137-1.956 1.032q-.2 5.984-.406 11.969l-6.812-5.726a1.209 1.209 0 0 0-1.956 1.032l1.949 11.583-8.931-4.558c-.873-.445-2.1.56-1.627 1.508l8.258 16.468a1.254 1.254 0 0 0 .247.333 4.6 4.6 0 0 0 .567.74c.246.3.5.585.755.875.308.35.607.714.934 1.046.272.277.56.542.841.813a5.166 5.166 0 0 0 .408.359.5.5 0 0 0 .642.611 13.4 13.4 0 0 0 1.781-.538c.495-.225.975-.47 1.452-.732 1.045-.574 2.021-1.288 3.016-1.948 2.073-1.377 4.089-2.835 6.119-4.276 1.97-1.4 3.966-2.768 5.9-4.217l2.9-2.175a16.742 16.742 0 0 0 2.887-2.375 1.25 1.25 0 0 0-.433-1.908Zm-32.452-.777 7.807 3.986a1.206 1.206 0 0 0 1.7-1.2l-1.8-10.722 6.2 5.21a1.213 1.213 0 0 0 1.957-1.032q.2-5.772.392-11.547 3.154 3.481 5.972 7.249a96.02 96.02 0 0 1 3.492 4.987c.532.819 1.19 1.634.251 2.373a9.786 9.786 0 0 1-2.055 1.019 57.485 57.485 0 0 0-17.524 12.4Zm28.478 2.558-3 2.036c-2.06 1.4-4.065 2.875-6.087 4.323-1.966 1.408-3.947 2.794-5.868 4.263-.957.732-1.961 1.429-2.865 2.227-.319.281-.621.581-.922.883-.021-.021-.037-.046-.059-.067l-.84-.811c-.281-.272-.583-.513-.884-.761l-.067-.054c.023-.022.049-.04.073-.064a54.977 54.977 0 0 1 9.9-8.191 52.618 52.618 0 0 1 5.257-3c1.545-.763 3.461-1.291 4.73-2.5a3.43 3.43 0 0 0 .522-.644l.907.818.626.565c-.491.312-.957.655-1.427.974Z"
            />
          </g>
        </svg>
        <Text variants={textVariants} initial="hidden" animate="visible">
          WebKings.com
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
