import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.tsx?$/), module);

addDecorator(withKnobs);
addDecorator(withA11y);
