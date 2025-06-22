// src/components/homepagecomponets/podcastshowcase/PodcastShowcaseSection.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Container,
  Paper,
  InputAdornment,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import {ReactComponent as  QuestionAnswerIcon} from "../../../assets/commenticon.svg";
import Launching from "../../../assets/launching_soon_video_clip.jpg"

const useStyles = makeStyles({
  section: {
    padding: "60px 0",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #101138 0%, #1e1c44 100%)",
    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage:
        "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      backgroundSize: "30px 30px",
      zIndex: 1,
    },
    "@media (max-width: 1200px)": {
      padding: "55px 0",
    },
    "@media (max-width: 960px)": {
      padding: "50px 0",
    },
    "@media (max-width: 600px)": {
      padding: "40px 0",
    },
    "@media (max-width: 480px)": {
      padding: "35px 0",
    },
    "@media (max-width: 375px)": {
      padding: "30px 0",
    },
  },
  container: {
    position: "relative",
    zIndex: 2,
  },
  contentWrapper: {
    display: "flex",
    alignItems: "stretch",
    gap: "40px",
    "@media (max-width: 1200px)": {
      gap: "35px",
    },
    "@media (max-width: 960px)": {
      flexDirection: "column",
      gap: "30px",
      alignItems: "stretch",
    },
    "@media (max-width: 600px)": {
      gap: "25px",
    },
    "@media (max-width: 480px)": {
      gap: "20px",
    },
  },
  videoWrapper: {
    flex: "1.5",
    position: "relative",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    aspectRatio: "16/9",
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    "@media (max-width: 1200px)": {
      maxWidth: "700px",
      borderRadius: "14px",
    },
    "@media (max-width: 960px)": {
      width: "100%",
      maxWidth: "100%",
      height: "auto",
    },
    "@media (max-width: 600px)": {
      borderRadius: "12px",
    },
    "@media (max-width: 480px)": {
      borderRadius: "10px",
    },
    "@media (max-width: 375px)": {
      borderRadius: "8px",
    },
  },
  videoIframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "15px",
    "@media (max-width: 1200px)": {
      borderRadius: "14px",
    },
    "@media (max-width: 600px)": {
      borderRadius: "12px",
    },
    "@media (max-width: 480px)": {
      borderRadius: "10px",
    },
    "@media (max-width: 375px)": {
      borderRadius: "8px",
    },
  },
  contentBox: {
    flex: "1",
    color: "white",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    "@media (max-width: 960px)": {
      textAlign: "center",
      maxWidth: "600px",
      height: "auto",
      alignItems: "center",
      margin: "0 auto",
    },
    "@media (max-width: 600px)": {
      maxWidth: "100%",
    },
    "& .MuiPaper-root": {
      marginTop: "0px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }
  },
  highlight: {
    color: "#FFC614",
    fontWeight: "bold",
  },
  title: {
    fontSize: "2.5rem !important",
    fontWeight: "bold !important",
    marginBottom: "10px !important",
    lineHeight: "1.2 !important",
    "@media (max-width: 1200px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "2rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.7rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.5rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "1.3rem !important",
    },
  },
  titleContainer: {
    textAlign: "center",
    marginBottom: "10px",
    "@media (max-width: 1200px)": {
      marginBottom: "15px",
    },
    "@media (max-width: 960px)": {
      marginBottom: "30px",
    },
    "@media (max-width: 600px)": {
      marginBottom: "25px",
    },
    "@media (max-width: 480px)": {
      marginBottom: "20px",
    },
  },
  description: {
    fontSize: "1.1rem !important",
    marginBottom: "25px !important",
    lineHeight: "1.6 !important",
    color: "rgba(255, 255, 255, 0.9) !important",
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto 25px !important",
    "@media (max-width: 1200px)": {
      fontSize: "1.05rem !important",
      maxWidth: "800px",
    },
    "@media (max-width: 600px)": {
      fontSize: "1rem !important",
      marginBottom: "20px !important",
      maxWidth: "100%",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.95rem !important",
      marginBottom: "18px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.9rem !important",
      marginBottom: "16px !important",
    },
  },
  sectionTitle: {
    fontSize: "2.5rem !important",
    fontWeight: "bold !important",
    color: "white !important",
    marginBottom: "15px !important",
    "@media (max-width: 1200px)": {
      fontSize: "2.3rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "2.1rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.8rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.6rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "1.4rem !important",
    },
  },
  calloutBox: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "15px",
    padding: "10px 25px",
    marginBottom: "25px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width: 1200px)": {
      padding: "12px 22px",
      borderRadius: "14px",
    },
    "@media (max-width: 600px)": {
      padding: "5px 15px",
      borderRadius: "12px",
    },
    "@media (max-width: 480px)": {
      padding: "5px 15px",
      borderRadius: "10px",
    },
    "@media (max-width: 375px)": {
      padding: "10px 14px",
      borderRadius: "8px",
    },
  },
  calloutText: {
    fontSize: "0.8rem !important",
    fontWeight: "600 !important",
    color: "#2A2B6A !important",
    margin: "0 !important",
    "@media (max-width: 1200px)": {
      fontSize: "1rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.7rem !important",
      marginBottom: "15px !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.6rem !important",
      marginBottom: "12px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.4rem !important",
      marginBottom: "10px !important",
    },
  },
  watchButton: {
    backgroundColor: "#FFC614 !important",
    color: "#2A2B6A !important",
    padding: "8px 17px !important",
    borderRadius: "50px !important",
    fontWeight: "bold !important",
    fontSize: "0.8rem !important",
    margin: "0 !important",
    textTransform: "none !important",
    transition: "all 0.3s ease !important",
    "&:hover": {
      backgroundColor: "white !important",
      transform: "translateY(-3px)",
      boxShadow: "0 10px 20px rgba(255, 198, 20, 0.3) !important",
    },
    "@media (max-width: 1200px)": {
      padding: "9px 18px !important",
      fontSize: "0.8rem !important",
    },
    "@media (max-width: 600px)": {
      padding: "10px 20px !important",
      fontSize: "0.7rem !important",
    },
    "@media (max-width: 480px)": {
      padding: "9px 18px !important",
      fontSize: "0.65rem !important",
    },
    "@media (max-width: 375px)": {
      padding: "8px 16px !important",
      fontSize: "0.6rem !important",
    },
  },
  questionForm: {
    marginTop: "30px",
    padding: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "@media (max-width: 1200px)": {
      marginTop: "25px",
      borderRadius: "14px",
    },
    "@media (max-width: 600px)": {
      padding: "15px",
      height: "auto",
      borderRadius: "12px",
    },
    "@media (max-width: 480px)": {
      padding: "12px",
      borderRadius: "10px",
    },
    "@media (max-width: 375px)": {
      padding: "10px",
      borderRadius: "8px",
    },
  },
  questionTitle: {
    fontSize: "1.5rem !important",
    fontWeight: "600 !important",
    fontFamily:"Montserrat !important",
    color:"#FFC614 !important",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    borderBottom:"1px solid #ffffff",
    "@media (max-width: 1200px)": {
      fontSize: "1.4rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.1rem !important",
      gap: "8px",
    },
    "@media (max-width: 480px)": {
      fontSize: "1rem !important",
      gap: "6px",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.95rem !important",
      gap: "5px",
    },
  },
  questionIcon: {
    height:"6.5rem",
    width:"6.5rem",
    color: "#FFC614",
    "@media (max-width: 1200px)": {
      height: "6rem",
      width: "6rem",
    },
    "@media (max-width: 600px)": {
      height: "5rem",
      width: "5rem",
    },
    "@media (max-width: 480px)": {
      height: "4.5rem",
      width: "4.5rem",
    },
    "@media (max-width: 375px)": {
      height: "4rem",
      width: "4rem",
    },
  },
  textField: {
    marginBottom: "15px !important",
    "& .MuiOutlinedInput-root": {
      borderRadius:"20px !important",
      color: "white",
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.3)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(255, 255, 255, 0.5)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FFC614",
      },
    },
    "& .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.7)",
      "&.Mui-focused": {
        color: "#FFC614",
      },
    },
    "& .MuiFormHelperText-root": {
      color: "#ffffff !important",
      "&.Mui-focused": {
        color: "#ffffff !important",
      },
      "&.Mui-disabled": {
        color: "#ffffff !important",
      },
      "&.Mui-error": {
        color: "rgba(255, 255, 255, 0.5) !important",
      }
    },
    "@media (max-width: 600px)": {
      marginBottom: "12px !important",
    },
    "@media (max-width: 480px)": {
      marginBottom: "10px !important",
    },
  },
  submitButton: {
    backgroundColor: "#FFC614 !important",
    color: "#3c3e8f !important",
    padding: "10px 25px !important",
    borderRadius: "10px !important",
    fontWeight: "600 !important",
    fontSize: "0.9rem !important",
    textTransform: "none !important",
    transition: "all 0.3s ease !important",
    "&:hover": {
      backgroundColor: "#3c3e8f !important",
      color: "#FFC614 !important",
      transform: "translateY(-2px)",
    },
    "@media (max-width: 1200px)": {
      padding: "9px 22px !important",
      fontSize: "0.88rem !important",
    },
    "@media (max-width: 600px)": {
      padding: "8px 20px !important",
      fontSize: "0.85rem !important",
    },
    "@media (max-width: 480px)": {
      padding: "7px 18px !important",
      fontSize: "0.8rem !important",
    },
    "@media (max-width: 375px)": {
      padding: "6px 16px !important",
      fontSize: "0.75rem !important",
    },
  },
  glowEffect: {
    position: "absolute",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    zIndex: 1,
    opacity: 0.2,
    filter: "blur(150px)",
    background: "#8a5cf7",
    top: "-200px",
    right: "-100px",
    "@media (max-width: 1200px)": {
      width: "450px",
      height: "450px",
    },
    "@media (max-width: 960px)": {
      width: "400px",
      height: "400px",
    },
    "@media (max-width: 600px)": {
      width: "300px",
      height: "300px",
      top: "-150px",
      right: "-50px",
    },
    "@media (max-width: 480px)": {
      width: "250px",
      height: "250px",
      top: "-125px",
      right: "-25px",
    },
    "@media (max-width: 375px)": {
      width: "200px",
      height: "200px",
      top: "-100px",
      right: "0px",
    },
  },
});

