# Entrümpelung Funnel Form - Setup Guide

## Overview

This is a comprehensive 8-step conversion funnel for the Entrümpelung (clearance) service page. The funnel collects detailed information about the customer's clearance needs and sends the data via email using Resend.

## Features

- ✅ 8 interactive steps with progress tracking
- ✅ Photo upload using Vercel Blob Storage
- ✅ Form validation with React Hook Form + Zod
- ✅ Draft saving with localStorage
- ✅ Email notifications to customer and BC Group
- ✅ Full-screen modal with animations
- ✅ Mobile-responsive design
- ✅ Thank-you page with WhatsApp integration

## Setup Instructions

### 1. Install Dependencies

Dependencies are already installed:
```bash
npm install @vercel/blob resend
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Then add your API keys:

#### Vercel Blob Storage
1. Go to https://vercel.com/dashboard/stores
2. Create a new Blob store (if not exists)
3. Copy the `BLOB_READ_WRITE_TOKEN`
4. Add to `.env.local`:
```
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_XXXXXXXXXXXXXX
```

#### Resend Email API
1. Sign up at https://resend.com
2. Verify your domain (or use the test mode)
3. Create an API key at https://resend.com/api-keys
4. Add to `.env.local`:
```
RESEND_API_KEY=re_XXXXXXXXXXXXXX
```

#### Email Configuration
Update these values in `.env.local`:
```
INTERNAL_EMAIL=info@bcgroup-berlin.de
FROM_EMAIL=noreply@bcgroup-berlin.de
```

### 3. Deploy to Vercel

When deploying to Vercel, add the environment variables in the project settings:
1. Go to your project → Settings → Environment Variables
2. Add `BLOB_READ_WRITE_TOKEN`
3. Add `RESEND_API_KEY`
4. Add `INTERNAL_EMAIL`
5. Add `FROM_EMAIL`

## File Structure

```
components/
├── forms/
│   ├── EntruempelungFunnelForm.tsx      # Main funnel component
│   ├── FunnelCTA.tsx                    # CTA button wrapper
│   └── funnel-steps/                    # Individual step components
│       ├── Step1ServiceType.tsx
│       ├── Step2PropertyDetails.tsx
│       ├── Step3ScopeSize.tsx
│       ├── Step4SpecialItems.tsx
│       ├── Step5Dismantling.tsx
│       ├── Step6Timing.tsx
│       ├── Step7AdditionalInfo.tsx
│       └── Step8Summary.tsx
└── ui/
    └── FunnelModal.tsx                  # Full-screen modal wrapper

app/
├── api/
│   ├── upload-photos/
│   │   └── route.ts                     # Vercel Blob upload endpoint
│   └── entruempelung-funnel/
│       └── route.ts                     # Resend email endpoint
└── services/
    └── entruempelung/
        ├── page.tsx                     # Updated with funnel CTAs
        └── danke/
            └── page.tsx                 # Thank-you page
```

## Usage

The funnel is integrated into the Entrümpelung page at three locations:

1. **Hero Section**: Primary CTA button
2. **FAQ Section**: Secondary CTA for conversion recovery
3. **Final CTA Section**: Main conversion point

### Triggering the Funnel

```tsx
import { FunnelCTAButton } from '@/components/forms/FunnelCTA'

