import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Freelance Web Developer',
    company: '',
    period: 'Nov 2024 - Present',
    location: '',
    description: [
      'Collaborated with various clients to design and develop responsive and scalable web applications.',
      'Delivered front-end solutions using React.js, Next.js, and Tailwind CSS for e-commerce, landing pages, and social platforms.',
      'Ensured performance optimization and cross-browser compatibility for deployed projects.',
    ],
  },
  {
    title: 'Web Developer',
    company: 'Digiqt Technolabs',
    period: 'May 2024 - Nov 2024',
    location: '',
    description: [
      'Gained hands-on experience in Angular.',
      'Implemented Angular Material UI to enhance user interface and user experience.',
    ],
  },
  {
    title: 'Web Developer',
    company: 'Avesta Technologies',
    period: 'April 2022 - March 2024',
    location: '',
    description: [
      'Contributed to multiple front-end development projects.',
      'Developed and maintained responsive web apps using React.js, Tailwind CSS, and Next.js.',
      'Worked collaboratively with cross-functional teams to ensure design consistency and functionality.',
    ],
  },
];

function Experience() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" gutterBottom>
          Work Experience
        </Typography>
      </motion.div>

      <Box sx={{ mt: 4 }}>
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                mb: 3,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  boxShadow: 2,
                  borderColor: 'primary.main',
                },
              }}
            >
              <Typography variant="h5" color="primary" gutterBottom>
                {experience.title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {experience.company}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {experience.period} | {experience.location}
              </Typography>
              <Box component="ul" sx={{ mt: 2 }}>
                {experience.description.map((item, i) => (
                  <Typography
                    component="li"
                    key={i}
                    sx={{ mb: 1, color: 'text.secondary' }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}

export default Experience; 