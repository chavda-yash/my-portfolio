import { Container, Typography, Box, Paper, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: [
      'React.js',
      'Next.js',
      'Angular',
      'JavaScript',
      'TypeScript',
      'Redux',
    ],
  },
  {
    title: 'Styling',
    skills: [
      'Tailwind CSS',
      'MUI',
      'CSS3',
      'HTML5',
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'GitHub',
      'Responsive Web Design',
      'WebSockets',
    ],
  },
];

const certifications = [
  {
    title: 'Project Management Professional',
    issuer: 'Google',
    date: 'January 2025',
  },
  {
    title: 'UX Design Professional',
    issuer: 'Google',
    date: 'June 2024',
  },
  {
    title: 'AI Essentials Professional',
    issuer: 'Google',
    date: 'May 2024',
  },
];

function Skills() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" gutterBottom>
          Skills & Expertise
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {skillCategories.map((category, index) => (
          <Grid item xs={12} md={6} key={category.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                }}
              >
                <Typography variant="h5" color="primary" gutterBottom>
                  {category.title}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {category.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        borderRadius: 2,
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

  

      <Typography variant="h3" sx={{ mt: 8, mb: 4 }}>
        Education
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>L.J. University</Typography>
            <Typography color="text.secondary">Diploma in Computer Engineering, 2018 - 2021</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>Logicrays Academy</Typography>
            <Typography color="text.secondary">Training in React.js, Next.js, Redux, TypeScript</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Skills; 