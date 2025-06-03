// src/components/homepagecomponets/podcastshowcase/PodcastShowcaseSection.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Container,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

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
    "@media (max-width: 960px)": {
      padding: "50px 0",
    },
    "@media (max-width: 600px)": {
      padding: "40px 0",
    },
  },
  container: {
    position: "relative",
    zIndex: 2,
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "40px",
    "@media (max-width: 960px)": {
      flexDirection: "column",
      gap: "30px",
    },
  },
  videoWrapper: {
    flex: "1.5", // Changed from 1 to 1.5 to make it larger
    position: "relative",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    aspectRatio: "16/9",
    maxWidth: "800px", // Added maxWidth for larger screens
    margin: "0 auto", // Center the video wrapper
    "@media (max-width: 960px)": {
      width: "100%",
      maxWidth: "100%", // Full width on mobile
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
  },
  contentBox: {
    flex: "1",
    color: "white",
    "@media (max-width: 960px)": {
      textAlign: "center",
      maxWidth: "600px",
    },
    "& .MuiPaper-root": {
      marginTop: "0px",
    }
  },
  highlight: {
    color: "#FFC614",
    fontWeight: "bold",
  },
  title: {
    fontSize: "2.5rem !important",
    fontWeight: "bold !important",
    marginBottom: "20px !important",
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
  },
  titleContainer: {
    textAlign: "center",
    marginBottom: "40px",
    "@media (max-width: 960px)": {
      marginBottom: "30px",
    },
    "@media (max-width: 600px)": {
      marginBottom: "25px",
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
    "@media (max-width: 600px)": {
      fontSize: "1rem !important",
      marginBottom: "20px !important",
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
    "@media (max-width: 600px)": {
      flexDirection: "column",
      padding: "15px 20px",
    },
  },
  calloutText: {
    fontSize: "0.8rem !important",
    fontWeight: "600 !important",
    color: "#2A2B6A !important",
    margin: "0 !important",
    "@media (max-width: 600px)": {
      fontSize: "1.1rem !important",
      marginBottom: "15px !important",
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
    "@media (max-width: 600px)": {
      padding: "10px 20px !important",
      fontSize: "0.9rem !important",
    },
  },
  questionForm: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    "@media (max-width: 600px)": {
      padding: "15px",
    },
  },
  questionTitle: {
    fontSize: "1.2rem !important",
    fontWeight: "600 !important",
    marginBottom: "15px !important",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    "@media (max-width: 600px)": {
      fontSize: "1.1rem !important",
    },
  },
  questionIcon: {
    color: "#FFC614",
  },
  textField: {
    marginBottom: "15px !important",
    "& .MuiOutlinedInput-root": {
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
      color: "rgba(255, 255, 255, 0.5)",
      "&.Mui-focused": {
        color: "rgba(255, 255, 255, 0.5)",
      },
    },
  },
  submitButton: {
    backgroundColor: "#FFC614 !important",
    color: "#3c3e8f !important",
    padding: "10px 25px !important",
    borderRadius: "50px !important",
    fontWeight: "600 !important",
    fontSize: "0.9rem !important",
    textTransform: "none !important",
    transition: "all 0.3s ease !important",
    "&:hover": {
      backgroundColor: "#3c3e8f !important",
      color: "#FFC614 !important",
      transform: "translateY(-2px)",
    },
    "@media (max-width: 600px)": {
      padding: "8px 20px !important",
      fontSize: "0.85rem !important",
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
    "@media (max-width: 960px)": {
      width: "400px",
      height: "400px",
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
          Real Voices. {" "}
          <span className={classes.highlight}>Real Insights.</span>
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
          {/* <Box className={classes.videoWrapper}>
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
          </Box> */}

          {/* Content Side */}
          <Box className={classes.contentBox}>
            

            <Paper
              className={classes.questionForm}
              elevation={3} // Changed from 0 to 3 for better visibility
              sx={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "16px",
                padding: "24px",
                marginTop: "32px",
              }}
            >
              <Typography
                className={classes.questionTitle}
                sx={{ color: "#fff" }}
              >
                <QuestionAnswerIcon className={classes.questionIcon} />
                Have a question for hiring managers or recruiters?
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#fff", mb: 2, opacity: 0.9 }}
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
                      color:"#000000",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color:"#000000"
                      },
                    },
                  }}
                  helperText="Keep it concise and specific for a better chance to be featured"
                />

                <Button
                  type="submit"
                  variant="contained"
                  className={classes.submitButton}
                  endIcon={submitted ? null : <SendIcon />}
                  disabled={!question.trim() || submitted}
                >
                  {submitted ? "Question Submitted!" : "Post your question"}
                </Button>
              </form>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PodcastShowcaseSection;