// In your component
<FunnelCTAButton />
```

## How It Works

### Step-by-Step Flow

1. **Step 1**: Service type selection (Wohnung, Haus, Keller, etc.)
2. **Step 2**: Property details (floor, elevator, parking)
3. **Step 3**: Scope and size (area, fullness level)
4. **Step 4**: Special items (electronics, construction debris, etc.)
5. **Step 5**: Dismantling requirements
6. **Step 6**: Timing preferences + optional photo upload
7. **Step 7**: Additional notes + object address (if different)
8. **Step 8**: Contact information + summary review

### Data Flow

1. User fills out the form (draft auto-saved to localStorage)
2. Photos uploaded to Vercel Blob (optional)
3. Form submitted to `/api/entruempelung-funnel`
4. Two emails sent via Resend:
   - Customer confirmation with next steps
   - Internal notification to BC Group with all details
5. User redirected to thank-you page

## Email Templates

### Customer Email
- Professional HTML design
- Order summary
- Timeline with 3 steps
- WhatsApp quick contact link
- Trust badges

### Internal Email
- Comprehensive form data
- All customer details
- Project specifications
- Photo links (if uploaded)
- Quick action buttons (call, email, WhatsApp)

## Testing

### Test the Funnel Locally

1. Start the dev server:
```bash
npm run dev
```

2. Navigate to: http://localhost:3000/services/entruempelung

3. Click "Jetzt unverbindlich anfragen" button

4. Fill out the form and test:
   - Step navigation
   - Form validation
   - Photo upload (requires Vercel Blob token)
   - Draft saving (check localStorage)
   - Email sending (requires Resend API key)

### Test Photo Upload

Make sure your `.env.local` has the Blob token, then:
1. Go to Step 6
2. Select photos (JPG, PNG, WebP max 10MB)
3. Photos should upload and display preview
4. Check Vercel dashboard for uploaded files

### Test Email Sending

Make sure your `.env.local` has the Resend API key, then:
1. Complete all steps
2. Submit the form
3. Check your email for customer confirmation
4. Check internal email inbox for notification

## Customization

### Changing Colors

The funnel uses the existing design system colors:
- `secondary` (#0066CC) - Primary brand color
- `accent` (#FF6B35) - Accent color
- `primary` (dark) - Text color

Update in `tailwind.config.ts` to change globally.

### Modifying Steps

To add/remove/modify steps:
1. Create/edit step component in `components/forms/funnel-steps/`
2. Update `EntruempelungFunnelForm.tsx`:
   - Add to `renderStep()` function
   - Update `TOTAL_STEPS` constant
   - Add fields to Zod schema
   - Add to TypeScript type
3. Update email templates in `app/api/entruempelung-funnel/route.ts`

### Changing Email Content

Edit the email HTML in `app/api/entruempelung-funnel/route.ts`:
- `generateCustomerEmail()` - Customer confirmation
- `generateInternalEmail()` - Internal notification

## Troubleshooting

### Photos not uploading
- Check `BLOB_READ_WRITE_TOKEN` is set correctly
- Verify file size < 10MB and format is JPG/PNG/WebP
- Check Vercel Blob storage quota

### Emails not sending
- Verify `RESEND_API_KEY` is correct
- Check domain verification in Resend dashboard
- In test mode, emails only sent to verified addresses
- Check Resend dashboard for delivery status

### Form validation errors
- Check Zod schema matches form fields
- Ensure required fields are marked in UI
- Check browser console for errors

### Modal not opening
- Check if `FunnelCTAButton` is imported correctly
- Verify component is in a client component ('use client')
- Check browser console for React errors

## Performance

- Form state persists in localStorage (auto-recovery)
- Photos uploaded before final submission
- Lazy loading for step components
- Optimistic UI updates
- Edge runtime for API routes

## Security

- Server-side validation in API routes
- File type and size validation for uploads
- Rate limiting recommended for production
- CORS headers configured
- Environment variables for sensitive data

## Future Enhancements

Potential improvements:
- [ ] Add reCAPTCHA to prevent spam
- [ ] Implement rate limiting
- [ ] Add email tracking/analytics
- [ ] Create admin dashboard for submissions
- [ ] Add SMS notifications via Twilio
- [ ] Integrate with CRM system
- [ ] Add A/B testing for funnel steps
- [ ] Implement exit-intent popup
- [ ] Add calendar integration for booking

## Support

For questions or issues:
- Email: dev@bcgroup-berlin.de
- Documentation: See inline code comments
- Vercel Blob: https://vercel.com/docs/storage/vercel-blob
- Resend: https://resend.com/docs
