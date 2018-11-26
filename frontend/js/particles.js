const particles = {
  number: {
    value: 15,
    density: {
      enable: true,
      value_area: 1000
    }
  },
  color: {
    value: "#ACAEAB"
  },
  shape: {
    type: "circle",
    stroke: {
      width: 0,
      color: "#000000"
    },
    polygon: {
      nb_sides: 5
    },
    image: {
      src: "img/github.svg",
      width: 100,
      height: 100
    }
  },
  opacity: {
    value: 0.8,
    random: true,
    anim: {
      enable: false,
      speed: 1,
      opacity_min: 0.1,
      sync: false
    }
  },
  size: {
    value: 3,
    random: false,
    anim: {
      enable: false,
      speed: 80,
      size_min: 0.1,
      sync: false
    }
  },
  line_linked: {
    enable: true,
    distance: 150,
    color: "#ACAEAB",
    opacity: 0.45,
    width: 0.75
  },
  move: {
    enable: true,
    speed: 0.7,
    direction: "none",
    random: false,
    straight: false,
    out_mode: "out",
    bounce: false,
    attract: {
      enable: false,
      rotateX: 600,
      rotateY: 1200
    }
  }
};

export default particles;
