import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      description: 'El contenido que se mostrará dentro del botón.',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'normal'],
      description: 'El estilo visual del botón.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'El tamaño del botón.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Si es verdadero, el botón ocupará todo el ancho de su contenedor.',
    },
    disabled: {
      control: 'boolean',
      description: 'Si es verdadero, el botón estará deshabilitado.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Click me!',
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    disabled: false,
  },
};
