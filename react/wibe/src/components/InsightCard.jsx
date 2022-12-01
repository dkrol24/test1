"use client";
import { motion } from "framer-motion";
import { fadeIn, pathVariants } from "../utils/motion";
import styled from "styled-components";
const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3rem 0 0 0;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;
const Image = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-top: 1rem;
  background: transparent;
  border: 1px solid white;
  padding: 1rem;
  svg {
    width: 120px;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    @media (max-width: 950px) {
      width: 120px;
    }
    g {
      path {
        stroke: white;
      }
    }
  }
`;
const Text = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 650px;
  margin: 0 1rem 0 3rem;
  @media (max-width: 800px) {
    margin: 0;
    padding: 1rem;
  }
`;

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <Section as={motion.div} variants={fadeIn("up", "spring", index * 0.5, 1)}>
    <img
      src={imgUrl}
      alt="planet-01"
      style={{
        width: "100%",
        maxWidth: "270px",
        borderRadius: "32px",
        objectFit: "cover",
        background:
          "radial-gradient(circle at 50% 50%, rgba(26,111,191,255) 0%, rgba(1,15,88,255) 75%)",
      }}
    />
    <Container as={motion.div}>
      <Text>
        <h4 style={{ fontSize: "26px", color: "white" }}>{title}</h4>
        <p style={{ fontSize: "14px", color: "#B0B0B0" }}>{subtitle}</p>
      </Text>

      <Image>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={160}
          height={100}
          viewBox=" 1 5 105 70"
          fill="none"
          enableBackground="new 0 0 24 24"
        >
          <g></g>
          <g data-name="Group 12" fill="none">
            <motion.path
              data-name="Path 50"
              d="M76.402 23.024c1.176-13.263-13.352-15.8-21.059-6.133C52.472 8.512 48.582-.54 38.306.025c-11.629.641-18.828 11.756-19.2 22.419a.939.939 0 0 0-.52-.468c-16.8-6.509-26.769 19.5-9.781 21.716-4.049 7.2-4.511 15.9 1.763 22.189 5.563 5.574 12.446 2.8 17.152-1.842 2.5 13.819 28.243 12.377 33.726.272 13.988 11.735 38.32 1.286 40.374-16.906 1.783-15.766-9.951-30.519-25.418-24.381ZM62.34 61.186c.042-.3.093-.6.113-.905.093-1.462-2.309-1.8-2.568-.348-2.327 13.085-31.068 16.344-29.372.348.168-1.591-1.975-1.789-2.724-.737-4.117 5.78-10.414 9.052-16.123 3.355-5.493-5.481-2.907-14.205.769-19.737a1.418 1.418 0 0 0-1.215-2.118c-7.064.087-10.982-4.5-8.1-11.233 2.616-6.108 9.086-7.594 14.991-6.111a.813.813 0 0 0 1.029-.534 1.056 1.056 0 0 0 2.04-.328c.7-10.561 7.76-19.592 18.855-20.058 8.517-.356 11.415 11.628 13.453 17.772a1.478 1.478 0 0 0 2.676.35c5.62-10.024 20.179-9.714 16.929 4.219a1.487 1.487 0 0 0 2.163 1.662c13.707-7.395 23.855 4.313 23.9 17.794.064 17.665-23.801 29.215-36.816 16.609Z"
            />
            <motion.path
              data-name="Path 51"
              d="M62.372 40.184c-.027-.022-.052-.046-.079-.067l-.591-.479-1.251-1.009a11.706 11.706 0 0 0-1.378-1.074c-.118-.069-.242-.131-.365-.2a4.474 4.474 0 0 0-.513-1.411 55.244 55.244 0 0 0-3.679-5.4 103.249 103.249 0 0 0-8.679-10.276c-.813-.849-1.925.137-1.956 1.032q-.2 5.984-.406 11.969l-6.812-5.726a1.209 1.209 0 0 0-1.956 1.032l1.949 11.583-8.931-4.558c-.873-.445-2.1.56-1.627 1.508l8.258 16.468a1.254 1.254 0 0 0 .247.333 4.6 4.6 0 0 0 .567.74c.246.3.5.585.755.875.308.35.607.714.934 1.046.272.277.56.542.841.813a5.166 5.166 0 0 0 .408.359.5.5 0 0 0 .642.611 13.4 13.4 0 0 0 1.781-.538c.495-.225.975-.47 1.452-.732 1.045-.574 2.021-1.288 3.016-1.948 2.073-1.377 4.089-2.835 6.119-4.276 1.97-1.4 3.966-2.768 5.9-4.217l2.9-2.175a16.742 16.742 0 0 0 2.887-2.375 1.25 1.25 0 0 0-.433-1.908Zm-32.452-.777 7.807 3.986a1.206 1.206 0 0 0 1.7-1.2l-1.8-10.722 6.2 5.21a1.213 1.213 0 0 0 1.957-1.032q.2-5.772.392-11.547 3.154 3.481 5.972 7.249a96.02 96.02 0 0 1 3.492 4.987c.532.819 1.19 1.634.251 2.373a9.786 9.786 0 0 1-2.055 1.019 57.485 57.485 0 0 0-17.524 12.4Zm28.478 2.558-3 2.036c-2.06 1.4-4.065 2.875-6.087 4.323-1.966 1.408-3.947 2.794-5.868 4.263-.957.732-1.961 1.429-2.865 2.227-.319.281-.621.581-.922.883-.021-.021-.037-.046-.059-.067l-.84-.811c-.281-.272-.583-.513-.884-.761l-.067-.054c.023-.022.049-.04.073-.064a54.977 54.977 0 0 1 9.9-8.191 52.618 52.618 0 0 1 5.257-3c1.545-.763 3.461-1.291 4.73-2.5a3.43 3.43 0 0 0 .522-.644l.907.818.626.565c-.491.312-.957.655-1.427.974Z"
            />
          </g>
        </svg>
      </Image>
    </Container>
  </Section>
);

export default InsightCard;
