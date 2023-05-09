import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: 'Card',
    component: Card,
};

type Story = StoryObj<typeof Card>

export const Primary: Story = {
    render: () => <Card name="Test"  />,
}

export default meta;