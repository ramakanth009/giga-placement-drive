// src/components/blog/BlogPostCard.jsx
import React from "react";
import { Box, Typography, Paper, Chip, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import { scrollToTop } from "../../utils/scrollUtils";

const useStyles = makeStyles({
  cardContainer: {
    flex: "1 1 calc(33.333% - 20px)",
    minWidth: "300px",
    minHeight: "500px", // Added minimum height for card consistency
    overflow: "hidden",
    borderRadius: "12px !important",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05) !important",
    transition: "all 0.3s ease !important",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1) !important",
    },
    "@media (max-width: 1100px)": {
      flex: "1 1 calc(50% - 15px)",
      minHeight: "480px",
    },
    "@media (max-width: 700px)": {
      flex: "1 1 100%",
      minHeight: "450px",
    },
    "@media (max-width: 600px)": {
      minHeight: "420px",
    },
  },
  imageContainer: {
    height: "200px",
    overflow: "hidden",
    position: "relative",
    flexShrink: 0, // Prevent image from shrinking
    "@media (max-width: 600px)": {
      height: "180px",
    },
  },
  postImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  categoryBadge: {
    position: "absolute",
    top: "15px",
    left: "15px",
    padding: "6px 12px !important",
    borderRadius: "20px !important",
    backgroundColor: "#2A2B6A !important",
    color: "white !important",
    fontWeight: "bold !important",
    fontSize: "0.75rem !important",
    textTransform: "uppercase !important",
    zIndex: 2,
  },
  contentContainer: {
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1, // Allow content to grow and fill remaining space
    minHeight: "280px", // Minimum height for content consistency
    "@media (max-width: 1100px)": {
      minHeight: "260px",
    },
    "@media (max-width: 700px)": {
      minHeight: "250px",
    },
    "@media (max-width: 600px)": {
      padding: "20px",
      minHeight: "220px",
    },
  },
  postMeta: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "15px",
    color: "#777",
    fontSize: "0.85rem !important",
    flexShrink: 0, // Prevent meta from shrinking
    "@media (max-width: 600px)": {
      gap: "10px",
      marginBottom: "12px",
    },
  },
  metaItem: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    "& svg": {
      fontSize: "0.9rem",
    },
  },
  title: {
    fontSize: "1.35rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "12px !important",
    lineHeight: "1.4 !important",
    transition: "color 0.3s ease",
    minHeight: "60px", // Minimum height for title consistency
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    flexShrink: 0, // Prevent title from shrinking
    "&:hover": {
      color: "#4A4C9B !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.25rem !important",
      marginBottom: "10px !important",
      minHeight: "55px",
    },
  },
  excerpt: {
    fontSize: "0.95rem !important",
    color: "#555 !important",
    marginBottom: "20px !important",
    lineHeight: "1.6 !important",
    display: "-webkit-box",
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    minHeight: "82px", // Minimum height for excerpt consistency (3 lines)
    flexShrink: 0, // Prevent excerpt from shrinking
    "@media (max-width: 600px)": {
      fontSize: "0.9rem !important",
      marginBottom: "15px !important",
      minHeight: "68px",
    },
  },
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "20px",
    minHeight: "32px", // Minimum height for tags consistency
    alignItems: "flex-start",
    flexShrink: 0, // Prevent tags from shrinking
    "@media (max-width: 600px)": {
      marginBottom: "15px",
      minHeight: "30px",
    },
  },
  tag: {
    fontSize: "0.75rem !important",
    background: "rgba(42, 43, 106, 0.08) !important",
    color: "#2A2B6A !important",
    borderRadius: "15px !important",
    padding: "4px 12px !important",
    "&:hover": {
      background: "rgba(42, 43, 106, 0.15) !important",
    },
  },
  readMoreButton: {
    background: "linear-gradient(135deg, #2A2B6A 0%, #4A4C9B 100%) !important",
    color: "white !important",
    fontSize: "0.9rem !important",
    fontWeight: "600 !important",
    textTransform: "none !important",
    padding: "12px 24px !important",
    borderRadius: "25px !important",
    marginTop: "auto",
    alignSelf: "flex-start",
    boxShadow: "0 4px 15px rgba(42, 43, 106, 0.2) !important",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "100%",
      height: "100%",
      background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
      transition: "left 0.5s ease",
    },
    "&:hover": {
      transform: "translateY(-2px) scale(1.02)",
      boxShadow: "0 8px 25px rgba(42, 43, 106, 0.3) !important",
      background: "linear-gradient(135deg, #3A3D7A 0%, #5A5EA0 100%) !important",
    },
    "&:hover::before": {
      left: "100%",
    },
    "& .MuiButton-endIcon": {
      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      marginLeft: "8px",
    },
    "&:hover .MuiButton-endIcon": {
      transform: "translateX(6px) scale(1.1)",
    },
    "&:active": {
      transform: "translateY(0) scale(1)",
      transition: "transform 0.1s ease",
    },
  },
});

const BlogPostCard = ({ post }) => {
  const classes = useStyles();

  const handleReadMore = () => {
    scrollToTop();
  };

  return (
    <Paper className={classes.cardContainer} elevation={0}>
      <Box className={classes.imageContainer}>
        <img
          src={post.image}
          alt={post.imageAlt || post.title || "Blog post image"}
          className={classes.postImage}
        />
        {post.featuredCategory && (
          <Chip
            label={post.featuredCategory}
            className={classes.categoryBadge}
          />
        )}
      </Box>

      <Box className={classes.contentContainer}>
        <Box className={classes.postMeta}>
          <Box className={classes.metaItem}>
            <CalendarTodayIcon fontSize="small" />
            <Typography variant="caption">{post.date}</Typography>
          </Box>
          <Box className={classes.metaItem}>
            <PersonIcon fontSize="small" />
            <Typography variant="caption">{post.author}</Typography>
          </Box>
        </Box>

        <Link to={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
          <Typography variant="h3" className={classes.title}>
            {post.title}
          </Typography>
        </Link>

        <Typography variant="body2" className={classes.excerpt}>
          {post.excerpt}
        </Typography>

        <Box className={classes.tagsContainer}>
          {post.tags.slice(0, 3).map((tag, index) => (
            <Chip key={index} label={tag} className={classes.tag} />
          ))}
        </Box>

        <Button
          component={Link}
          to={`/blog/${post.slug}`}
          className={classes.readMoreButton}
          endIcon={<ArrowForwardIcon />}
          onClick={handleReadMore}
          title={`Read more about ${post.title}`}
        >
          Read More
        </Button>
      </Box>
    </Paper>
  );
};

export default BlogPostCard;