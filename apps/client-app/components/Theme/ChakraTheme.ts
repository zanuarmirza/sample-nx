import { extendTheme, ThemeConfig, ThemeOverride } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  colors: {
    brand: {
      50: '#fee4ff', // ghost hover bg
      100: '#ffb5f3',
      200: '#fa86e5',
      300: '#f656d3',
      400: '#f226bf',
      500: '#d90d9f',
      600: '#a90686', // outlined color
      700: '#790269',
      800: '#4b0045',
      900: '#1d001d',
    },
    pink: {
      500: '#f40085',
    },
    green: {
      500: '#039d5a',
      400: '#3cb878',
      300: '#00ff5a',
      100: '#b6ffd9',
    },
    reddish: '#E04F5F',
    dark: {
      900: '#151F2B',
      800: '#161f2c',
      700: '#192535',
      750: '#1c2736',
      600: '#263040',
      500: '#344964',
      400: '#010101',
      300: '#46638f',
      200: '#090e15',
      100: '#0e141e',
    },
    darkblue: '#46638f',
    'dark-gray': {
      500: '#828282',
    },
    gradient: {
      primary: `linear-gradient(
        to bottom,
        #ED2882 0%,
        #DF02E4 99%
      )`,
      primaryDark: `linear-gradient(
        to bottom,
        #790474 0%,
        #090D13 99%
      )`,
      secondary: `linear-gradient(
        to bottom,
        #4B6B9B 0%,
        #0E141E 99%
      )`,
      secondary2: `linear-gradient(
        to bottom,
        #1a376f 0%,
        #12264d 99%
      )`,
    },
    backgorund: 'white',
    backgroundNavDark: '#121924',
  },
};

type CustomColors = typeof colors;

const themeOverride = <ThemeOverride>{
  colors: { ...colors.colors },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('gray.100', 'dark.900')(props),
        overflowY: 'scroll',

        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        textRendering: 'optimizeLegibility',
      },
      html: {
        scrollBehavior: 'smooth',
      },
    }),
  },
  fonts: {
    heading: `Montserrat, sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: `Montserrat, sans-serif`,
        fontWeight: 'bold',
        rounded: 'full',
      },
      variants: {
        outline: {
          borderWidth: 2,
        },
        primary: {
          bg: 'gradient.primary',
          color: 'white',
        },
        'primary-outline': ({ colorMode }) => ({
          border: '2px',
          borderColor: colorMode === 'dark' ? 'brand.600' : 'brand.400',
          color: 'brand.500',
        }),
      },
      defaultProps: {
        variant: 'primary',
      },
    },
    Text: {
      baseStyle: {
        letterSpacing: 'tight',
      },
    },
    Card: {
      baseStyle: ({ colorMode }) => ({
        backgroundColor: colorMode === 'dark' ? 'dark.700' : 'white',
        borderRadius: 'xl',
      }),
    },
    Progress: {
      variants: {
        primary: {
          bg: 'gradient.primary',
        },
      },
    },
    FormLabel: {
      sizes: {
        md: {
          fontSize: '16px',
          fontWeight: 'normal',
          mb: '5px',
        },
        lg: {
          fontWeight: 'extrabold',
          mb: '18px',
          fontSize: '22px',
        },
      },
      defaultProps: {
        size: 'md',
      },
    },
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
    '3xl': '128em',
  },
  config,
}
const theme = extendTheme(themeOverride);
type CustomTheme = typeof theme & CustomColors;
export type { CustomTheme };
export { theme };
