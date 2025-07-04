import { Container, Typography, Box, Paper, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const contactInfo = [
  {
    icon: <EmailIcon fontSize="large" />,
    title: 'Email',
    value: 'yashchavdasimba@gmail.com',
    link: 'mailto:yashchavdasimba@gmail.com',
  },
  {
    icon: <PhoneIcon fontSize="large" />,
    title: 'Phone',
    value: '+91 8320580928',
    link: 'tel:+918320580928',
  },
  {
    icon: <LocationOnIcon fontSize="large" />,
    title: 'Location',
    value: 'Ahmedabad, Gujarat',
    link: null,
  },
  {
    icon: <LinkedInIcon fontSize="large" />,
    title: 'Website',
    value: 'www.phirangy.com',
    link: 'https://www.phirangy.com',
  },
];

function Contact() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 6 }}>
          I'm always open to new opportunities and collaborations
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {contactInfo.map((info, index) => (
          <Grid item xs={12} sm={6} key={info.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: 2,
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {info.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {info.title}
                </Typography>
                {info.link ? (
                  <Button
                    variant="text"
                    href={info.link}
                    target={info.title === 'LinkedIn' ? '_blank' : '_self'}
                    rel={info.title === 'LinkedIn' ? 'noopener noreferrer' : ''}
                    sx={{
                      textTransform: 'none',
                      fontSize: '1rem',
                      p: 0,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'primary.main',
                      },
                    }}
                  >
                    {info.value}
                  </Button>
                ) : (
                  <Typography color="text.secondary">
                    {info.value}
                  </Typography>
                )}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Let's Work Together
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
            Whether you're looking for an experienced professional in web development, 
            project management, or UX design, I'm here to help bring value to your organization.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="mailto:yashchavdasimba@gmail.com"
            sx={{ borderRadius: 2 }}
          >
            Send Email
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Contact; 