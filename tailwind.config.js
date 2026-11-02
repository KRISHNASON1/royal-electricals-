/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
			royal: {
				gold: '#B68B22',
				'gold-dark': '#8E6B18',
				'gold-light': '#F8F1D8',
				red: '#C8423D',
				'red-dark': '#9F2F2A',
				'red-light': '#FBEAE8'
			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			border: 'hsl(var(--border))',
  			primary: {
				'50': '#FBF8EC',
				'100': '#F5ECCB',
				'200': '#EBD995',
				'300': '#DCC05F',
				'400': '#CDAA3A',
				'500': '#B68B22',
				'600': '#98731B',
				'700': '#785A15',
				'800': '#5E4611',
				'900': '#47350E',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
				'50': '#FDF3F2',
				'100': '#FBEAE8',
				'200': '#F5CCC8',
				'300': '#ECA6A0',
				'400': '#DE7269',
				'500': '#C8423D',
				'600': '#B5332E',
				'700': '#9F2F2A',
				'800': '#812A26',
				'900': '#692623',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
			gray: {
				'50': '#FAFAF9',
				'100': '#F5F5F4',
				'200': '#E7E5E4',
				'300': '#D6D3D1',
				'400': '#A8A29E',
				'500': '#78716C',
				'600': '#57534E',
				'700': '#44403C',
				'800': '#292524',
				'900': '#1C1917',
				'950': '#0C0A09'
			},
  			success: {
				'50': '#ECFDF5',
  				'100': '#dcfce7',
  				'500': '#10B981',
  				'600': '#059669',
  				'800': '#166534'
  			},
  			warning: {
  				'50': '#FEF3C7',
  				'100': '#fef3c7',
  				'500': '#F59E0B',
  				'600': '#D97706'
  			},
  			error: {
  				'50': '#FEE2E2',
  				'100': '#fee2e2',
  				'500': '#EF4444',
  				'600': '#DC2626'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			display: [
  				'SF Pro Display',
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		spacing: {
  			'18': '4.5rem',
  			'88': '22rem',
  			'128': '32rem'
  		},
  		animation: {
  			'slide-in': 'slideIn 0.2s ease-out',
  			'fade-in': 'fadeIn 0.6s ease-out',
  			'fade-up': 'fadeUp 0.8s ease-out',
  			'scale-in': 'scaleIn 0.5s ease-out',
  			blob: 'blob 7s infinite',
  			float: 'float 6s ease-in-out infinite',
  			'gradient-xy': 'gradient-xy 3s ease infinite',
  			'ping-slow': 'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
  			'particle-1': 'particle-1 1.5s ease-out infinite',
  			'particle-2': 'particle-2 1.8s ease-out infinite',
  			'particle-3': 'particle-3 2s ease-out infinite',
  			'particle-4': 'particle-4 1.6s ease-out infinite'
  		},
  		keyframes: {
  			slideIn: {
  				'0%': {
  					transform: 'translateX(-100%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			fadeUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(30px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			scaleIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'scale(0.9)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			},
  			blob: {
  				'0%': {
  					transform: 'translate(0px, 0px) scale(1)'
  				},
  				'33%': {
  					transform: 'translate(30px, -50px) scale(1.1)'
  				},
  				'66%': {
  					transform: 'translate(-20px, 20px) scale(0.9)'
  				},
  				'100%': {
  					transform: 'translate(0px, 0px) scale(1)'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			'gradient-xy': {
  				'0%, 100%': {
  					'background-position': '0% 50%'
  				},
  				'50%': {
  					'background-position': '100% 50%'
  				}
  			},
  			'ping-slow': {
  				'0%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				},
  				'75%, 100%': {
  					transform: 'scale(1.5)',
  					opacity: '0'
  				}
  			},
  			'particle-1': {
  				'0%': {
  					transform: 'translate(0, 0) scale(0)',
  					opacity: '0'
  				},
  				'50%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'translate(-20px, -30px) scale(1)',
  					opacity: '0'
  				}
  			},
  			'particle-2': {
  				'0%': {
  					transform: 'translate(0, 0) scale(0)',
  					opacity: '0'
  				},
  				'50%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'translate(25px, -35px) scale(1)',
  					opacity: '0'
  				}
  			},
  			'particle-3': {
  				'0%': {
  					transform: 'translate(0, 0) scale(0)',
  					opacity: '0'
  				},
  				'50%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'translate(-30px, 20px) scale(1)',
  					opacity: '0'
  				}
  			},
  			'particle-4': {
  				'0%': {
  					transform: 'translate(0, 0) scale(0)',
  					opacity: '0'
  				},
  				'50%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'translate(35px, 25px) scale(1)',
  					opacity: '0'
  				}
  			}
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/forms'),
      require("tailwindcss-animate")
],
}
