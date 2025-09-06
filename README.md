# TechCraft Solutions - IT Startup Landing Page

A modern landing page for an IT startup specializing in web and mobile application development using Next.js and MySQL with Prisma ORM.

## Technologies Used

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Database**: MySQL with Prisma ORM
- **Styling**: Tailwind CSS with custom dotted background pattern

## Features

- Responsive design with mobile navigation
- Modern UI with dotted background pattern similar to eupay.webflow.io
- Services section showcasing offerings
- Technology stack display
- Testimonials section
- Contact call-to-action
- Complete footer with navigation

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Development Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd heejra
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Database Management

- Generate Prisma client: `npm run db:generate`
- Run database migrations: `npm run db:migrate`
- Open Prisma Studio: `npm run db:studio`

## Project Structure

```
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── page.tsx      # Landing page
│   │   ├── layout.tsx    # Root layout
│   │   └── globals.css   # Global styles
├── prisma/
│   └── schema.prisma     # Prisma schema
├── public/               # Static assets
└── README.md             # This file
```

## Customization

To customize the landing page:

1. Modify content in `src/app/page.tsx`
2. Update styles in `src/app/globals.css`
3. Adjust database models in `prisma/schema.prisma`
4. Update environment variables in `.env`

## Deployment

The application can be deployed to any Node.js hosting platform. Make sure to set the appropriate environment variables for database connection.