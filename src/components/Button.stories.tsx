import React from 'react';
import Button from './Button';

export default { title: 'Button' };

export const withText = () => <Button text='Hello Button' />;

export const withEmoji = () => (
	<Button text='😀 😎 👍 💯' />
);