const PodcastShowcaseSection = () => {
  const classes = useStyles();
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      // Here you would normally send the question to your backend
      console.log("Question submitted:", question);
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setQuestion("");
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <Box className={classes.section}>
      <Box className={classes.titleContainer}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Post Your Questions & Get Featured on the  {" "}
          <span className={classes.highlight}>Gigaversity Podcast.</span>
        </Typography>
      </Box>

      <Typography className={classes.description}>
        Conversations with tech founders, industry leaders, hiring managers, and
        startup innovators—sharing trends, challenges, and real-world
        experiences shaping the future of tech.
      </Typography>
      <Box className={classes.glowEffect} />

      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.contentWrapper}>
          {/* Video Side */}
          <Box className={classes.videoWrapper}>
            {/* 
            <iframe
              className={classes.videoIframe}
              src="https://www.youtube.com/embed/IxRVa1DbSAg?si=eZ7wKjpvpVlOlrVU&autoplay=1&mute=1&loop=1&controls=0&playlist=IxRVa1DbSAg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              frameBorder="0"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            <Box className={classes.calloutBox}>
              <Typography className={classes.calloutText}>
                Catch the latest episode now!
              </Typography>

              <Button
                variant="contained"
                className={classes.watchButton}
                endIcon={<ArrowForwardIcon />}
                href="https://www.youtube.com/watch?v=IxRVa1DbSAg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube
              </Button>
            </Box>
            */}
            {/* Open-source image replacement */}
            <img
              src= {Launching}
              alt="Podcast Open Source"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "inherit",
                display: "block"
              }}
            />
          </Box>

          {/* Content Side */}
          <Box className={classes.contentBox}>
            

            <Paper
              className={classes.questionForm}
              elevation={2}
              sx={{
                background: "none",
                minWidth: {
                  xs: "100%",
                  sm: "100%", 
                  md: "500px"
                },
                backdropFilter: "blur(10px)",
                borderBottom: "1px solid ",
                borderRadius: "16px",
                "@media (max-width: 600px)": {
                  borderRadius: "12px",
                },
                "@media (max-width: 480px)": {
                  borderRadius: "10px",
                },
                "@media (max-width: 375px)": {
                  borderRadius: "8px",
                },
              }}
            >
              <Typography
                className={classes.questionTitle}
              >
                <QuestionAnswerIcon className={classes.questionIcon} />
                Have a Question for Founders, Co-Founders, or Recruiters?
              </Typography>

              <Typography
                variant="body2"
                sx={{ 
                  color: "#fff", 
                  mb: 2, 
                  opacity: 0.9, 
                  marginTop: "10px",
                  "@media (max-width: 600px)": {
                    fontSize: "0.9rem",
                  },
                  "@media (max-width: 480px)": {
                    fontSize: "0.85rem",
                  },
                  "@media (max-width: 375px)": {
                    fontSize: "0.8rem",
                  },
                }}
              >
                Share it here! Selected questions will be answered during our
                podcast, along with a special mention.
              </Typography>

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  variant="outlined"
                  placeholder="Type your question here..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  disabled={submitted}
                  className={classes.textField}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      color: "#000000",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#000000"
                      },
                      minHeight: "110px",
                      fontSize: "1.1rem",
                      alignItems: "flex-end",
                      "@media (max-width: 600px)": {
                        minHeight: "100px",
                        fontSize: "1rem",
                      },
                      "@media (max-width: 480px)": {
                        minHeight: "90px",
                        fontSize: "0.95rem",
                      },
                      "@media (max-width: 375px)": {
                        minHeight: "80px",
                        fontSize: "0.9rem",
                      },
                    },
                    "& textarea": {
                      paddingRight: "48px !important",
                      resize: "none"
                    }
                  }}
                  helperText={
                    submitted
                      ? "Thanks for submitting"
                      : "Keep it concise and specific for a better chance to be featured"
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ alignItems: "flex-end" }}>
                        <Button
                          type="submit"
                          variant="contained"
                          className={classes.submitButton}
                          disabled={!question.trim() || submitted}
                          sx={{
                            minWidth: 0,
                            width: 36,
                            height: 36,
                            p: 0,
                            boxShadow: 3,
                            fontSize: "1.2rem",
                            alignSelf: "flex-end",
                            "@media (max-width: 600px)": {
                              width: 32,
                              height: 32,
                              fontSize: "1.1rem",
                            },
                            "@media (max-width: 480px)": {
                              width: 30,
                              height: 30,
                              fontSize: "1rem",
                            },
                            "@media (max-width: 375px)": {
                              width: 28,
                              height: 28,
                              fontSize: "0.9rem",
                            },
                          }}
                        >
                          <SendIcon />
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PodcastShowcaseSection;