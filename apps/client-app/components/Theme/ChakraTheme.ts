import { extendTheme, ThemeConfig, ThemeOverride } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const themeOverride = <ThemeOverride>{
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
          borderColor: colorMode === 'dark' ? 'yellow.400' : 'yellow.400',
          color: 'yellow.400',
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
type CustomTheme = typeof theme;
export type { CustomTheme };
export { theme };
