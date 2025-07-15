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
    overflow: "hidden",
    borderRadius: "12px !important",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05) !important",
    transition: "all 0.3s ease !important",
    position: "relative",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1) !important",
    },
    "@media (max-width: 1100px)": {
      flex: "1 1 calc(50% - 15px)",
    },
    "@media (max-width: 700px)": {
      flex: "1 1 100%",
    },
  },
  imageContainer: {
    height: "200px",
    overflow: "hidden",
    position: "relative",
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
    "@media (max-width: 600px)": {
      padding: "20px",
    },
  },
  postMeta: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "15px",
    color: "#777",
    fontSize: "0.85rem !important",
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
    "&:hover": {
      color: "#4A4C9B !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.25rem !important",
      marginBottom: "10px !important",
    },
  },
  excerpt: {
    fontSize: "0.95rem !important",
    color: "#555 !important",
    marginBottom: "20px !important",
    lineHeight: "1.6 !important",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "@media (max-width: 600px)": {
      fontSize: "0.9rem !important",
      marginBottom: "15px !important",
    },
  },
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "20px",
    "@media (max-width: 600px)": {
      marginBottom: "15px",
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
    color: "#2A2B6A !important",
    fontSize: "0.9rem !important",
    fontWeight: "bold !important",
    textTransform: "none !important",
    padding: "8px 0 !important",
    "& .MuiButton-endIcon": {
      transition: "transform 0.3s ease",
    },
    "&:hover .MuiButton-endIcon": {
      transform: "translateX(4px)",
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
