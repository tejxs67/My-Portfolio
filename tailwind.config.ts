import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
		fontFamily: {
			'DSEG': ['DSEG 7', 'sans-serif'],
		  },
      colors: {
        background: 'hsl(var(--background))', // Default background color of <body />
        foreground: 'hsl(var(--foreground))', // Default foreground color (main text)

        card: {
          DEFAULT: 'hsl(var(--card))', // Background color for <Card />
          foreground: 'hsl(var(--card-foreground))' // Foreground color for <Card />
        },

        popover: {
          DEFAULT: 'hsl(var(--popover))', // Background color for <Popover />
          foreground: 'hsl(var(--popover-foreground))' // Foreground color for <Popover />
        },

        primary: {
          DEFAULT: 'hsl(var(--primary))', // Primary color (background for <Button />, etc.)
          foreground: 'hsl(var(--primary-foreground))' // Primary foreground color (text, icons)
        },

        secondary: {
          DEFAULT: 'hsl(var(--secondary))', // Secondary color for <Button />
          foreground: 'hsl(var(--secondary-foreground))' // Secondary foreground color for <Button />
        },

        muted: {
          DEFAULT: 'hsl(var(--muted))', // Muted background color
          foreground: 'hsl(var(--muted-foreground))' // Muted foreground color
        },

        accent: {
          DEFAULT: 'hsl(var(--accent))', // Accent color for hover effects, etc.
          foreground: 'hsl(var(--accent-foreground))' // Accent foreground color for hover text
        },

        destructive: {
          DEFAULT: 'hsl(var(--destructive))', // Color for destructive actions
          foreground: 'hsl(var(--destructive-foreground))' // Foreground color for destructive actions
        },

        border: 'hsl(var(--border))', // Default border color
        input: 'hsl(var(--input))', // Border color for inputs like <Input />, <Select />
        ring: 'hsl(var(--ring))', // Focus ring color

        // Custom chart colors (if needed)
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },

        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))', // Sidebar background color
          foreground: 'hsl(var(--sidebar-foreground))', // Sidebar text color
          primary: 'hsl(var(--sidebar-primary))', // Sidebar primary elements
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))', // Primary text color in sidebar
          accent: 'hsl(var(--sidebar-accent))', // Sidebar accent color
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))', // Sidebar accent text color
          border: 'hsl(var(--sidebar-border))', // Sidebar border color
          ring: 'hsl(var(--sidebar-ring))' // Sidebar ring for focus effects
        }
      },
      borderRadius: {
        lg: 'var(--radius)', // Large radius (for buttons, inputs, etc.)
        md: 'calc(var(--radius) - 2px)', // Medium radius
        sm: 'calc(var(--radius) - 4px)' // Small radius
      }
    }
  },
  darkMode: ['class'], // Enable class-based dark mode
  plugins: [require("tailwindcss-animate")],
} satisfies Config
