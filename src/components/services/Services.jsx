import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p style={{color:"black"}}>
        We focus on capturing the essence of India’s 
         <br /> untold stories through powerful documentaries and short films.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/film-making-2.jpg" alt="Film Making" />
          <h1>
            Bringing<motion.b whileHover={{color:"black"}}>Stories</motion.b> to Life
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"black"}}>Rooted</motion.b> in Tradition.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Cultural Documentaries</h2>
          <br />
          <p>
          We delve into India's rich history, traditions, and folklore, bringing you visually stunning and deeply researched narratives.
          </p>
          <br />
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Short Films with a Purpose</h2>
          <br />
          <p>
          Telling impactful stories that highlight social issues, human experiences, and cultural values through cinematic storytelling.
          </p>
          <br />
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Heritage & Art Films</h2>
          <br />
          <p>
          A tribute to India’s art forms, music, dance, and craftsmanship, showcasing the true spirit of our roots.
          </p>
          <br />
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Customized Video Production</h2>
          <br />
          <p>
          From concept to screen, we craft compelling content that aligns with your vision while staying true to Indian ethos.
          </p>
          <br />
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
