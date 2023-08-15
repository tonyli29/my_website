import React from "react";
import { Link } from "react-scroll";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Root, Button } from "./styles";

const style = {
  marginLeft: "1em",
  fontSize: "1.5em",
};

const Scroll = (props) => (
  <Root>
    <Button>
      <FaArrowAltCircleRight size="3em" />
      <Link
        activeClass="active"
        to="top"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        style={style}
      >
        Top
      </Link>
    </Button>
    <Button>
      <FaArrowAltCircleRight size="3em" />
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        style={style}
      >
        About
      </Link>
    </Button>
    <Button>
      <FaArrowAltCircleRight size="3em" />
      <Link
        activeClass="active"
        to="experience"
        spy={true}
        smooth={true}
        offset={-30}
        duration={500}
        style={style}
      >
        Experience
      </Link>
    </Button>

    <Button>
      <FaArrowAltCircleRight size="3em" />
      <Link
        activeClass="active"
        to="project"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={style}
      >
        Projects
      </Link>
    </Button>
  </Root>
);

export default Scroll;
