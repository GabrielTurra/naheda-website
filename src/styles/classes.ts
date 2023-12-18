import { theme } from "@/stitches.config";
import { breakpoints } from "./tokens";

const themeClasses = {
  // Generate text color and background classes
  ...Object.entries(theme.colors).reduce((colorAcc, color) => {
    // @ts-ignore
    // Create text colors
    colorAcc[`.text-${color[0]}`] = {
      color: color[1].value,
    };

    // @ts-ignore
    // Create background colors
    colorAcc[`.bg-${color[0]}`] = {
      backgroundColor: color[1].value,
    };

    return colorAcc;
  }, {}),

  // Generate paddings and margins classes
  ...Object.entries(theme.space).reduce((spaceAcc, space) => {
    // @ts-ignore
    // Create m
    spaceAcc[`.m-${space[0]}`] = {
      margin: space[1].value,
    };

    // @ts-ignore
    // Create mx
    spaceAcc[`.mx-${space[0]}`] = {
      marginLeft: space[1].value,
      marginRight: space[1].value,
    };

    // @ts-ignore
    // Create my
    spaceAcc[`.my-${space[0]}`] = {
      marginTop: space[1].value,
      marginBottom: space[1].value,
    };

    // @ts-ignore
    // Create ml
    spaceAcc[`.ml-${space[0]}`] = {
      marginLeft: space[1].value,
    };

    // @ts-ignore
    // Create mr
    spaceAcc[`.mr-${space[0]}`] = {
      marginRight: space[1].value,
    };

    // @ts-ignore
    // Create mt
    spaceAcc[`.mt-${space[0]}`] = {
      marginTop: space[1].value,
    };

    // @ts-ignore
    // Create mb
    spaceAcc[`.mb-${space[0]}`] = {
      marginBottom: space[1].value,
    };

    // @ts-ignore
    // Create p
    spaceAcc[`.p-${space[0]}`] = {
      padding: space[1].value,
    };

    // @ts-ignore
    // Create mx
    spaceAcc[`.px-${space[0]}`] = {
      paddingLeft: space[1].value,
      paddingRight: space[1].value,
    };

    // @ts-ignore
    // Create my
    spaceAcc[`.py-${space[0]}`] = {
      paddingTop: space[1].value,
      paddingBottom: space[1].value,
    };

    // @ts-ignore
    // Create ml
    spaceAcc[`.pl-${space[0]}`] = {
      paddingLeft: space[1].value,
    };

    // @ts-ignore
    // Create mr
    spaceAcc[`.pr-${space[0]}`] = {
      paddingRight: space[1].value,
    };

    // @ts-ignore
    // Create mt
    spaceAcc[`.pt-${space[0]}`] = {
      paddingTop: space[1].value,
    };

    // @ts-ignore
    // Create mb
    spaceAcc[`.pb-${space[0]}`] = {
      paddingBottom: space[1].value,
    };

    return spaceAcc;
  }, {}),
};

export const themeResposiveClasses = Object.keys(breakpoints).reduce(
  (acc, breakpoint) => {
    acc = {
      ...acc,
      ...Object.entries(theme.colors).reduce((colorAcc, color) => {
        // @ts-ignore
        // Create text colors
        colorAcc[`.text-${breakpoint}-${color[0]}`] = {
          [`@${breakpoint}`]: {
            color: color[1].value,
          },
        };

        // @ts-ignore
        // Create background colors
        colorAcc[`.bg-${breakpoint}-${color[0]}`] = {
          [`@${breakpoint}`]: {
            backgroundColor: color[1].value,
          },
        };

        return colorAcc;
      }, {}),
      ...Object.entries(theme.space).reduce((spaceAcc, space) => {
        // @ts-ignore
        // Create m
        spaceAcc[`.m-${breakpoint}-${space[0]}`] = {
          [`@${breakpoint}`]: {
            margin: space[1].value,
          },
        };

        // @ts-ignore
        // Create mx
        spaceAcc[`.mx-${breakpoint}-${space[0]}`] = {
          [`@${breakpoint}`]: {
            marginLeft: space[1].value,
            marginRight: space[1].value,
          },
        };

        // @ts-ignore
        // Create my
        spaceAcc[`.my-${breakpoint}-${space[0]}`] = {
          [`@${breakpoint}`]: {
            marginTop: space[1].value,
            marginBottom: space[1].value,
          },
        };

        // @ts-ignore
        // Create ml
        spaceAcc[`.ml-${breakpoint}-${space[0]}`] = {
          [`@${breakpoint}`]: {
            marginLeft: space[1].value,
          },
        };

        // @ts-ignore
        // Create mr
        spaceAcc[`.mr-${breakpoint}-${space[0]}`] = {
          [`@${breakpoint}`]: {
            marginRight: space[1].value,
          },
        };

        // @ts-ignore
        // Create mt
        spaceAcc[`.mt-${breakpoint}-${space[0]}`] = {
          [`@${breakpoint}`]: {
            marginTop: space[1].value,
          },
        };

        // @ts-ignore
        // Create mb
        spaceAcc[`.mb-${breakpoint}-${space[0]}`] = {
          [`@${breakpoint}`]: {
            marginBottom: space[1].value,
          },
        };

        // @ts-ignore
        // Create p
        spaceAcc[`.p-${breakpoint}-${space[0]}`] = {
          [`@${breakpoint}`]: {
            padding: space[1].value,
          },
        };

        // @ts-ignore
        // Create mx
        spaceAcc[`.px-${breakpoint}-${space[0]}`] = {
          [`@${breakpoint}`]: {
            paddingLeft: space[1].value,
            paddingRight: space[1].value,
          },
        };

        // @ts-ignore
        // Create my
        spaceAcc[`.py-${breakpoint}-${space[0]}`] = {
          [`@${breakpoint}`]: {
            paddingTop: space[1].value,
            paddingBottom: space[1].value,
          },
        };

        // @ts-ignore
        // Create ml
        spaceAcc[`.pl-${breakpoint}-${space[0]}`] = {
          [`@${breakpoint}`]: {
            paddingLeft: space[1].value,
          },
        };

        // @ts-ignore
        // Create mr
        spaceAcc[`.pr-${breakpoint}-${space[0]}`] = {
          [`@${breakpoint}`]: {
            paddingRight: space[1].value,
          },
        };

        // @ts-ignore
        // Create mt
        spaceAcc[`.pt-${breakpoint}-${space[0]}`] = {
          [`@${breakpoint}`]: {
            paddingTop: space[1].value,
          },
        };

        // @ts-ignore
        // Create mb
        spaceAcc[`.pb-${breakpoint}-${space[0]}`] = {
          [`@${breakpoint}`]: {
            paddingBottom: space[1].value,
          },
        };

        return spaceAcc;
      }, {}),
    };

    return acc;
  },
  {},
);

export const globalClasses = {
  ...themeClasses,
  ...themeResposiveClasses,
};
