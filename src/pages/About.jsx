import { Container, Typography, Box, Paper, Grid } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const highlights = [
  {
    icon: <WorkIcon fontSize="large" />,
    title: "Professional Experience",
    description:
      "Over 2 years of experience in responsive web development, project management, and team leadership roles.",
  },
  {
    icon: <StarIcon fontSize="large" />,
    title: "Key Achievements",
    description:
      "Made over 1000+ responsive web paes with absolute finominal user experience.",
  },
  {
    icon: <TrendingUpIcon fontSize="large" />,
    title: "Impact Driven",
    description:
      "Consistently exceeded targets and implemented data-driven solutions for process optimization.",
  },
  {
    icon: <SchoolIcon fontSize="large" />,
    title: "Education",
    description: "Diploma in computer engineering from LJ University.",
  },
];

function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" gutterBottom>
          About Me
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "1.2rem", mb: 6, maxWidth: "800px" }}
        >
          As a dedicated Front-End Web Developer, I am passionate about crafting
          seamless and intuitive user experiences. With a strong foundation in
          HTML, CSS, and JavaScript, and advanced skills in frameworks like
          React.js and Next.js, I continuously strive to build high-performance,
          responsive web applications
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {highlights.map((highlight, index) => (
          <Grid item xs={12} md={6} key={highlight.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  "&:hover": {
                    borderColor: "primary.main",
                    boxShadow: 2,
                  },
                }}
              >
                <Box sx={{ color: "primary.main", mb: 2 }}>
                  {highlight.icon}
                </Box>
                <Typography variant="h5" gutterBottom>
                  {highlight.title}
                </Typography>
                <Typography color="text.secondary">
                  {highlight.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" gutterBottom>
            Professional Philosophy
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", color: "text.secondary" }}
          >
            I believe in leveraging data-driven insights to foster growth and
            streamline processes. My approach combines strategic thinking with
            practical execution, ensuring that every project not only meets its
            objectives but also contributes to long-term organizational success.
            I am passionate about creating efficient workflows, building strong
            teams, and delivering solutions that make a real impact.
          </Typography>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Box sx={{ mt: 6 }}>
          <Typography variant="h3" gutterBottom>
            Current Focus
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", color: "text.secondary" }}
          >
            As an Analyst in Administration at eXp Realty India, I focus on
            strategic operations leadership, process improvements, and enhancing
            agent engagement. I'm currently pursuing advanced certifications in
            Project Management, UX Design, and AI Essentials to further enhance
            my professional capabilities and stay at the forefront of industry
            developments.
          </Typography>
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Box sx={{ mt: 6 }}>
          <Typography variant="h3" gutterBottom>
            Education
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", color: "text.secondary" }}
          >
            L.J. University: Diploma in Computer Engineering, 2018 - 2021
            <br />
            Logicrays Academy: Training in React.js, Next.js, Redux, TypeScript
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
}

export default About;
