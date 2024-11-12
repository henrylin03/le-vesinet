import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./header.module.css";

const PageLink = ({ path = "/", text }) => (
  <NavLink
    to={path}
    className={({ isActive }) => (isActive ? styles.activePageLink : undefined)}
  >
    {text}
  </NavLink>
);

// custom prop validation function
const isPath = (props, propName, componentName) => {
  const pathValue = props[propName];
  if (pathValue === undefined) return;
  if (!pathValue.startsWith("/"))
    return new Error(
      `Prop ${propName} passed to ${componentName} must start with a slash "/"`,
    );
};

PageLink.propTypes = {
  path: isPath,
  text: PropTypes.string.isRequired,
};

export default PageLink;
