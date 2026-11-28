import { useState, type FormEvent } from 'react'

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  Chip,
  Stack
} from '@mui/material'

import AttachFileIcon from '@mui/icons-material/AttachFile'

interface Ticket {
  id: string
  subject: string
  updated: string
  status: 'Open' | 'Pending' | 'Resolved'
}

const initialTickets: Ticket[] = [
  {
    id: 'SIQ-10398',
    subject: 'Delivery delayed again for #4798659',
    updated: 'updated 4h ago',
    status: 'Open'
  },
  {
    id: 'SIQ-10381',
    subject: 'Package marked delivered but not received',
    updated: 'updated 11h ago',
    status: 'Pending'
  },
  {
    id: 'SIQ-10352',
    subject: 'Item arrived damaged',
    updated: 'updated 2d ago',
    status: 'Open'
  },
  {
    id: 'SIQ-10346',
    subject: 'Warranty terms for wireless earbuds',
    updated: 'updated 1d ago',
    status: 'Resolved'
  }
]

const SupportTicket = () => {
  const [subject, setSubject] = useState('')
  const [topic, setTopic] = useState('Orders & delivery')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const [tickets, setTickets] = useState<Ticket[]>(initialTickets)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!subject.trim() || !description.trim()) {
      return
    }

    if (file && file.size > 10 * 1024 * 1024) {
      alert('File size should not exceed 10 MB')
      return
    }

    const newTicket: Ticket = {
      id: `SIQ-${Date.now().toString().slice(-5)}`,
      subject,
      updated: 'updated just now',
      status: 'Open'
    }

    setTickets(prev => [newTicket, ...prev])

    setSubject('')
    setTopic('Orders & delivery')
    setDescription('')
    setFile(null)

    e.currentTarget.reset()
  }

  const getStatusColor = (status: Ticket['status']) => {
    switch (status) {
      case 'Open':
        return {
          backgroundColor: '#d8e7f9',
          color: '#0759b4'
        }

      case 'Pending':
        return {
          backgroundColor: '#f1e5d6',
          color: '#b45a00'
        }

      case 'Resolved':
        return {
          backgroundColor: '#d5eae6',
          color: '#00866e'
        }

      default:
        return {}
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        mt: 2,
        boxSizing: 'border-box'
      }}
    >
      {/* Main Container */}

      <Box
        sx={{
          mx: 'auto'
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr'
            },
            gap: {
              xs: 3,
              sm: 3,
              md: 2
            },
            alignItems: 'stretch'
          }}
        >
          {/* LEFT SIDE - RAISE TICKET */}

          <Paper
            elevation={0}
            sx={{
              p: 2,
              border: '1px solid #dce2ec',
              borderRadius: '11px',
              height: '100%'
            }}
          >
            <Typography
              variant='h6'
              sx={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#111827',
                mb: 2
              }}
            >
              Still need help? Raise a ticket
            </Typography>

            <Box
              component='form'
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5
              }}
            >
              {/* Subject */}

              <Box>
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: '#344b73',
                    mb: 0.5
                  }}
                >
                  Subject
                </Typography>

                <TextField
                  fullWidth
                  size='small'
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '6px',
                      fontSize: '14px',
                      backgroundColor: '#fff'
                    }
                  }}
                />
              </Box>

              {/* Topic */}

              <Box>
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: '#344b73',
                    mb: 0.5
                  }}
                >
                  Topic
                </Typography>

                <TextField
                  select
                  fullWidth
                  size='small'
                  value={topic}
                  onChange={e => setTopic(e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '6px',
                      fontSize: '14px',
                      backgroundColor: '#fff'
                    }
                  }}
                >
                  <MenuItem value='Billings & Payments'>
                    Billings & Payments
                  </MenuItem>

                  <MenuItem value='Orders & delivery'>
                    Orders & delivery
                  </MenuItem>

                  <MenuItem value='Returns & refunds'>
                    Returns & refunds
                  </MenuItem>

                  <MenuItem value='Account & login'>Account & login</MenuItem>

                  <MenuItem value='Website & App issues'>
                    Website & App issues
                  </MenuItem>

                  <MenuItem value='Product questions'>
                    Product questions
                  </MenuItem>
                </TextField>
              </Box>

              {/* Description */}

              <Box>
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: '#344b73',
                    mb: 0.5
                  }}
                >
                  Describe the problem
                </Typography>

                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '6px',
                      fontSize: '14px',
                      backgroundColor: '#fff'
                    }
                  }}
                />
              </Box>

              {/* Attachment */}

              <Box>
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: '#344b73',
                    mb: 1
                  }}
                >
                  Attachment (optional, up to 10 MB)
                </Typography>

                <Button
                  component='label'
                  variant='outlined'
                  size='small'
                  startIcon={<AttachFileIcon />}
                  sx={{
                    textTransform: 'none',
                    color: '#344b73',
                    borderColor: '#c7d2e3',
                    fontSize: '12px'
                  }}
                >
                  {file ? file.name : 'Choose file'}

                  <input
                    hidden
                    type='file'
                    accept='image/*,.pdf,.doc,.docx'
                    onChange={e => setFile(e.target.files?.[0] ?? null)}
                  />
                </Button>
              </Box>

              {/* Submit Button */}

              <Box>
                <Button
                  type='submit'
                  variant='contained'
                  sx={{
                    backgroundColor: '#1765c9',
                    textTransform: 'none',
                    fontSize: '13px',
                    fontWeight: 600,
                    borderRadius: '6px',
                    px: 2,
                    py: 1,
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#0e4fa5',
                      boxShadow: 'none'
                    }
                  }}
                >
                  Submit ticket
                </Button>
              </Box>
            </Box>
          </Paper>

          {/* RIGHT SIDE - MY TICKETS */}

          <Paper
            elevation={0}
            sx={{
              p: 2,
              border: '1px solid #dce2ec',
              borderRadius: '11px',
              height: '100%'
            }}
          >
            <Typography
              variant='h6'
              sx={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#111827',
                mb: 2
              }}
            >
              My tickets
            </Typography>

            <Stack spacing={0.75}>
              {tickets.map(ticket => (
                <Box
                  key={ticket.id}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1,
                    backgroundColor: '#f6f8fb',
                    border: '1px solid #dce2ec',
                    borderRadius: '6px',
                    p: 1,
                    minHeight: '50px'
                  }}
                >
                  {/* Ticket Information */}

                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        color: '#163b72',
                        lineHeight: 1.5
                      }}
                    >
                      <Box
                        component='span'
                        sx={{
                          fontSize: '11px',
                          color: '#344b73'
                        }}
                      >
                        {ticket.id}
                      </Box>{' '}
                      {ticket.subject}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '12px',
                        color: '#64748b',
                        mt: 0.25
                      }}
                    >
                      {ticket.updated}
                    </Typography>
                  </Box>

                  {/* Ticket Status */}

                  <Chip
                    label={ticket.status}
                    size='small'
                    sx={{
                      ...getStatusColor(ticket.status),
                      fontSize: '12px',
                      fontWeight: 600,
                      borderRadius: '13px',
                      height: '30px'
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  )
}

export default SupportTicket;
