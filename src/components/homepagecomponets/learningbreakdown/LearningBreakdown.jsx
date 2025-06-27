import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Chip,
  Button,
  Fade,
  Zoom,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ExploreIcon from "@mui/icons-material/Explore";
import * as THREE from 'three';

const useStyles = makeStyles({
  section: {
    padding: "30px 0",
    position: "relative",
    background: "#000000",
    overflow: "hidden",
    minHeight: "65vh",
  },
  threeContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  container: {
    position: "relative",
    zIndex: 10,
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  title: {
    fontSize: "3rem !important",
    fontWeight: "700 !important",
    textAlign: "center",
    "@media (max-width: 960px)": {
      fontSize: "2.5rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "2rem !important",
    },
  },
  gradientText: {
    background: "none",
    color: "#fff !important",
    WebkitBackgroundClip: "unset !important",
    WebkitTextFillColor: "unset !important",
    animation: "none",
    display: "inline-block",
  },
  highlight:{
    color: "#FFC614 !important",
    display: "inline-block",
  },
  subtitle: {
    fontSize: "1.1rem !important",
    color: "#fff !important",
    textAlign: "center",
    maxWidth: "800px",
    margin: "20px auto 60px auto !important",
    "@media (max-width: 600px)": {
      fontSize: "1rem !important",
      margin: "15px auto 40px auto !important",
    },
  },
  solarSystem: {
    position: "relative",
    width: "500px",
    height: "500px",
    margin: "20px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 768px)": {
      width: "400px",
      height: "400px",
    },
    "@media (max-width: 600px)": {
      width: "350px",
      height: "350px",
    },
    "@media (max-width: 480px)": {
      width: "300px",
      height: "300px",
    },
    "@media (max-width: 400px)": {
      width: "280px",
      height: "280px",
    },
  },
  sun: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    background: "#FFC614",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    animation: "$sunPulse 6s ease-in-out infinite",
    boxShadow:
      "0 0 20px 4px #FFC614, inset 0 0 10px #fffbe4",
    zIndex: 10,
    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    "@media (max-width: 768px)": {
      width: "100px",
      height: "100px",
    },
    "@media (max-width: 480px)": {
      width: "80px",
      height: "80px",
    },
  },
  sunContent: {
    textAlign: "center",
    zIndex: 2,
    position: "relative",
    padding: "5px",
  },
  sunTitle: {
    fontSize: "1.1rem !important",
    fontWeight: "900 !important",
    color: "white !important",
    textShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
    lineHeight: "1.1 !important",
    "@media (max-width: 768px)": {
      fontSize: "0.95rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.8rem !important",
    },
  },
  sunSubtitle: {
    fontSize: "0.75rem !important",
    color: "rgba(255, 255, 255, 0.9) !important",
    marginTop: "3px !important",
    lineHeight: "1.1 !important",
    "@media (max-width: 768px)": {
      fontSize: "0.65rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.55rem !important",
    },
  },
  orbit: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    border: "2px solid rgba(0, 212, 255, 0.2)",
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    "@media (max-width: 768px)": {
      border: "1px solid rgba(0, 212, 255, 0.2)",
    },
  },
  orbitActive: {
    border: "2px solid rgba(0, 212, 255, 0.6) !important",
    boxShadow: "0 0 30px rgba(0, 212, 255, 0.3) !important",
  },
  orbit1: {
    width: "200px",
    height: "200px",
    "@media (max-width: 768px)": {
      width: "160px",
      height: "160px",
    },
    "@media (max-width: 480px)": {
      width: "130px",
      height: "130px",
    },
  },
  orbit2: {
    width: "280px",
    height: "280px",
    "@media (max-width: 768px)": {
      width: "220px",
      height: "220px",
    },
    "@media (max-width: 480px)": {
      width: "180px",
      height: "180px",
    },
  },
  orbit3: {
    width: "360px",
    height: "360px",
    "@media (max-width: 768px)": {
      width: "280px",
      height: "280px",
    },
    "@media (max-width: 480px)": {
      width: "230px",
      height: "230px",
    },
  },
  orbit4: {
    width: "450px",
    height: "450px",
    "@media (max-width: 768px)": {
      width: "400px",
      height: "400px",
    },
    "@media (max-width: 600px)": {
      width: "350px",
      height: "350px",
    },
    "@media (max-width: 480px)": {
      width: "300px",
      height: "300px",
    },
    "@media (max-width: 400px)": {
      width: "280px",
      height: "280px",
    },
  },
  planet: {
    position: "absolute",
    width: "70px",
    height: "70px",
    zIndex: 5,
    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    "&:hover": {
      filter: "brightness(1.3)",
    },
    "@media (max-width: 768px)": {
      width: "60px",
      height: "60px",
    },
    "@media (max-width: 480px)": {
      width: "50px",
      height: "50px",
    },
  },
  planetActive: {
  },
  planet1: {
    top: "-2%",
    left: "50%",
    transform: "translateX(-50%)",
    "@media (max-width: 768px)": {
      top: "-1%",
    },
    "@media (max-width: 480px)": {
      top: "0%",
    },
  },
  planet2: {
    top: "50%",
    right: "-2%",
    transform: "translateY(-50%)",
    "@media (max-width: 768px)": {
      right: "-1%",
    },
    "@media (max-width: 480px)": {
      right: "0%",
    },
  },
  planet3: {
    bottom: "-2%",
    left: "50%",
    transform: "translateX(-50%)",
    "@media (max-width: 768px)": {
      bottom: "-1%",
    },
    "@media (max-width: 480px)": {
      bottom: "0%",
    },
  },
  planet4: {
    top: "50%",
    left: "-2%",
    transform: "translateY(-50%)",
    "@media (max-width: 768px)": {
      left: "-1%",
    },
    "@media (max-width: 480px)": {
      left: "0%",
    },
  },
  planetCore: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    "&::before": {
      content: '""',
      position: "absolute",
      inset: "3px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(10, 10, 31, 0.95) 0%, rgba(0, 0, 0, 0.9) 100%)",
      zIndex: 1,
      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      inset: "-5px",
      borderRadius: "50%",
      background: "inherit",
      filter: "blur(10px)",
      opacity: 0,
      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      zIndex: 0,
    },
  },
  planetCoreActive: {
    "&::after": {
      opacity: 0.6,
    },
  },
  planet1Core: {
    background: "#00d4ff",
  },
  planet2Core: {
    background: "#8b5cf6",
  },
  planet3Core: {
    background: "#ff8c42",
  },
  planet4Core: {
    background: "#00ff9f",
  },
  planetInner: {
    position: "relative",
    zIndex: 2,
    width: "65px",
    height: "65px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    padding: "2px",
    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    "@media (max-width: 768px)": {
      width: "42px",
      height: "42px",
    },
    "@media (max-width: 480px)": {
      width: "35px",
      height: "35px",
    },
  },
  planetNumber: {
    fontSize: "1rem !important",
    fontWeight: "900 !important",
    color: "#00d4ff !important",
    lineHeight: "1 !important",
    transition: "all 0.3s ease",
    "@media (max-width: 768px)": {
      fontSize: "0.9rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.75rem !important",
    },
  },
  planetTitle: {
    fontSize: "0.45rem !important",
    color: "white !important",
    textAlign: "center !important",
    fontWeight: "600 !important",
    lineHeight: "1 !important",
    marginTop: "1px !important",
    wordWrap: "break-word",
    transition: "all 0.3s ease",
    "@media (max-width: 768px)": {
      fontSize: "0.4rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.35rem !important",
    },
  },
  infoCard: {
    position: "absolute",
    top: "-48%",
    left: "-40%",
    transform: "translate(-50%, -50%)",
    width: "320px",
    maxWidth: "90vw",
    padding: "20px",
    background: "rgba(10, 10, 20, 0.95)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    border: "2px solid",
    zIndex: 999,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.8)",
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    "@media (max-width: 768px)": {
      width: "300px",
      padding: "18px",
    },
    "@media (max-width: 600px)": {
      width: "280px",
      padding: "16px",
    },
    "@media (max-width: 480px)": {
      width: "260px",
      padding: "14px",
    },
    "@media (max-width: 400px)": {
      width: "240px",
      padding: "12px",
    },
  },
  infoCard1: {
    borderColor: "#00d4ff",
    boxShadow: "0 0 20px #00d4ff, 0 20px 40px rgba(0, 0, 0, 0.8)",
  },
  infoCard2: {
    borderColor: "#8b5cf6",
    boxShadow: "0 0 20px #8b5cf6, 0 20px 40px rgba(0, 0, 0, 0.8)",
  },
  infoCard3: {
    borderColor: "#ff8c42",
    boxShadow: "0 0 20px #ff8c42, 0 20px 40px rgba(0, 0, 0, 0.8)",
  },
  infoCard4: {
    borderColor: "#00ff9f",
    boxShadow: "0 0 20px #00ff9f, 0 20px 40px rgba(0, 0, 0, 0.8)",
  },
  cardTitle: {
    fontSize: "1.3rem !important",
    fontWeight: "700 !important",
    color: "white !important",
    marginBottom: "8px !important",
    textAlign: "center !important",
    "@media (max-width: 480px)": {
      fontSize: "1.1rem !important",
    },
  },
  cardMonths: {
    fontSize: "0.95rem !important",
    fontWeight: "600 !important",
    marginBottom: "12px !important",
    textAlign: "center !important",
    "@media (max-width: 480px)": {
      fontSize: "0.85rem !important",
    },
  },
  cardMonths1: { color: "#00d4ff !important" },
  cardMonths2: { color: "#8b5cf6 !important" },
  cardMonths3: { color: "#ff8c42 !important" },
  cardMonths4: { color: "#00ff9f !important" },
  cardDescription: {
    fontSize: "0.9rem !important",
    color: "rgba(255, 255, 255, 0.9) !important",
    lineHeight: "1.5 !important",
    marginBottom: "16px !important",
    textAlign: "center !important",
    "@media (max-width: 480px)": {
      fontSize: "0.8rem !important",
      lineHeight: "1.4 !important",
    },
  },
  skillChips: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    justifyContent: "center",
    marginBottom: "16px !important",
  },
  skillChip: {
    fontSize: "0.75rem !important",
    height: "28px !important",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.7rem !important",
      height: "26px !important",
    },
  },
  skillChip1: {
    backgroundColor: "#00d4ff !important",
    color: "#fff !important",
    border: "1px solid #00d4ff !important",
  },
  skillChip2: {
    backgroundColor: "#8b5cf6 !important",
    color: "#fff !important",
    border: "1px solid #8b5cf6 !important",
  },
  skillChip3: {
    backgroundColor: "#ff8c42 !important",
    color: "#fff !important",
    border: "1px solid #ff8c42 !important",
  },
  skillChip4: {
    backgroundColor: "#00ff9f !important",
    color: "#fff !important",
    border: "1px solid #00ff9f !important",
  },
  exploreButton: {
    width: "100% !important",
    padding: "10px !important",
    borderRadius: "12px !important",
    fontWeight: "600 !important",
    textTransform: "none !important",
    fontSize: "0.9rem !important",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important",
    "@media (max-width: 480px)": {
      padding: "8px !important",
      fontSize: "0.8rem !important",
    },
  },
  exploreButton1: {
    background: "#00d4ff !important",
    color: "white !important",
    "&:hover": {
      background: "#0099cc !important",
      transform: "translateY(-3px)",
      boxShadow: "0 12px 30px #00d4ff !important",
    },
  },
  exploreButton2: {
    background: "#8b5cf6 !important",
    color: "white !important",
    "&:hover": {
      background: "#a855f7 !important",
      transform: "translateY(-3px)",
      boxShadow: "0 12px 30px #8b5cf6 !important",
    },
  },
  exploreButton3: {
    background: "#ff8c42 !important",
    color: "white !important",
    "&:hover": {
      background: "#ff6b1a !important",
      transform: "translateY(-3px)",
      boxShadow: "0 12px 30px #ff8c42 !important",
    },
  },
  exploreButton4: {
    background: "#00ff9f !important",
    color: "white !important",
    "&:hover": {
      background: "#00cc7f !important",
      transform: "translateY(-3px)",
      boxShadow: "0 12px 30px #00ff9f !important",
    },
  },
  rocketContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 15,
    transition: "animation-play-state 0.6s ease",
    pointerEvents: "none", // Prevent accidental hover/clicks
  },
  rocketRunning: {
    animation: "$rocketOrbit 20s linear infinite",
  },
  rocketPaused: {
    animationPlayState: "paused !important",
  },
  rocket: {
    fontSize: "32px !important",
    color: "white !important",
    filter: "drop-shadow(0 0 20px currentColor)",
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    "@media (max-width: 768px)": {
      fontSize: "28px !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "24px !important",
    },
  },
  rocketPhase1: { color: "#00d4ff !important" },
  rocketPhase2: { color: "#8b5cf6 !important" },
  rocketPhase3: { color: "#ff8c42 !important" },
  rocketPhase4: { color: "#00ff9f !important" },
  
  "@keyframes glow": {
    "0%": {
      textShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
    },
    "100%": {
      textShadow: "0 0 40px rgba(255, 0, 128, 0.8), 0 0 60px rgba(255, 235, 59, 0.6)",
    },
  },
  "@keyframes sunPulse": {
    "0%, 100%": {
      boxShadow:
        "0 0 30px 8px #ffe066, 0 0 50px 10px #ffb300, 0 0 0 0 #fff, inset 0 0 20px #fffbe4",
      transform: "translate(-50%, -50%) scale(1)",
    },
    "50%": {
      boxShadow:
        "0 0 50px 16px #fffbe4, 0 0 80px 20px #ffb300, 0 0 0 0 #fff, inset 0 0 30px #fffbe4",
      transform: "translate(-50%, -50%) scale(1.05)",
    },
  },
  "@keyframes rocketOrbit": {
    "0%": {
      transform: "translate(-50%, -50%) rotate(0deg) translateX(250px) rotate(0deg)",
    },
    "12.5%": {
      transform: "translate(-50%, -50%) rotate(0deg) translateX(250px) rotate(0deg)",
    },
    "25%": {
      transform: "translate(-50%, -50%) rotate(90deg) translateX(250px) rotate(-90deg)",
    },
    "37.5%": {
      transform: "translate(-50%, -50%) rotate(90deg) translateX(250px) rotate(-90deg)",
    },
    "50%": {
      transform: "translate(-50%, -50%) rotate(180deg) translateX(250px) rotate(-180deg)",
    },
    "62.5%": {
      transform: "translate(-50%, -50%) rotate(180deg) translateX(250px) rotate(-180deg)",
    },
    "75%": {
      transform: "translate(-50%, -50%) rotate(270deg) translateX(250px) rotate(-270deg)",
    },
    "87.5%": {
      transform: "translate(-50%, -50%) rotate(270deg) translateX(250px) rotate(-270deg)",
    },
    "100%": {
      transform: "translate(-50%, -50%) rotate(360deg) translateX(250px) rotate(-360deg)",
    },
  },
  "@keyframes shine": {
    "to": {
      backgroundPosition: "200% center",
    },
  },
});

