import { Container, Typography, Box, Paper, Grid } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PenPal World",
    period: "Nov 2024 - Ongoing",
    description: [
      "Built the complete front-end using React.js with responsive design and modern UI.",
      "Integrated real-time messaging using Socket.io and WebSockets.",
      "Ensured smooth API integration and user-centric interaction workflows.",
    ],
    tech: "React.js, Socket.io, JavaScript, HTML5, CSS3",
  },
  {
    title: "View.com.au",
    description: [
      "Contributed to the front-end of a large-scale property listing site.",
      "Managed server-side rendering using Next.js to improve performance and SEO.",
    ],
    tech: "React.js, Next.js",
  },
  {
    title: "Matador",
    description: [
      "Developed an enhanced monitoring interface similar to AWS CloudWatch using React.js and TypeScript.",
      "Implemented secure user authentication and role-based access control.",
    ],
    tech: "React.js, TypeScript",
  },
  {
    title: "ICICI Bank Dashboard",
    description: [
      "Translated Figma prototypes into production-ready Angular applications.",
      "Managed API integrations and UI flows for seamless banking dashboard experience.",
    ],
    tech: "Angular, HTML, SCSS",
  },
];

function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" gutterBottom>
          Projects
        </Typography>
      </motion.div>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {projects.map((project, idx) => (
          <Grid item xs={12} md={6} key={project.title}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "divider",
                  "&:hover": {
                    boxShadow: 2,
                    borderColor: "primary.main",
                  },
                }}
              >
                <Typography variant="h5" color="primary" gutterBottom>
                  {project.title}{" "}
                  {project.period && (
                    <span
                      style={{
                        fontWeight: 400,
                        fontSize: "1rem",
                        color: "#888",
                      }}
                    >
                      ({project.period})
                    </span>
                  )}
                </Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  {project.description.map((desc, i) => (
                    <Typography
                      component="li"
                      key={i}
                      sx={{ color: "text.secondary", mb: 1 }}
                    >
                      {desc}
                    </Typography>
                  ))}
                </Box>
                <Typography variant="body2" color="primary">
                  Tech Stack: {project.tech}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
