import { useState, type FormEvent } from 'react'
import { Box, Typography, TextField, Button, Paper, Stack } from '@mui/material'
import SupportTicket from '../../components/customer/SupportTicket'

function CustomerHelpPage () {
  const [question, setQuestion] = useState('')

  const customerName = 'Customer (Sravanthi)'

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!question.trim()) {
      return
    }

    console.log('Customer question:', question)
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f7fb',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {/* Header */}
      <Box
        sx={{
          height: 60,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 1.5
        }}
      >
        {/* Logo and brand */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: '#1765c0',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff'
            }}
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2.2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='M4 5h16v11H9l-5 4z'></path>
              <path d='M9 10.5h6'></path>
            </svg>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 700,
                color: '#111827',
                lineHeight: 1.3
              }}
            >
              SupportIQ
            </Typography>

            <Typography
              sx={{
                fontSize: 12,
                color: '#64748b'
              }}
            >
              ABC Retail · help centre
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography
            sx={{
              fontSize: 12,
              color: '#1d4ed8',
              whiteSpace: 'nowrap'
            }}
          >
            View as
          </Typography>
          <Button
            variant='contained'
            disableElevation
            sx={{
              height: 38,
              borderRadius: 1.5,
              border: '1px solid #000000',
              backgroundColor: '#ffffff'
            }}
          >
            <Typography
              sx={{
                color: '#000000',
                fontSize: 14
              }}
            >
              {customerName}
            </Typography>
          </Button>
        </Box>
      </Box>

      {/* Main content */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '1080px',
          mx: 'auto',
          px: { xs: 2, sm: 3 },
          py: { xs: 2, sm: 4 },
          boxSizing: 'border-box'
        }}
      >
        <Paper
          elevation={0}
          sx={{
            backgroundColor: '#2167bd',
            color: '#ffffff',
            borderRadius: 3,
            px: { xs: 3, sm: 5 },
            py: 4
          }}
        >
          <Typography
            component='h1'
            sx={{
              fontSize: { xs: 26, sm: 34 },
              fontWeight: 700,
              letterSpacing: '-0.8px',
              lineHeight: 1.25,
              mb: 0.5
            }}
          >
            How can we help, {customerName.split(' ')[0]}?
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              mb: 2
            }}
          >
            Search our help articles. If they don't answer it, our team will.
          </Typography>

          {/* Search form */}
          <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              gap: 1,
              maxWidth: 680,
              flexDirection: { xs: 'column', sm: 'row' }
            }}
          >
            <TextField
              fullWidth
              value={question}
              onChange={event => setQuestion(event.target.value)}
              placeholder='For example: my refund has not arrived'
              variant='outlined'
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: 1.5,
                '& .MuiOutlinedInput-root': {
                  height: 49,
                  borderRadius: 1.5,
                  fontSize: 16,
                  '& fieldset': {
                    border: 'none'
                  }
                }
              }}
            />

            <Button
              type='submit'
              variant='contained'
              disableElevation
              sx={{
                height: 49,
                minWidth: 120,
                backgroundColor: '#ffffff',
                color: '#1556a8',
                fontSize: 13,
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: 1.5,
                whiteSpace: 'nowrap',
                '&:hover': {
                  backgroundColor: '#f1f5f9'
                }
              }}
            >
              Get an answer
            </Button>
          </Box>
        </Paper>
        <SupportTicket />

        {/* Popular Articles Section */}

        <Paper
          elevation={0}
          sx={{
            p: 2,
            mt: 8,
            
            width: '100%',
            boxSizing: 'border-box',
            border: '1px solid #dce2ec',
            borderRadius: '11px'
          }}
        >
          <Typography
            sx={{
              fontSize: '15px',
              fontWeight: 600,
              color: '#111827',
              mb: 1.5,
            
            }}
          >
            Popular articles
          </Typography>

          <Stack spacing={0.75}>
            {[
              {
                title: 'Tracking your order and delivery timelines',
                category: 'Orders & delivery'
              },
              {
                title: 'Returns and exchanges: eligibility and pickup',
                category: 'Returns & refunds'
              },
              {
                title: 'Login and OTP troubleshooting',
                category: 'Account & login'
              },
              {
                title: 'How refunds work and how long they take',
                category: 'Billing & payments'
              },
              {
                title: 'Why a coupon code may not apply',
                category: 'Website & app issues'
              },
              {
                title: 'Package shows delivered but is missing',
                category: 'Orders & delivery'
              }
            ].map((article, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 2,
                  p: 1,
                  border: '1px solid #dce2ec',
                  borderRadius: '6px',
                  backgroundColor: '#f6f8fb',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#edf2f9'
                  }
                }}
              >
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: '#163b72'
                  }}
                >
                  {article.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '12px',
                    color: '#64748b',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {article.category}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Paper>

        {/* Footer Text */}

        <Typography
          sx={{
            mt: 1.5,
            fontSize: '12px',
            color: '#8492a6'
          }}
        >
          Sample help centre for a fictional company. Answers come only from
          published public articles.
        </Typography>
      </Box>
    </Box>
  )
}

export default CustomerHelpPage
