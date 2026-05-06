"use client";

import Image from "next/image";
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motion } from "motion/react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

export default function CampusCard({ title, image, location, description, highlights, index }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
      }}
      className="group"
      style={{ height: "100%" }}
    >
      <Card
        elevation={0}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '0.1rem',
          overflow: 'hidden',
          border: '1px solid var(--border-light)',
          backgroundColor: 'white',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'var(--accent)',
          },
        }}
      >
        {/* Section média avec superposition (overlay) */}
        <Box sx={{ position: 'relative', overflow: 'hidden', height: 280 }}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              p: 3,
              background: 'linear-gradient(to top, rgba(0,0,139,0.8) 0%, transparent 100%)',
            }}
          >
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <LocationOnIcon fontSize="small" sx={{ color: 'var(--bg-soft)' }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 600, letterSpacing: 1, color: 'var(--bg-soft)' }}>
                {location}
              </Typography>
            </Stack>
          </Box>
        </Box>

        <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h4"
            component="h3"
            gutterBottom
            sx={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              color: 'var(--primary)',
              mb: 2,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-muted)',
              mb: 4,
              lineHeight: 1.7,
              flexGrow: 1,
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
