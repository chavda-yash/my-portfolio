import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        minHeight: "calc(100vh - 64px)", // Subtract navbar height
        width: "100%",
        py: { xs: 4, md: 0 }, // Add padding on mobile
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 3, md: 4 },
            maxWidth: "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                fontWeight: 700,
                mb: { xs: 1, md: 2 },
                wordBreak: "break-word",
              }}
            >
              Yash Chavda
            </Typography>
            <Typography
              variant="h2"
              color="primary"
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                fontWeight: 600,
                mb: { xs: 2, md: 3 },
              }}
            >
              Front-End Web Developer
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                maxWidth: "800px",
                mb: { xs: 3, md: 4 },
                color: "text.secondary",
              }}
            >
              As a dedicated Front-End Web Developer, I am passionate about
              crafting seamless and intuitive user experiences. With a strong
              foundation in HTML, CSS, and JavaScript, and advanced skills in
              frameworks like React.js and Next.js, I continuously strive to
              build high-performance, responsive web applications.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Box
              sx={{
                display: "flex",
                gap: { xs: 2, md: 3 },
                flexDirection: { xs: "column", sm: "row" },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Button
                component={Link}
                to="/experience"
                variant="contained"
                size="large"
                fullWidth={false}
                sx={{
                  borderRadius: 2,
                  py: { xs: 1.5, md: 2 },
                  px: { xs: 4, md: 6 },
                  "&:hover": {
                    color: "#fff", // Keep text white on hover
                  },
                }}
              >
                View Experience
              </Button>
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                size="large"
                fullWidth={false}
                sx={{
                  borderRadius: 2,
                  py: { xs: 1.5, md: 2 },
                  px: { xs: 4, md: 6 },
                }}
              >
                Contact Me
              </Button>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 1, sm: 2 },
                alignItems: { xs: "flex-start", sm: "center" },
                mt: { xs: 3, md: 4 },
              }}
            >
              <Typography variant="body2" color="text.secondary">
                +91 8320580928 | yashchavdasimba@gmail.com | www.phirangy.com
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