const ORBIT_RADII = [100, 140, 180, 225]; // px, match orbit1-4 radii (half of their width)

const LearningBreakdown = () => {
  const classes = useStyles();
  const [activePhase, setActivePhase] = useState(-1);
  const [showCard, setShowCard] = useState(false);
  const [rocketActivePhase, setRocketActivePhase] = useState(-1);
  const [isCardHovering, setIsCardHovering] = useState(false); // <-- renamed for clarity
  const [rocketPaused, setRocketPaused] = useState(false);
  const threeContainerRef = useRef(null);
  const sceneRef = useRef(null);
  const animationRef = useRef(null);
  const [hoveredOrbitRadius, setHoveredOrbitRadius] = useState(ORBIT_RADII[ORBIT_RADII.length - 1]);

  const phases = [
    {
      number: "01",
      title: "Foundation Launch",
      months: "Months 1-3",
      description: "Master the fundamentals of programming with hands-on coding challenges and collaborative projects that build your confidence.",
      skills: ["Programming Basics", "Problem Solving", "Git & GitHub", "Team Collaboration"],
    },
    {
      number: "02", 
      title: "Skill Specialization",
      months: "Months 4-6",
      description: "Choose your path and dive deep into specialized technologies while building real-world applications.",
      skills: ["Full Stack/Data Science", "Framework Mastery", "Database Design", "API Development"],
    },
    {
      number: "03",
      title: "Product Creation",
      months: "Months 7-9", 
      description: "Transform into a product builder by creating complete applications with cross-functional teams.",
      skills: ["Product Development", "User Experience", "Deployment", "Team Leadership"],
    },
    {
      number: "04",
      title: "Career Ignition",
      months: "Months 10-12",
      description: "Launch your tech career with industry connections, interview preparation, and direct job placement support.",
      skills: ["Job Preparation", "Technical Interviews", "Industry Networking", "Career Growth"],
    },
  ];

  useEffect(() => {
    // Three.js Scene Setup
    const container = threeContainerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create starfield
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 2000;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 2000;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 2000;

      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.3 + 0.5, 0.5, Math.random() * 0.5 + 0.5);
      starColors[i * 3] = color.r;
      starColors[i * 3 + 1] = color.g;
      starColors[i * 3 + 2] = color.b;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Create nebula effect
    const nebulaGeometry = new THREE.SphereGeometry(800, 64, 64);
    const nebulaMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vPosition;
        uniform float time;
        
        float noise(vec3 p) {
          return sin(p.x * 0.01 + time * 0.5) * sin(p.y * 0.01 + time * 0.3) * sin(p.z * 0.01 + time * 0.7);
        }
        
        void main() {
          float n = noise(vPosition);
          vec3 color1 = vec3(0.1, 0.0, 0.3);
          vec3 color2 = vec3(0.0, 0.1, 0.4);
          vec3 color3 = vec3(0.2, 0.0, 0.2);
          
          vec3 finalColor = mix(color1, color2, n);
          finalColor = mix(finalColor, color3, n * 0.5);
          
          float alpha = abs(n) * 0.3;
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      uniforms: {
        time: { value: 0 }
      },
      transparent: true,
      side: THREE.BackSide,
    });

    const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);

    camera.position.z = 100;
    sceneRef.current = { scene, camera, renderer, stars, nebula, material: nebulaMaterial };

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      nebulaMaterial.uniforms.time.value = time;
      
      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0008;
      
      nebula.rotation.x += 0.0002;
      nebula.rotation.y += 0.0003;
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    if (isCardHovering) {
      setRocketPaused(true);
      return;
    }

    setRocketPaused(false);

    // Rocket movement cycle timing
    const cycleDuration = 20000; // 20 seconds total
    const phaseStops = [
      { start: 0, end: 2500, phase: 0 },       // 0-2.5s: at planet 1 (pause)
      { start: 2500, end: 5000, phase: -1 },   // 2.5-5s: moving to planet 2
      { start: 5000, end: 7500, phase: 1 },    // 5-7.5s: at planet 2 (pause)
      { start: 7500, end: 10000, phase: -1 },  // 7.5-10s: moving to planet 3
      { start: 10000, end: 12500, phase: 2 },  // 10-12.5s: at planet 3 (pause)
      { start: 12500, end: 15000, phase: -1 }, // 12.5-15s: moving to planet 4
      { start: 15000, end: 17500, phase: 3 },  // 15-17.5s: at planet 4 (pause)
      { start: 17500, end: 20000, phase: -1 }  // 17.5-20s: moving to start
    ];

    const updateRocketPhase = () => {
      const now = Date.now();
      const cycleTime = now % cycleDuration;

      const currentStop = phaseStops.find(stop =>
        cycleTime >= stop.start && cycleTime < stop.end
      );

      if (currentStop && currentStop.phase !== -1) {
        setRocketActivePhase(currentStop.phase);
        setActivePhase(currentStop.phase);
        setShowCard(true);
      } else {
        setRocketActivePhase(-1);
        setShowCard(false);
        setActivePhase(-1);
      }
    };

    updateRocketPhase();
    const interval = setInterval(updateRocketPhase, 100);

    return () => clearInterval(interval);
  }, [isCardHovering]);

  const handleExploreMore = (phaseIndex) => {
    console.log(`Exploring more about phase ${phaseIndex + 1}`);
    // Add your navigation logic here
  };

  const currentPhase = activePhase >= 0 ? phases[activePhase] : null;

  // Helper to get current orbit radius for the rocket
  const getRocketOrbitRadius = () => {
    if (rocketActivePhase >= 0) return ORBIT_RADII[rocketActivePhase];
    // Default to largest orbit if not on a phase
    return ORBIT_RADII[ORBIT_RADII.length - 1];
  };

  return (
    <Box className={classes.section}>
      {/* Three.js Background */}
      <Box ref={threeContainerRef} className={classes.threeContainer} />

      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.header}>
          <Typography variant="h1" className={classes.title}>
            <span variant="h1" className={classes.gradientText}>Learning Journey </span> {" "}
            <span variant="h1" className={classes.highlight}>Roadmap</span>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Our comprehensive learning pathway designed to transform you into an industry-ready professional
          </Typography>
        </Box>

        <Box className={classes.solarSystem}>
          {/* Sun - Central Hub */}
          <Box className={classes.sun}>
            <Box className={classes.sunContent}>
              {/* <Typography className={classes.sunTitle}>
                Tech Mastery
              </Typography> */}
              {/* <Typography className={classes.sunSubtitle}>
                Core Learning Hub
              </Typography> */}
            </Box>

            {/* Information Card Overlay */}
            <Fade in={showCard} timeout={800}>
              <Zoom in={showCard} timeout={600}>
                <Box
                  className={`${classes.infoCard} ${currentPhase ? classes[`infoCard${activePhase + 1}`] : ''}`}
                  onMouseEnter={() => {
                    setIsCardHovering(true);
                    setHoveredOrbitRadius(getRocketOrbitRadius()); // Store the current orbit radius
                  }}
                  onMouseLeave={() => setIsCardHovering(false)}
                  // Only this card hover controls the pause
                >
                  {currentPhase && (
                    <>
                      <Typography className={classes.cardTitle}>
                        {currentPhase.title}
                      </Typography>
                      <Typography
                        className={`${classes.cardMonths} ${classes[`cardMonths${activePhase + 1}`]}`}
                      >
                        {currentPhase.months}
                      </Typography>
                      <Typography className={classes.cardDescription}>
                        {currentPhase.description}
                      </Typography>
                      <Box className={classes.skillChips}>
                        {currentPhase.skills.map((skill, idx) => (
                          <Chip
                            key={idx}
                            label={skill}
                            className={`${classes.skillChip} ${classes[`skillChip${activePhase + 1}`]}`}
                            size="small"
                          />
                        ))}
                      </Box>
                      <Button
                        className={`${classes.exploreButton} ${classes[`exploreButton${activePhase + 1}`]}`}
                        startIcon={<ExploreIcon />}
                        onClick={() => handleExploreMore(activePhase)}
                        variant="contained"
                      >
                        Explore More
                      </Button>
                    </>
                  )}
                </Box>
              </Zoom>
            </Fade>
          </Box>

          {/* Orbital Rings */}
          <Box className={`${classes.orbit} ${classes.orbit1} ${activePhase === 0 ? classes.orbitActive : ''}`} />
          <Box className={`${classes.orbit} ${classes.orbit2} ${activePhase === 1 ? classes.orbitActive : ''}`} />
          <Box className={`${classes.orbit} ${classes.orbit3} ${activePhase === 2 ? classes.orbitActive : ''}`} />
          <Box className={`${classes.orbit} ${classes.orbit4} ${activePhase === 3 ? classes.orbitActive : ''}`} />

          {/* Planets - Learning Phases */}
          {phases.map((phase, index) => (
            <Box
              key={index}
              className={`${classes.planet} ${classes[`planet${index + 1}`]} ${activePhase === index ? classes.planetActive : ''}`}
              // Remove onMouseEnter/onMouseLeave handlers
            >
              <Box className={`${classes.planetCore} ${classes[`planet${index + 1}Core`]} ${activePhase === index ? classes.planetCoreActive : ''}`}>
                <Box className={classes.planetInner}>
                  <Typography className={classes.planetNumber}>
                    {phase.number}
                  </Typography>
                  <Typography className={classes.planetTitle}>
                    {phase.title.split(' ').map((word, idx) => (
                      <span key={idx}>
                        {word}
                        {idx < phase.title.split(' ').length - 1 && <br />}
                      </span>
                    ))}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}

          {/* Animated Rocket */}
          <Box
            className={`${classes.rocketContainer} ${rocketPaused ? classes.rocketPaused : classes.rocketRunning}`}
            style={{
              // Dynamically set the orbit radius
              transform: `translate(-50%, -50%) rotate(0deg) translateX(${isCardHovering ? hoveredOrbitRadius : getRocketOrbitRadius()}px)`,
              // Let animation override rotate, but always start at correct radius
              // The animation will animate the rotate part, but the translateX is always the correct radius
              // This ensures the rocket never jumps to the center
            }}
          >
            <RocketLaunchIcon
              className={`${classes.rocket} ${rocketActivePhase >= 0 ? classes[`rocketPhase${rocketActivePhase + 1}`] : ''}`}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LearningBreakdown;